/**
 * Helper to check value is a function
 *
 * @param value - any datatype value
 *
 * @returns true - if datatype of value is a "function"
 *
 * @returns false - if datatype of value is not a "function"
 *
 * @example
 * ```js
 *
 * const a = ''
 *
 * isFn(a) // return false
 *
 * ```
 */

// The purpose of this function is only to check if the value is a function
// eslint-disable-next-line @typescript-eslint/ban-types
function isFn(value: unknown): value is Function {
  return typeof value === 'function';
}

export default isFn;
