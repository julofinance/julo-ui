import { useCallback } from 'react';
import { usePanEvent } from '@chakra-ui/react-use-pan-event';

import { _noop } from '@julo-ui/function-utils';

import { isMouseEvent, percentToValue } from '../../utils';
import {
  RangeSliderActions,
  RangeSliderState,
  UseRangeSliderProps,
} from '../types';
import { getThumbStateOnChange } from '../utils';

interface UseHandlePanEventOptions {
  rootRef: React.RefObject<HTMLElement>;
  trackRef: React.RefObject<HTMLElement | null>;
  activeIndex: number;
  sliderStates: RangeSliderState;
  actions: RangeSliderActions;
  onFocusThumb: (index: number) => void;
  onChangeStart: UseRangeSliderProps['onChangeStart'];
  onChangeEnd: UseRangeSliderProps['onChangeEnd'];
  onDraggingStart: () => void;
  onDraggingEnd: () => void;
  isDisableSwap: boolean;
  prevValue: React.MutableRefObject<number[]>;
  distanceBetweenThumbs: number;
}

function useHandlePanEvent(options: UseHandlePanEventOptions) {
  const {
    rootRef,
    trackRef,
    sliderStates,
    activeIndex,
    actions,
    onFocusThumb,
    onDraggingStart,
    onDraggingEnd,
    onChangeStart = _noop,
    onChangeEnd = _noop,
    isDisableSwap,
    prevValue,
    distanceBetweenThumbs,
  } = options;

  const getValueFromPointer = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      if (!trackRef.current) return;

      sliderStates.eventSource = 'pointer';

      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = !isMouseEvent(event)
        ? event.touches?.[0]
        : event;

      const diff = sliderStates.isVertical
        ? trackRect.bottom - clientY
        : clientX - trackRect.left;
      const length = sliderStates.isVertical
        ? trackRect.height
        : trackRect.width;

      let percent = diff / length;
      if (sliderStates.isReversed) percent = 1 - percent;

      return percentToValue(percent, sliderStates.min, sliderStates.max);
    },
    [trackRef, sliderStates],
  );

  const onPanSessionStart = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      if (!sliderStates.isInteractive) return;

      onDraggingStart();

      const pointValue = getValueFromPointer(event) ?? 0;
      const distances = sliderStates.value.map((value) =>
        Math.abs(value - pointValue),
      );
      const closest = Math.min(...distances);
      let targetIndex = distances.indexOf(closest);

      /**
       * check if the clicked thumb is stacked by
       * checking if there are multiple thumbs at the same distance
       */
      const thumbsPosition = distances.filter(
        (distance) => distance === closest,
      );
      const isThumbStacked = thumbsPosition.length > 1;

      /**
       * when two thumbs are stacked and
       * the user clicks at a point larger than their values,
       * pick the last thumb with the greatest index
       */
      if (isThumbStacked && pointValue > sliderStates.value[targetIndex]) {
        targetIndex = targetIndex + thumbsPosition.length - 1;
      }

      actions.setActiveIndex(targetIndex);
      actions.setValueAtIndex(targetIndex, pointValue);
      onFocusThumb(targetIndex);
      onChangeStart(sliderStates.value);
    },
    [
      actions,
      getValueFromPointer,
      onChangeStart,
      onDraggingStart,
      onFocusThumb,
      sliderStates.isInteractive,
      sliderStates.value,
    ],
  );

  const onPan = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      if (!sliderStates.isInteractive || activeIndex === -1) return;

      const pointerValue = getValueFromPointer(event) ?? 0;
      const values = [...sliderStates.value];
      const bounds = [...sliderStates.valueBounds];

      const { index, value } = getThumbStateOnChange({
        pointerValue,
        values,
        bounds,
        isDisableSwap,
        index: activeIndex,
        prevValue: prevValue.current,
        step: sliderStates.step,
        distanceBetweenThumbs,
      });

      actions.setActiveIndex(index);
      actions.setValue(value);
      onFocusThumb(index);
    },
    [
      actions,
      activeIndex,
      distanceBetweenThumbs,
      getValueFromPointer,
      isDisableSwap,
      onFocusThumb,
      prevValue,
      sliderStates.isInteractive,
      sliderStates.step,
      sliderStates.value,
      sliderStates.valueBounds,
    ],
  );

  usePanEvent(rootRef, {
    onPanSessionStart,
    onPanSessionEnd() {
      if (!sliderStates.isInteractive) return;
      onDraggingEnd();
      prevValue.current = sliderStates.value;
      onChangeEnd(sliderStates.value);
    },
    onPan,
  });
}

export default useHandlePanEvent;
