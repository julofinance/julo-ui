import { useCallback } from 'react';
import { usePanEvent } from '@chakra-ui/react-use-pan-event';

import { _noop } from '@julo-ui/function-utils';
import { clampValue } from '@julo-ui/number-utils';

import { isMouseEvent, percentToValue, roundValueToStep } from '../../utils';
import { SliderState, UseSliderProps } from '../types';

interface UseHandlePanEventOptions {
  rootRef: React.RefObject<HTMLElement>;
  trackRef: React.RefObject<HTMLElement | null>;
  onFocusThumb: () => void;
  onDraggingStart: () => void;
  onDraggingEnd: () => void;
  onChangeStart: UseSliderProps['onChangeStart'];
  onChangeEnd: UseSliderProps['onChangeEnd'];
  sliderStates: SliderState;
  setComputedValue: React.Dispatch<React.SetStateAction<number>>;
}

function useHandlePanEvent(options: UseHandlePanEventOptions) {
  const {
    rootRef,
    onDraggingEnd,
    onDraggingStart,
    onFocusThumb,
    onChangeStart = _noop,
    onChangeEnd = _noop,
    sliderStates,
    trackRef,
    setComputedValue,
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

      if (sliderStates.isReversed) {
        percent = 1 - percent;
      }

      let nextValue = percentToValue(
        percent,
        sliderStates.min,
        sliderStates.max,
      );

      if (sliderStates.step) {
        nextValue = parseFloat(
          roundValueToStep(nextValue, sliderStates.min, sliderStates.step),
        );
      }

      nextValue = clampValue(nextValue, sliderStates.min, sliderStates.max);

      return nextValue;
    },
    [trackRef, sliderStates],
  );

  function setValueFromPointer(event: MouseEvent | TouchEvent | PointerEvent) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== sliderStates.value) {
      setComputedValue(nextValue);
    }
  }

  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      if (!sliderStates.isInteractive) return;
      onDraggingStart();
      onFocusThumb();
      setValueFromPointer(event);
      onChangeStart(sliderStates.value);
    },
    onPanSessionEnd() {
      if (!sliderStates.isInteractive) return;
      onDraggingEnd();
      onChangeEnd(sliderStates.value);
    },
    onPan(event) {
      if (!sliderStates.isInteractive) return;
      setValueFromPointer(event);
    },
  });
}

export default useHandlePanEvent;
