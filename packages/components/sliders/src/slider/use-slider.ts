import { useCallback, useId, useMemo, useRef } from 'react';

import { PropGetter, RequiredPropGetter } from '@julo-ui/system';
import { callAllFn } from '@julo-ui/function-utils';
import { clampValue } from '@julo-ui/number-utils';
import { ariaAttr, dataAttr, mergeRefs } from '@julo-ui/dom-utils';
import { useCallbackRef } from '@julo-ui/use-callback-ref';
import { useControllableState } from '@julo-ui/use-controllable-state';
import { useWatchElementSize } from '@julo-ui/use-watch-element-size';

import {
  useHandleDragging,
  useHandleReversed,
  useHandleFocus,
  useHandleStyle,
} from '../usecase';
import { useHandleFocusThumb, useHandlePanEvent } from './usecase';
import { getDefaultValue } from './utils';
import type { SliderActions, SliderState, UseSliderProps } from './types';
import { roundValueToStep, valueToPercent } from '../utils';

export type UseSliderReturn = ReturnType<typeof useSlider>;

export function useSlider(props: UseSliderProps) {
  const {
    min = 0,
    max = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = 'ltr',
    orientation = 'horizontal',
    id: idProp,
    isDisabled = false,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    'aria-valuetext': ariaValueText,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...resRootProps
  } = props;

  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);

  const isReversed = useHandleReversed({
    isReversed: isReversedProp,
    direction,
    orientation,
  });

  const [computedValue, setComputedValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? getDefaultValue(min, max),
    onChange,
  });

  const isInteractive = !(isDisabled || isReadOnly);

  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;

  /**
   * Constrain the value because it can't be less than min
   * or greater than max
   */
  const value = clampValue(computedValue, min, max);
  const reversedValue = max - value + min;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent(trackValue, min, max);

  const isVertical = orientation === 'vertical';

  const trackRef = useRef<HTMLElement>(null);
  const thumbRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  const reactId = useId();
  const uuid = idProp ?? reactId;
  const thumbId = `slider-thumb-${uuid}`;
  const trackId = `slider-track-${uuid}`;

  /**
   * ARIA (Optional): To define a human-readable representation of the value,
   * we allow users pass aria-valuetext.
   */
  const valueText = getAriaValueText?.(value) ?? ariaValueText;

  /**
   * Measure the dimensions of the thumb, so
   * we can center it within the track properly
   */
  const thumbSize = useWatchElementSize(thumbRef);

  const { isDragging, onDraggingStart, onDraggingEnd } = useHandleDragging();
  const {
    isFocused,
    onBlur: onInputBlur,
    onFocus: onInputFocus,
  } = useHandleFocus();

  const sliderStates = useMemo<SliderState>(
    () => ({
      tenSteps,
      min,
      max,
      step: oneStep,
      isDisabled,
      value,
      isInteractive,
      isReversed,
      isVertical,
      eventSource: null as 'pointer' | 'keyboard' | null,
      focusThumbOnChange,
      orientation,
      isDragging,
      isFocused,
    }),
    [
      focusThumbOnChange,
      isDisabled,
      isDragging,
      isFocused,
      isInteractive,
      isReversed,
      isVertical,
      max,
      min,
      oneStep,
      orientation,
      tenSteps,
      value,
    ],
  );

  const constrain = useCallback(
    (value: number) => {
      if (!sliderStates.isInteractive) return;
      value = parseFloat(roundValueToStep(value, sliderStates.min, oneStep));
      value = clampValue(value, sliderStates.min, sliderStates.max);
      setComputedValue(value);
    },
    [
      oneStep,
      setComputedValue,
      sliderStates.isInteractive,
      sliderStates.max,
      sliderStates.min,
    ],
  );

  const actions: SliderActions = useMemo(
    () => ({
      stepUp(step = oneStep) {
        const next = isReversed ? value - step : value + step;
        constrain(next);
      },
      stepDown(step = oneStep) {
        const next = isReversed ? value + step : value - step;
        constrain(next);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value: number) {
        constrain(value);
      },
    }),
    [constrain, isReversed, value, oneStep, defaultValue],
  );

  const {
    getThumbStyle,
    getMarkerStyle,
    innerTrackStyle,
    rootStyle,
    trackStyle,
  } = useHandleStyle({
    isReversed: sliderStates.isReversed,
    orientation: sliderStates.orientation,
    thumbPercents: [thumbPercent],
    thumbSizes: [thumbSize],
  });

  const { onFocusThumb } = useHandleFocusThumb({
    eventSource: sliderStates.eventSource,
    focusThumbOnChange: sliderStates.focusThumbOnChange,
    onChangeEnd,
    thumbRef,
    value: sliderStates.value,
  });

  useHandlePanEvent({
    onChangeEnd,
    onChangeStart,
    onDraggingEnd,
    onDraggingStart,
    onFocusThumb,
    rootRef,
    setComputedValue,
    sliderStates,
    trackRef,
  });

  const onThumbKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const keyMap: Record<string, React.KeyboardEventHandler> = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(sliderStates.min),
        End: () => constrain(sliderStates.max),
      };

      const action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        sliderStates.eventSource = 'keyboard';
      }
    },
    [actions, constrain, tenSteps, sliderStates],
  );

  const getRootProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...resRootProps,
      ref: mergeRefs(forwardedRef, rootRef),
      tabIndex: -1,
      'aria-disabled': ariaAttr(isDisabled),
      'data-focused': dataAttr(isFocused),
      style: {
        ...props.style,
        ...rootStyle,
      },
    }),
    [resRootProps, isDisabled, isFocused, rootStyle],
  );

  const getTrackProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: mergeRefs(forwardedRef, trackRef),
      id: trackId,
      'data-disabled': dataAttr(isDisabled),
      style: {
        ...props.style,
        ...trackStyle,
      },
    }),
    [isDisabled, trackId, trackStyle],
  );

  const getInnerTrackProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      style: {
        ...props.style,
        ...innerTrackStyle,
      },
    }),
    [innerTrackStyle],
  );

  const getThumbProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const { onKeyDown, onFocus, onBlur, style, ...resProps } = props;

      return {
        ...resProps,
        ref: mergeRefs(forwardedRef, thumbRef),
        role: 'slider',
        ...(isInteractive && { tabIndex: 0 }),
        id: thumbId,
        'data-active': dataAttr(isDragging),
        'aria-valuetext': valueText,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-orientation': orientation,
        'aria-disabled': ariaAttr(isDisabled),
        'aria-readonly': ariaAttr(isReadOnly),
        'aria-label': ariaLabel,
        ...(!ariaLabel && { 'aria-labelledby': ariaLabelledBy }),
        style: {
          ...style,
          ...getThumbStyle(0),
        },
        onKeyDown: callAllFn(onThumbKeyDown, onKeyDown),
        onFocus: callAllFn(onInputFocus, onFocus),
        onblur: callAllFn(onInputBlur, onBlur),
      };
    },
    [
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      isDisabled,
      isDragging,
      isInteractive,
      isReadOnly,
      max,
      min,
      onInputBlur,
      onInputFocus,
      onThumbKeyDown,
      orientation,
      thumbId,
      value,
      valueText,
    ],
  );

  const getMarkerProps: RequiredPropGetter<{ value: number }> = useCallback(
    (props, forwardedRef = null) => {
      const { value: markerValue, style, ...resProps } = props;

      const isInRange = !(markerValue < min || markerValue > max);
      const isHighlighted = value >= markerValue;
      const markerPercent = valueToPercent(markerValue, min, max);

      const percent = isReversed ? 100 - markerPercent : markerPercent;

      return {
        ...resProps,
        ref: forwardedRef,
        role: 'presentation',
        'aria-hidden': true,
        'data-disabled': dataAttr(isDisabled),
        'data-invalid': dataAttr(!isInRange),
        'data-highlighted': dataAttr(isHighlighted),
        style: {
          ...style,
          ...getMarkerStyle(percent),
        },
      };
    },
    [getMarkerStyle, isDisabled, isReversed, max, min, value],
  );

  const getInputProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      type: 'hidden',
      value,
      name,
    }),
    [name, value],
  );

  return {
    state: sliderStates,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
  };
}
