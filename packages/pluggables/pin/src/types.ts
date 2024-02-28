import { OtpInputProps } from '@julo-ui/otp-input';

export interface PinProps
  extends Omit<
    OtpInputProps,
    'otp' | 'manageFocus' | 'type' | 'mask' | 'autoFocus'
  > {
  /**
   * If `true`, the pin value can be change using physical keyboard.
   * @default false
   */
  allowPhysicalKeyboard?: boolean;
}
