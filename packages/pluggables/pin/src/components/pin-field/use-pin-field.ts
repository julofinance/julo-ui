import { useOtpInputField } from '@julo-ui/otp-input';

import { UsePinFieldProps } from './types';
import { useCallback } from 'react';
import { callAllFn } from '@julo-ui/function-utils';

export function usePinField(
  props: UsePinFieldProps,
  ref: React.Ref<unknown> = null,
) {
  const { onKeyDown, ...resProps } = useOtpInputField(props, ref);

  const handlePinFieldKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Tab') return event.preventDefault();
      console.log('field key down');
    },
    [],
  );

  return {
    onKeyDown: callAllFn(handlePinFieldKeyDown, onKeyDown),
    ...resProps,
  };
}
