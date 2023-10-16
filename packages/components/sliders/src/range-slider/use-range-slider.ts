import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useCallbackRef } from '@julo-ui/use-callback-ref';
import { clampValue } from '@julo-ui/number-utils';
import { useControllableState } from '@julo-ui/use-controllable-state';
import { useWatchElementsSize } from '@julo-ui/use-watch-element-size';

import {
  useHandleDragging,
  useHandleFocus,
  useHandleReversed,
  useHandleStyle,
} from '../usecase';
import { RANGE_SLIDER_DEFAULT_VALUE } from './constants';
import type {
  RangeSliderActions,
  RangeSliderState,
  UseRangeSliderProps,
} from './types';
import { getIds, getThumbStateOnChange, getValueBounds } from './utils';
import { roundValueToStep, valueToPercent } from '../utils';
import { useHandleFocusThumb, useHandlePanEvent } from './usecase';
import { PropGetter, RequiredPropGetter } from '@julo-ui/system';
import { ariaAttr, dataAttr, mergeRefs } from '@julo-ui/dom-utils';
import { callAllFn, isTrullyEmpty } from '@julo-ui/function-utils';

export type UseRangeSliderReturn = ReturnType<typeof useRangeSlider>;

export function useRangeSlider(props: UseRangeSliderProps) {
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
    minStepsBetweenThumbs = 0,
    isDisableSwap = false,
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
    defaultValue: defaultValue ?? RANGE_SLIDER_DEFAULT_VALUE,
    onChange,
  });

  if (!Array.isArray(computedValue)) {
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof computedValue}\``,
    );
  }

  const [activeIndex, setActiveIndex] = useState(-1);

  const initialValue = useRef(computedValue);

  const isInteractive = !(isDisabled || isReadOnly);
  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;

  const value = computedValue.map((val) => clampValue(val, min, max));
  const prevValue = useRef(value);
  const distanceBetweenThumbs = minStepsBetweenThumbs * step;
  const valueBounds = getValueBounds(value, min, max, distanceBetweenThumbs);
  const reversedValue = value.map((val) => max - val + min);
  const thumbValues = isReversed ? reversedValue : value;
  const thumbPercents = thumbValues.map((val) => valueToPercent(val, min, max));

  const isVertical = orientation === 'vertical';

  const trackRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  const reactId = useId();
  const uuid = idProp ?? reactId;
  const ids = getIds(uuid);

  const thumbSizes = useWatchElementsSize({
    getNodes() {
      const rootNode = rootRef.current;
      const thumbNodes =
        rootNode?.querySelectorAll<HTMLElement>('[role=slider]');
      return thumbNodes ? Array.from(thumbNodes) : [];
    },
  });

  const { isDragging, onDraggingStart, onDraggingEnd } = useHandleDragging();
  const {
    isFocused,
    onBlur: onInputBlur,
    onFocus: onInputFocus,
  } = useHandleFocus();

  const sliderStates = useMemo<RangeSliderState>(
    () => ({
      eventSource: null,
      value,
      valueBounds,
      getThumbMaxValue: (index: number) => valueBounds[index].max,
      getThumbMinValue: (index: number) => valueBounds[index].min,
      getThumbPercent: (index: number) => thumbPercents[index],
      isFocused,
      isDragging,
      focusThumbOnChange,
      isDisabled,
      isInteractive,
      isReversed,
      isVertical,
      max,
      min,
      orientation,
      step: oneStep,
      tenSteps,
      distanceBetweenThumbs,
    }),
    [
      distanceBetweenThumbs,
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
      thumbPercents,
      value,
      valueBounds,
    ],
  );

  const { onFocusThumb } = useHandleFocusThumb({
    activeIndex,
    focusThumbOnChange,
    ids,
    rootRef,
  });

  const actions: RangeSliderActions = useMemo(
    () => ({
      setValueAtIndex(index: number, value: number) {
        if (!sliderStates.isInteractive) return;

        const bounds = sliderStates.valueBounds[index];
        value = parseFloat(roundValueToStep(value, bounds.min, oneStep));
        value = clampValue(value, bounds.min, bounds.max);

        const next = [...sliderStates.value];
        next[index] = value;

        setComputedValue(next);
      },
      setActiveIndex,
      stepUp(index: number, step = oneStep) {
        const bounds = [...sliderStates.valueBounds];
        const values = [...sliderStates.value];

        const valueAtIndex = sliderStates.value[index];
        const next = sliderStates.isReversed
          ? valueAtIndex - step
          : valueAtIndex + step;
        const { index: newIndex, value } = getThumbStateOnChange({
          bounds,
          values,
          pointerValue: next,
          index,
          isDisableSwap,
          prevValue: prevValue.current,
          step: sliderStates.step,
          distanceBetweenThumbs,
        });

        actions.setValue(value);
        setActiveIndex(newIndex);
        onFocusThumb(newIndex);
      },
      stepDown(index: number, step = oneStep) {
        const bounds = [...sliderStates.valueBounds];
        const values = [...sliderStates.value];

        const valueAtIndex = sliderStates.value[index];
        const next = sliderStates.isReversed
          ? valueAtIndex + step
          : valueAtIndex - step;

        const { index: newIndex, value } = getThumbStateOnChange({
          bounds,
          values,
          pointerValue: next,
          index,
          isDisableSwap,
          prevValue: prevValue.current,
          step: sliderStates.step,
          distanceBetweenThumbs,
        });

        actions.setValue(value);
        setActiveIndex(newIndex);
        onFocusThumb(newIndex);
      },
      setValue: setComputedValue,
      reset() {
        setComputedValue(initialValue.current);
      },
    }),
    [
      distanceBetweenThumbs,
      isDisableSwap,
      onFocusThumb,
      oneStep,
      setComputedValue,
      sliderStates.isInteractive,
      sliderStates.isReversed,
      sliderStates.step,
      sliderStates.value,
      sliderStates.valueBounds,
    ],
  );

  const {
    getThumbStyle,
    innerTrackStyle,
    getMarkerStyle,
    rootStyle,
    trackStyle,
  } = useHandleStyle({
    isReversed: sliderStates.isReversed,
    orientation: sliderStates.orientation,
    thumbPercents,
    thumbSizes,
  });

  useHandlePanEvent({
    onChangeEnd,
    onChangeStart,
    onDraggingEnd,
    onDraggingStart,
    onFocusThumb,
    rootRef,
    sliderStates,
    activeIndex,
    trackRef,
    actions,
    isDisableSwap,
    prevValue,
    distanceBetweenThumbs,
  });

  const onThumbKeyUp = useCallback(() => {
    prevValue.current = sliderStates.value;
  }, [sliderStates.value]);

  const onThumbKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const keyMap: Record<string, React.KeyboardEventHandler> = {
        ArrowRight: () => actions.stepUp(activeIndex),
        ArrowUp: () => actions.stepUp(activeIndex),
        ArrowLeft: () => actions.stepDown(activeIndex),
        ArrowDown: () => actions.stepDown(activeIndex),
        PageUp: () => actions.stepUp(activeIndex, tenSteps),
        PageDown: () => actions.stepDown(activeIndex, tenSteps),
        Home: () => {
          const { min: value } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value);
        },
        End: () => {
          const { max: value } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value);
        },
      };

      const action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        sliderStates.eventSource = 'keyboard';
      }
    },
    [actions, activeIndex, sliderStates, tenSteps, valueBounds],
  );

  const getRootProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...resRootProps,
      ...props,
      id: ids.root,
      ref: mergeRefs(forwardedRef, rootRef),
      tabIndex: -1,
      style: { ...props.style, ...rootStyle },
      'aria-disabled': ariaAttr(isDisabled),
      'data-focused': dataAttr(isFocused),
    }),
    [ids.root, isDisabled, isFocused, resRootProps, rootStyle],
  );

  const getTrackProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: mergeRefs(forwardedRef, trackRef),
      id: ids.track,
      'data-disabled': dataAttr(isDisabled),
      style: { ...props.style, ...trackStyle },
    }),
    [ids.track, isDisabled, trackStyle],
  );

  const getInnerTrackProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      id: ids.innerTrack,
      style: { ...props.style, ...innerTrackStyle },
    }),
    [ids.innerTrack, innerTrackStyle],
  );

  const getThumbProps: RequiredPropGetter<{ index: number }> = useCallback(
    (props, forwardedRef = null) => {
      const { index, style, onKeyDown, onKeyUp, onFocus, onBlur, ...resProps } =
        props;

      const valueAtIndex = sliderStates.value[index];
      const bounds = sliderStates.valueBounds[index];

      if (isTrullyEmpty(valueAtIndex))
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${index}\`. The \`value\` or \`defaultValue\` length is : ${sliderStates.value.length}`,
        );

      return {
        ...resProps,
        ref: forwardedRef,
        role: 'slider',
        ...(isInteractive && { tabIndex: 0 }),
        id: ids.getThumb(index),
        'data-active': dataAttr(isDragging && activeIndex === index),
        'aria-valuetext':
          getAriaValueText?.(valueAtIndex) ?? ariaValueText?.[index],
        'aria-valuemin': bounds.min,
        'aria-valuemax': bounds.max,
        'aria-valuenow': valueAtIndex,
        'aria-orientation': orientation,
        'aria-disabled': ariaAttr(isDisabled),
        'aria-readonly': ariaAttr(isReadOnly),
        'aria-label': ariaLabel?.[index],
        ...(!ariaLabel?.[index] && {
          'aria-labelledby': ariaLabelledBy?.[index],
        }),
        style: { ...style, ...getThumbStyle(index) },
        onKeyUp: callAllFn(onThumbKeyUp, onKeyUp),
        onKeyDown: callAllFn(onThumbKeyDown, onKeyDown),
        onFocus: callAllFn(onInputFocus, () => setActiveIndex(index), onFocus),
        onBlur: callAllFn(onInputBlur, () => setActiveIndex(-1), onBlur),
      };
    },
    [
      activeIndex,
      ariaLabel,
      ariaLabelledBy,
      ariaValueText,
      getAriaValueText,
      getThumbStyle,
      ids,
      isDisabled,
      isDragging,
      isInteractive,
      isReadOnly,
      onInputBlur,
      onInputFocus,
      onThumbKeyDown,
      onThumbKeyUp,
      orientation,
      sliderStates.value,
      sliderStates.valueBounds,
    ],
  );

  const getOutputProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      id: ids.output,
      htmlFor: value.map((_v, i) => ids.getThumb(i)).join(' '),
      'aria-live': 'off',
    }),
    [ids, value],
  );

  const getMarkerProps: RequiredPropGetter<{ value: number }> = useCallback(
    (props, forwardedRef = null) => {
      const { value: markerValue, style, ...resProps } = props;

      const isInRange = !(
        markerValue < sliderStates.min ||
        markerValue ||
        sliderStates.max
      );

      const isHighlighted =
        markerValue >= sliderStates.value[0] &&
        markerValue <= sliderStates.value[sliderStates.value.length - 1];

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
    [
      getMarkerStyle,
      isDisabled,
      isReversed,
      max,
      min,
      sliderStates.max,
      sliderStates.min,
      sliderStates.value,
    ],
  );

  const getInputProps: RequiredPropGetter<{ index: number }> = useCallback(
    (props, forwardedRef = null) => {
      const { index, ...resProps } = props;
      return {
        ...resProps,
        ref: forwardedRef,
        id: ids.getInput(index),
        type: 'hidden',
        value: sliderStates.value[index],
        name: name
          ? Array.isArray(name)
            ? name[index]
            : `${name}-${index}`
          : `${ids.getInput(index)}-${index}`,
      };
    },
    [ids, name, sliderStates.value],
  );

  useEffect(() => {
    if (sliderStates.eventSource === 'keyboard') {
      onChangeEnd?.(sliderStates.value);
    }
  }, [value, onChangeEnd, sliderStates.eventSource, sliderStates.value]);

  return {
    state: sliderStates,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps,
  };
}
