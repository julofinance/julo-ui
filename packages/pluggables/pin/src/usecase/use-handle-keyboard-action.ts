import { UseOtpInputReturn } from '@julo-ui/otp-input';
import { useEffect } from 'react';

interface UseHandleKeyboardActionOptions {
  allowPhysicalKeyboard?: boolean;
  values: UseOtpInputReturn['values'];
  descendants: UseOtpInputReturn['descendants'];
  setValue: UseOtpInputReturn['setValue'];
}

export function useHandleKeyboardAction(
  _options: UseHandleKeyboardActionOptions,
) {
  //   const { allowPhysicalKeyboard, values, setValue } = options;

  useEffect(() => {
    // if (!allowPhysicalKeyboard) return;

    function onKeyDown(e: KeyboardEvent) {
      //   const value = e.key;
      //   const currentIndex = values.length;

      //   if (e.key === 'Backspace') {
      //     setValue('', currentIndex - 1);
      //   }

      //   setValue(value, currentIndex, false);
      console.log(e, 'down');
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);
}
