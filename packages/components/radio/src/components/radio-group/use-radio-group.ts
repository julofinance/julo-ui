import { useCallback, useId, useRef } from 'react';

import { isInputEvent, mergeRefs } from '@julo-ui/dom-utils';
import { EventOrValue, PropGetter } from '@julo-ui/system';
import { useControllableState } from '@julo-ui/use-controllable-state';
import { isTrullyEmpty } from '@julo-ui/function-utils';

import { UseRadioGroupProps } from './types';

type InputDOMAttributes = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'ref'
> & { value?: string | number };

export type UseRadioGroupReturn = ReturnType<typeof useRadioGroup>;

export function useRadioGroup(props: UseRadioGroupProps = {}) {
  const {
    onChange,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled,
    isFocusable,
    isNative,
    ...htmlProps
  } = props;

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange,
  });

  const rootRef = useRef<HTMLElement>(null);
  /**
   * All radio options must use the same name
   */
  const uuid = useId();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;

  const focus = useCallback(() => {
    const rootNode = rootRef.current;
    if (!rootNode) return;

    let query = `input:not(:disabled):checked`;

    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query,
    ) as HTMLElement;

    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }

    query = `input:not(:disabled)`;

    const firstEnabledInput = rootNode.querySelector(query) as HTMLElement;
    firstEnabledInput?.focus();
  }, []);

  const handleRadioChange = useCallback(
    (eventOrValue: EventOrValue) => {
      const newValue = isInputEvent(eventOrValue)
        ? eventOrValue.target.value
        : eventOrValue;

      setValue(newValue);
    },
    [setValue],
  );

  const getRootProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: mergeRefs(rootRef, forwardedRef),
      role: 'radiogroup',
    }),
    [],
  );

  const getRadioProps: PropGetter<InputDOMAttributes, InputDOMAttributes> =
    useCallback(
      (props = {}, forwardedRef = null) => {
        const { disabled, ...resProps } = props as InputDOMAttributes;
        const checkedKey = isNative ? 'checked' : 'isChecked';

        return {
          ref: forwardedRef,
          ...(!isTrullyEmpty(value) && { [checkedKey]: props.value === value }),
          onChange: (e) => handleRadioChange(e as EventOrValue),
          name,
          disabled: disabled ?? isDisabled,
          'data-radiogroup': true,
          'data-focus-visilbe': isFocusable,
          ...resProps,
        };
      },
      [handleRadioChange, isDisabled, isFocusable, isNative, name, value],
    );

  return {
    getRootProps,
    getRadioProps,
    name,
    value,
    focus,
    isDisabled,
    isFocusable,
    htmlProps,
    onChange: handleRadioChange,
  };
}
