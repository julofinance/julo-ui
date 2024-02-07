import { useCallback, useId } from 'react';
import { createDescendantContext } from '@chakra-ui/descendant';

import { _noop, callAllFn } from '@julo-ui/function-utils';
import { ariaAttr } from '@julo-ui/dom-utils';
import type { HTMLJuloProps, PropGetter } from '@julo-ui/system';

import {
  useHandleFocus,
  useHandleInputEvent,
  useHandleValues,
} from './usecase';
import type { UseOtpInputProps } from './types';

export const [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant,
] = createDescendantContext<HTMLInputElement>();

export type UseOtpInputReturn = ReturnType<typeof useOtpInput>;

export function useOtpInput(props: UseOtpInputProps) {
  const {
    autoFocus = false,
    value,
    defaultValue,
    onChange = _noop,
    onComplete = _noop,
    placeholder,
    manageFocus = true,
    otp = true,
    id: idProp,
    isDisabled,
    isInvalid,
    type = 'number',
    mask,
    ...resRootProps
  } = props;

  const uuid = useId();
  const id = idProp ?? uuid;
  const rootId = `otp-input-${id}`;
  const fieldId = `otp-input-field-${id}`;

  const descendants = usePinInputDescendants();

  const {
    focusedIndex,
    onFocusNext,
    onBlur: onInputBlur,
    onFocus: onInputFocus,
  } = useHandleFocus({ descendants, manageFocus, autoFocus });

  const { values, setValue, setValues, clearValue, getNextValue } =
    useHandleValues({
      onChange,
      defaultValue,
      value,
      descendants,
      onComplete,
      onFocusNext,
    });

  const { onChange: onInputChange, onKeyDown: onInputKeyDown } =
    useHandleInputEvent({
      descendants,
      getNextValue,
      manageFocus,
      onComplete,
      setValue,
      setValues,
      type,
      values,
      onFocusNext,
    });

  const getRootProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...resRootProps,
      ...props,
      id: rootId,
      ref: forwardedRef,
    }),
    [resRootProps, rootId],
  );

  const getInputProps: PropGetter<HTMLJuloProps<'input'> & { index: number }> =
    useCallback(
      (props = { index: -1 }, forwardedRef = null) => {
        const { index, onChange, onKeyDown, onFocus, onBlur, ...resProps } =
          props;

        const hasFocus = focusedIndex === index;
        const inputType = type === 'number' ? 'tel' : 'text';

        return {
          'aria-label': 'Please enter your otp code',
          inputMode: type === 'number' ? 'numberic' : 'text',
          type: mask ? 'password' : inputType,
          ref: forwardedRef,
          ...resProps,
          id: `${fieldId}-${index}`,
          disabled: isDisabled,
          'aria-invalid': ariaAttr(isInvalid),
          onChange: callAllFn(
            (e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, index),
            onChange,
          ),
          onKeyDown: callAllFn(
            (e: React.KeyboardEvent<HTMLInputElement>) =>
              onInputKeyDown(e, index),
            onKeyDown,
          ),
          onFocus: callAllFn(onInputFocus, onFocus),
          onBlur: callAllFn(onInputBlur, onBlur),
          value: values[index] || '',
          autoComplete: otp ? 'one-time-code' : 'off',
          placeholder: hasFocus ? '' : placeholder,
        };
      },
      [
        fieldId,
        focusedIndex,
        isDisabled,
        isInvalid,
        mask,
        onInputBlur,
        onInputChange,
        onInputFocus,
        onInputKeyDown,
        otp,
        placeholder,
        type,
        values,
      ],
    );

  return {
    getRootProps,
    getInputProps,
    fieldId,
    descendants,
    values,
    setValue,
    setValues,
    clearValue,
  };
}
