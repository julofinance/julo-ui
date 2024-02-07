import { useCallback } from 'react';
import type { DescendantsManager } from '@chakra-ui/descendant';

import { validateValue } from '../utils';
import type { UseOtpInputProps } from '../types';

interface UseHandleInputEventOptions {
  values: string[];
  getNextValue: (value: string, eventValue: string) => string;
  setValue: (value: string, index: number, handleFocus?: boolean) => void;
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  type: UseOtpInputProps['type'];
  descendants: DescendantsManager<HTMLInputElement>;
  onComplete: (value: string) => void;
  manageFocus: boolean;
  onFocusNext: (index: number) => void;
}

export function useHandleInputEvent(options: UseHandleInputEventOptions) {
  const {
    values,
    getNextValue,
    setValue,
    type,
    descendants,
    setValues,
    onComplete,
    manageFocus,
    onFocusNext,
  } = options;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const eventValue = event.target.value;
      const currentValue = values[index];
      const nextValue = getNextValue(currentValue, eventValue);

      // if value is removed using backspace
      if (nextValue === '') return setValue('', index);

      // if case is autocomplete or copy-paste
      if (eventValue.length > 2) {
        if (!validateValue(eventValue, type)) return;

        const nextValue = eventValue
          .split('')
          // filter value to ensure value length matches number of inputs
          .filter((_, index) => index < descendants.count());

        setValues(nextValue);
        onFocusNext(eventValue.length - 2);

        if (nextValue.length === descendants.count()) {
          onComplete(nextValue.join(''));
        }

        return;
      }

      if (validateValue(nextValue, type)) {
        setValue(nextValue, index);
      }
    },
    [
      descendants,
      getNextValue,
      onComplete,
      onFocusNext,
      setValue,
      setValues,
      type,
      values,
    ],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (event.key !== 'Backspace' || !manageFocus) return;

      if ((event.target as HTMLInputElement).value !== '') return;

      const prevInput = descendants.prev(index, false);

      if (!prevInput) return;

      setValue('', index - 1, false);
      prevInput.node.focus();
    },
    [descendants, manageFocus, setValue],
  );

  return { onChange, onKeyDown };
}
