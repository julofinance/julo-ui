/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */
function clampValue(value: number, min: number, max: number) {
  if (value == null) return value;

  if (max < min) {
    console.warn('clamp: max cannot be less than min');
  }

  return Math.min(Math.max(value, min), max);
}

export default clampValue;
