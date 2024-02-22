import type { UseOtpInputProps } from './types';

export const strToArray = (value?: string) => value?.split('');

export const validateValue = (
  value: string,
  type: UseOtpInputProps['type'],
) => {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === 'alphanumeric' ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
};
