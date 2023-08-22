import { useCallback } from 'react';

import { EventOrValue, PropGetter } from '@julo-ui/system';
import { useCallbackRef } from '@julo-ui/use-callback-ref';
import { useControllableState } from '@julo-ui/use-controllable-state';

import { UseCheckboxGroupProps } from './types';
import { isInputEvent } from './utils';

type InputDOMAttributes = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'ref' | 'aria-invalid'
> & { value?: string | number };

export type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>;

/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 *
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export function useCheckboxGroup(props: UseCheckboxGroupProps) {
  const {
    defaultValue = [],
    value: valueProp,
    onChange: onChangeProp,
    isDisabled,
    isNative,
  } = props;

  const onChange = useCallbackRef(onChangeProp);

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange,
  });

  const handleCheckboxChange = useCallback(
    (eventOrValue: EventOrValue) => {
      if (!value) return;

      const isChecked = isInputEvent(eventOrValue)
        ? eventOrValue.target.checked
        : !value.includes(eventOrValue);

      const selectedValue = isInputEvent(eventOrValue)
        ? eventOrValue.target.value
        : eventOrValue;

      const newValue = isChecked
        ? [...value, selectedValue]
        : value.filter((v) => String(v) !== String(selectedValue));

      setValue(newValue);
    },
    [setValue, value],
  );

  const getCheckboxProps: PropGetter<InputDOMAttributes, InputDOMAttributes> =
    useCallback(
      (props = {}, forwardedRef = null) => {
        const { disabled, ...resProps } = props as InputDOMAttributes;
        const checkedKey = isNative ? 'checked' : 'isChecked';

        return {
          ref: forwardedRef,
          disabled: disabled ?? isDisabled,
          [checkedKey]: value.some(
            (val) => String(props.value) === String(val),
          ),
          onChange: handleCheckboxChange,
          ...resProps,
        };
      },
      [handleCheckboxChange, isDisabled, isNative, value],
    );

  return {
    value,
    isDisabled,
    onChange: handleCheckboxChange,
    setValue,
    getCheckboxProps,
  };
}
