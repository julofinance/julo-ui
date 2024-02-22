import { cx, forwardRef, julo } from '@julo-ui/system';

import { OtpInputProvider } from './OtpInputProvider';
import { useOtpInput } from './use-otp-input';
import type { OtpInputProps } from './types';
import { otpInputCx } from './styles';

const OtpInput = forwardRef<OtpInputProps, 'div'>((props, ref) => {
  const { className, children, ...resProps } = props;

  const { getRootProps, ...context } = useOtpInput(resProps);

  return (
    <OtpInputProvider value={context}>
      <julo.div
        className={cx('julo-otp-input', className)}
        {...getRootProps({}, ref)}
        __css={otpInputCx}
      >
        {children}
      </julo.div>
    </OtpInputProvider>
  );
});

OtpInput.displayName = 'OtpInput';

export default OtpInput;
