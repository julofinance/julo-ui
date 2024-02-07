import type { DescendantsManager } from '@chakra-ui/descendant';

import type { HTMLJuloProps } from '@julo-ui/system';

import type { UseOtpInputReturn } from './use-otp-input';

export interface OtpInputProps
  extends Omit<HTMLJuloProps<'div'>, keyof UseOtpInputProps>,
    UseOtpInputProps {}

export interface UseOtpInputProps {
  /**
   * If `true`, the otp input receives focus on mount
   */
  autoFocus?: boolean;
  /**
   * The value of the otp input. This is the value
   * that will be returned when the otp input is filled
   */
  value?: string;
  /**
   * The default value of the otp input
   */
  defaultValue?: string;
  /**
   * Function called on input change
   */
  onChange?: (value: string) => void;
  /**
   * Function called when all inputs have valid values
   */
  onComplete?: (value: string) => void;
  /**
   * The placeholder for the otp input
   */
  placeholder?: string;
  /**
   * If `true`, focus will move automatically to the next input once filled
   * @default true
   */
  manageFocus?: boolean;
  /**
   * If `true`, the otp input component signals to its fields that they should
   * use `autocomplete="one-time-code"`.
   *
   * @default true
   */
  otp?: boolean;
  /**
   * The top-level id string that will be applied to the input fields.
   * The index of the input will be appended to this top-level id.
   *
   * @example
   * if id="foo", the first input will have `foo-0`
   */
  id?: string;
  /**
   * If `true`, the otp input component is put in the disabled state
   */
  isDisabled?: boolean;
  /**
   * If `true`, the otp input component is put in the invalid state
   */
  isInvalid?: boolean;
  /**
   * The type of values the otp-input should allow
   */
  type?: 'alphanumeric' | 'number';
  /**
   * If `true`, the input's value will be masked just like `type=password`
   */
  mask?: boolean;
}

export interface UseOtpInputContextProps
  extends Omit<UseOtpInputReturn, 'descendants' | 'getRootProps'>,
    Pick<UseOtpInputProps, 'isDisabled' | 'isInvalid'> {}

export interface OtpInputProviderProps {
  children: React.ReactNode;
  value: {
    descendants: DescendantsManager<HTMLInputElement>;
  } & UseOtpInputContextProps;
}
