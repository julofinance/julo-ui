import { cx, forwardRef, julo } from '@julo-ui/system';

import { useOtpInputField } from './use-otp-input-field';
import type { OtpInputFieldProps } from './types';
import { otpInputFieldCx } from './styles';

const OtpInputField = forwardRef<OtpInputFieldProps, 'input'>((props, ref) => {
  const { className, ...resProps } = props;

  const inputProps = useOtpInputField(resProps, ref);

  return (
    <julo.input
      className={cx('julo-otp-input__field', className)}
      {...inputProps}
      __css={otpInputFieldCx}
    />
  );
});

OtpInputField.displayName = 'OtpInputField';

export default OtpInputField;
