import { useCallback, useMemo } from 'react';

import type { ElementSize } from '@julo-ui/use-watch-element-size';

import type { Orientation } from '../types';

interface UseHandleStyleOptions {
  orientation: Orientation;
  isReversed: boolean;
  thumbSizes: Array<ElementSize | undefined>;
  thumbPercents: number[];
}

const defaultSize = { width: 0, height: 0 };
const normalizeSize = (size: ElementSize | undefined) => size || defaultSize;

function useHandleStyle(options: UseHandleStyleOptions) {
  const {
    thumbSizes: thumbRects,
    orientation,
    isReversed,
    thumbPercents,
  } = options;

  const getThumbStyle = useCallback(
    (i: number): React.CSSProperties => {
      const rect = thumbRects[i] ?? defaultSize;

      return {
        position: 'absolute',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        touchAction: 'none',
        ...(orientation === 'vertical'
          ? { bottom: `calc(${thumbPercents[i]}% - ${rect.height / 2}px)` }
          : { left: `calc(${thumbPercents[i]}% - ${rect.width / 2}px)` }),
      };
    },
    [orientation, thumbPercents, thumbRects],
  );

  const getMarkerStyle = useCallback(
    (percent: number): React.CSSProperties => {
      return {
        position: 'absolute',
        pointerEvents: 'none',
        ...(orientation === 'vertical'
          ? { bottom: `${percent}%`, transform: `translateY(-50%)` }
          : { left: `${percent}%`, transform: `translateX(-50%)` }),
      };
    },
    [orientation],
  );

  const rootStyle = useMemo<React.CSSProperties>(() => {
    const size = normalizeSize(
      orientation === 'vertical'
        ? thumbRects.reduce(
            (a, b) =>
              normalizeSize(a).height > normalizeSize(b).height ? a : b,
            defaultSize,
          )
        : thumbRects.reduce(
            (a, b) => (normalizeSize(a).width > normalizeSize(b).width ? a : b),
            defaultSize,
          ),
    );

    return {
      position: 'relative',
      touchAction: 'none',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      userSelect: 'none',
      outline: 0,
      ...(orientation === 'vertical'
        ? {
            paddingLeft: size.width / 2,
            paddingRight: size.width / 2,
            height: '100%',
          }
        : {
            paddingTop: size.height / 2,
            paddingBottom: size.height / 2,
            width: '100%',
          }),
    };
  }, [orientation, thumbRects]);

  const trackStyle = useMemo<React.CSSProperties>(
    () => ({
      position: 'absolute',
      ...(orientation === 'vertical'
        ? { left: '50%', transform: 'translateX(-50%)', height: '100%' }
        : { top: '50%', transform: 'translateY(-50%)', width: '100%' }),
    }),
    [orientation],
  );

  const innerTrackStyle = useMemo<React.CSSProperties>(() => {
    const isSingleThumb = thumbPercents.length === 1;
    const fallback = [
      0,
      isReversed ? 100 - thumbPercents[0] : thumbPercents[0],
    ];
    const range = isSingleThumb ? fallback : thumbPercents;

    let start = range[0];
    if (!isSingleThumb && isReversed) {
      start = 100 - start;
    }

    const percent = Math.abs(range[range.length - 1] - range[0]);

    return {
      ...trackStyle,
      ...(orientation === 'vertical'
        ? isReversed
          ? { height: `${percent}%`, top: `${start}%` }
          : { height: `${percent}%`, bottom: `${start}%` }
        : isReversed
        ? { width: `${percent}%`, right: `${start}%` }
        : { width: `${percent}%`, left: `${start}%` }),
    };
  }, [isReversed, orientation, thumbPercents, trackStyle]);

  return {
    getThumbStyle,
    rootStyle,
    trackStyle,
    innerTrackStyle,
    getMarkerStyle,
  };
}

export default useHandleStyle;
