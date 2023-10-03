/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count
 */
function countDecimalPlaces(value: number) {
  if (!Number.isFinite(value)) return 0;

  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
}

export default countDecimalPlaces;
