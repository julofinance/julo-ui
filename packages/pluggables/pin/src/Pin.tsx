import { cx, forwardRef, julo } from '@julo-ui/system';
import { OtpInputProvider, useOtpInput } from '@julo-ui/otp-input';

import { PinField } from './components/pin-field';
import { useHandleKeyboardAction } from './usecase';
import type { PinProps } from './types';
import { pinCx } from './styles';

const Pin = forwardRef<PinProps, 'div'>((props, ref) => {
  const { className, allowPhysicalKeyboard = false, ...resProps } = props;

  const { getRootProps, ...context } = useOtpInput({
    otp: false,
    manageFocus: false,
    ...resProps,
  });

  useHandleKeyboardAction({
    allowPhysicalKeyboard,
    setValue: context.setValue,
    descendants: context.descendants,
    values: context.values,
  });

  return (
    <OtpInputProvider value={{ ...context }}>
      <julo.div
        className={cx('julo-pin', className)}
        {...getRootProps({}, ref)}
        __css={pinCx}
      >
        <PinField />
        <PinField />
        <PinField />
        <PinField />
      </julo.div>
    </OtpInputProvider>
  );
});

Pin.displayName = 'Pin';

export default Pin;
