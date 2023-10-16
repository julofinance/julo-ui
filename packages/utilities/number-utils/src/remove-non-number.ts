/**
 * Remove non number characters, such as: symbol, letter, space, etc
 *
 * @param {string} str string will be filtered / formatted
 * @returns {string}
 * @example
 *  const str = removeNonNumber('12SD./#02') // result = '1202'
 */

const removeNonNumber = (str: string) => str.replace(/[^0-9]/g, '');

export default removeNonNumber;
