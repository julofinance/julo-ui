import { clampValue } from '@julo-ui/number-utils';

import { roundValueToStep } from '../utils';
import { Bounds } from './types';

export function getValueBounds(
  value: number[],
  min: number,
  max: number,
  spacing: number,
) {
  return value.map((_v, i) => {
    const _min = i === 0 ? min : value[i - 1] + spacing;
    const _max = i === value.length - 1 ? max : value[i + 1] - spacing;
    return { min: _min, max: _max };
  });
}

export function getIds(id: string | number) {
  return {
    root: `slider-root-${id}`,
    getThumb: (i: number) => `slider-thumb-${id}-${i}`,
    getInput: (i: number) => `slider-input-${id}-${i}`,
    track: `slider-track-${id}`,
    innerTrack: `slider-filled-track-${id}`,
    getMarker: (i: number) => `slider-marker-${id}-${i}`,
    output: `slider-output-${id}`,
  };
}

export type Ids = ReturnType<typeof getIds>;

interface GetThumbStateOnChangeArgs {
  index: number;
  bounds: Bounds[];
  values: number[];
  pointerValue: number;
  prevValue: number[];
  step: number;
  isDisableSwap: boolean;
  distanceBetweenThumbs: number;
}

export function getThumbStateOnChange({
  bounds,
  index,
  values,
  pointerValue,
  prevValue,
  step,
  isDisableSwap,
  distanceBetweenThumbs,
}: GetThumbStateOnChangeArgs) {
  const prevValueAtIndex = prevValue[index];
  const boundsAtIndex = bounds[index];
  let valueAtIndex = clampValue(
    parseFloat(roundValueToStep(pointerValue, boundsAtIndex.min, step)),
    isDisableSwap ? boundsAtIndex.min : bounds[0].min,
    isDisableSwap ? boundsAtIndex.max : bounds[bounds.length - 1].max,
  );

  const isDecreasing = pointerValue < prevValueAtIndex;
  const isValueExceedBoundedValue =
    !isDisableSwap &&
    (isDecreasing
      ? valueAtIndex <= boundsAtIndex.min - distanceBetweenThumbs
      : valueAtIndex >= boundsAtIndex.max + distanceBetweenThumbs);

  if (isValueExceedBoundedValue) {
    const totalThumb = prevValue.length;
    let isFoundNewThumb = false;
    let isNoMoreThumb = false;

    values[index] = isDecreasing ? boundsAtIndex.min : boundsAtIndex.max;

    for (
      let i = isDecreasing ? index - 1 : index + 1;
      !isFoundNewThumb && !isNoMoreThumb;
      isDecreasing ? i-- : i++
    ) {
      if (i >= totalThumb || i < 0) {
        isNoMoreThumb = true;

        if (
          isDecreasing
            ? valueAtIndex < boundsAtIndex.min
            : valueAtIndex > boundsAtIndex.max
        ) {
          /**
           * To handle if value is not between range of bounds in neighbour thumbs
           */
          valueAtIndex = isDecreasing ? boundsAtIndex.min : boundsAtIndex.max;
        }
        continue;
      }

      if (
        !isDecreasing
          ? valueAtIndex >= bounds[i].min &&
            valueAtIndex < bounds[i].max + distanceBetweenThumbs
          : valueAtIndex > bounds[i].min - distanceBetweenThumbs &&
            valueAtIndex <= bounds[i].max
      ) {
        isFoundNewThumb = true;
        index = i;
      }
    }
  } else {
    if (!isDecreasing && pointerValue > boundsAtIndex.max) {
      valueAtIndex = boundsAtIndex.max;
    }

    if (isDecreasing && pointerValue < boundsAtIndex.min) {
      valueAtIndex = boundsAtIndex.min;
    }
  }

  values[index] = valueAtIndex;

  return { index: index, value: values };
}
