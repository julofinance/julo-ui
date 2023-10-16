import { useCallback, useEffect, useRef } from 'react';

import { _noop } from '@julo-ui/function-utils';

import { EventSource } from '../../types';
import { UseSliderProps } from '../types';

interface UseHandleFocusThumbOptions {
  focusThumbOnChange: boolean;
  thumbRef: React.RefObject<HTMLElement>;
  eventSource: EventSource;
  onChangeEnd: UseSliderProps['onChangeEnd'];
  value: number;
}

function useHandleFocusThumb(options: UseHandleFocusThumbOptions) {
  const {
    focusThumbOnChange,
    thumbRef,
    eventSource,
    onChangeEnd = _noop,
    value,
  } = options;

  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const onFocusThumb = useCallback(() => {
    if (!focusThumbOnChange) return;

    timeoutId.current = setTimeout(() => thumbRef.current?.focus());
  }, [focusThumbOnChange, thumbRef]);

  useEffect(() => {
    onFocusThumb();
    if (eventSource === 'keyboard') {
      onChangeEnd(value);
    }
  }, [eventSource, onChangeEnd, onFocusThumb, value]);

  useEffect(() => {
    return () => clearTimeout(timeoutId.current);
  }, []);

  return { onFocusThumb };
}

export default useHandleFocusThumb;
