import { countDecimalPlaces, toPreciseDecimal } from '@julo-ui/number-utils';

/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */
export function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

export function isMouseEvent(
  event: TouchEvent | MouseEvent | PointerEvent,
): event is MouseEvent {
  return !('touches' in event);
}

/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param from the number that stepping started from
 * @param step the specified step
 */
export function roundValueToStep(value: number, from: number, step: number) {
  const nextValue = Math.round((value - from) / step) * step + from;
  const precision = countDecimalPlaces(step);
  return toPreciseDecimal(nextValue, precision);
}
