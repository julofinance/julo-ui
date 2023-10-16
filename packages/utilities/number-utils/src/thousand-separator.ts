interface ThousandSeparatorOption {
  /**
   * @default '.'
   */
  separator?: string;
  isReturnEmptyStringOnEmptyValue?: boolean;
}

function thousandSeparator(
  value: string,
  options: ThousandSeparatorOption = {},
) {
  const { separator = '.', isReturnEmptyStringOnEmptyValue } = options;

  if (!value) {
    return isReturnEmptyStringOnEmptyValue ? '' : '0';
  }

  const num = value.toString().replace(/\D/g, '');

  if (num === '') {
    return isReturnEmptyStringOnEmptyValue ? '' : '0';
  }

  if (num.length <= 3) {
    return num; // Return format 300 || 0
  }

  const result = num
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${separator}`);

  return result; // Return format 3.000.000 || 4.500
}

export default thousandSeparator;
