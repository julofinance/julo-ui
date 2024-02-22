import { useCallback } from 'react';
import type { DescendantsManager } from '@chakra-ui/descendant';

import { isTrullyEmpty } from '@julo-ui/function-utils';
import { useControllableState } from '@julo-ui/use-controllable-state';

import { strToArray } from '../utils';

interface UseHandleValuesOptions {
  onChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
  descendants: DescendantsManager<HTMLInputElement>;
  onComplete: (value: string) => void;
  onFocusNext: (index: number) => void;
}

export function useHandleValues(options: UseHandleValuesOptions) {
  const {
    onChange,
    defaultValue,
    value,
    descendants,
    onComplete,
    onFocusNext,
  } = options;

  const [values, setValues] = useControllableState<string[]>({
    defaultValue: strToArray(defaultValue) || [],
    value: strToArray(value),
    onChange: (values) => onChange(values.join('')),
  });

  const setValue = useCallback(
    (value: string, index: number, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index] = value;
      setValues(nextValues);

      const isComplete =
        value !== '' &&
        nextValues.length === descendants.count() &&
        nextValues.every(
          (inputValue) => !isTrullyEmpty(inputValue) && inputValue !== '',
        );

      if (!isComplete && handleFocus) return onFocusNext(index);

      onComplete(nextValues.join(''));
    },
    [descendants, onComplete, onFocusNext, setValues, values],
  );

  const clearValue = useCallback(() => {
    const values: string[] = Array(descendants.count()).fill('');
    setValues(values);
    onFocusNext(0);
  }, [descendants, onFocusNext, setValues]);

  const getNextValue = useCallback((value: string, eventValue: string) => {
    if (!value || value?.length === 0) return eventValue;

    // if direction ltr
    if (value[0] === eventValue.charAt(0)) return eventValue.charAt(1);

    // else asume direction rtl
    return eventValue.charAt(0);
  }, []);

  return { values, setValues, setValue, clearValue, getNextValue };
}
