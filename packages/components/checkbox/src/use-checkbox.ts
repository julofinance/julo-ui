import { useCallback, useEffect, useRef, useState } from 'react';
import { trackFocusVisible } from '@zag-js/focus-visible';

import { PropGetter } from '@julo-ui/system';
import { omit } from '@julo-ui/object-utils';
import { _noop, callAllFn } from '@julo-ui/function-utils';
import { mergeRefs, dataAttr } from '@julo-ui/dom-utils';
import { useCallbackRef } from '@julo-ui/use-callback-ref';
import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';
import { useFormControlProps } from '@julo-ui/form-control';

import { CheckboxState, UseCheckboxProps } from './types';

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;

export function useCheckbox(props: UseCheckboxProps = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable,
    onChange = _noop,
    isIndeterminate,
    name,
    value,
    tabIndex,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-invalid': ariaInvalid,
    ...rootResProps
  } = props;

  const {
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    onBlur,
    onFocus,
    'aria-describedby': ariaDescribedBy,
  } = useFormControlProps(props);

  const htmlProps = omit(rootResProps, [
    'isDisabled',
    'isReadOnly',
    'isRequired',
    'isInvalid',
    'id',
    'onBlur',
    'onFocus',
    'aria-describedby',
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur);
  const onFocusProp = useCallbackRef(onFocus);

  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isRootLabelElement, setIsRootLabelElement] = useState(true);
  const [isCheckedLocal, setIsCheckedLocal] = useState(Boolean(defaultChecked));

  const isControlled = isCheckedProp !== undefined;
  const isChecked = isControlled ? isCheckedProp : isCheckedLocal;
  const isTrulyDisabled = isDisabled && !isFocusable;

  const state: CheckboxState = {
    isActive,
    isChecked,
    isFocused,
    isHovered,
    isDisabled,
    isIndeterminate,
    isInvalid,
    isReadOnly,
    isRequired,
  };

  const handleRootOnClick = useCallback(() => {
    if (!isRootLabelElement) {
      /**
       * Accessibility:
       *
       * Ideally, `getRootProps` should be spread unto a `label` element.
       *
       * If the element was changed using the `as` prop or changing
       * the dom node `getRootProps` is spread unto (to a `div` or `span`), we'll trigger
       * click on the input when the element is clicked.
       */
      inputRef.current?.click();
      requestAnimationFrame(() => {
        inputRef.current?.focus({ preventScroll: true });
      });
    }
  }, [isRootLabelElement]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }

      if (!isControlled) {
        if (isChecked) {
          setIsCheckedLocal(event.target.checked);
        } else {
          setIsCheckedLocal(isIndeterminate ?? event.target.checked);
        }
      }

      onChangeProp(event);
    },
    [
      isChecked,
      isControlled,
      isDisabled,
      isIndeterminate,
      isReadOnly,
      onChangeProp,
    ],
  );

  const handleInputKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      setIsActive(true);
    }
  }, []);

  const handleInputKeyUp = useCallback((event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      setIsActive(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleCheckboxMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (isFocused) {
        event.preventDefault();
      }

      if (isDisabled) return;

      setIsActive(true);
    },
    [isDisabled, isFocused],
  );

  const handleCheckboxMouseUp = useCallback(() => {
    if (isDisabled) return;
    setIsActive(false);
  }, [isDisabled]);

  const handleCheckboxMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleCheckboxMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleLabelMouseDown = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const getCheckboxProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const {
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
        ...resProps
      } = props;

      return {
        ref: forwardedRef,
        'data-active': dataAttr(isActive),
        'data-hover': dataAttr(isHovered),
        'data-checked': dataAttr(isChecked),
        'data-focus': dataAttr(isFocused),
        'data-focus-visible': dataAttr(isFocused && isFocusVisible),
        'data-indeterminate': dataAttr(isIndeterminate),
        'data-disabled': dataAttr(isDisabled),
        'data-readonly': dataAttr(isReadOnly),
        'data-invalid': dataAttr(isInvalid),
        'aria-hidden': true,
        onMouseDown: callAllFn(handleCheckboxMouseDown, onMouseDown),
        onMouseUp: callAllFn(handleCheckboxMouseUp, onMouseUp),
        onMouseEnter: callAllFn(handleCheckboxMouseEnter, onMouseEnter),
        onMouseLeave: callAllFn(handleCheckboxMouseLeave, onMouseLeave),
        ...resProps,
      };
    },
    [
      handleCheckboxMouseDown,
      handleCheckboxMouseEnter,
      handleCheckboxMouseLeave,
      handleCheckboxMouseUp,
      isActive,
      isChecked,
      isDisabled,
      isFocusVisible,
      isFocused,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly,
    ],
  );

  const getIndicatorProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      'data-active': dataAttr(isActive),
      'data-hover': dataAttr(isHovered),
      'data-checked': dataAttr(isChecked),
      'data-focus': dataAttr(isFocused),
      'data-focus-visible': dataAttr(isFocused && isFocusVisible),
      'data-indeterminate': dataAttr(isIndeterminate),
      'data-disabled': dataAttr(isDisabled),
      'data-invalid': dataAttr(isInvalid),
      'data-readonly': dataAttr(isReadOnly),
    }),
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isFocusVisible,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly,
    ],
  );

  const getRootProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const { onClick, ...resProps } = props;

      return {
        ...htmlProps,
        ref: mergeRefs(forwardedRef, (node: HTMLElement) => {
          if (!node) return;
          setIsRootLabelElement(node.tagName === 'LABEL');
        }),
        onClick: callAllFn(handleRootOnClick, onClick),
        'data-disabled': dataAttr(isDisabled),
        'data-checked': dataAttr(isChecked),
        'data-invalid': dataAttr(isInvalid),
        ...resProps,
      };
    },
    [handleRootOnClick, isChecked, isDisabled, isInvalid, htmlProps],
  );

  const getInputProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const { onChange, onBlur, onFocus, onKeyDown, onKeyUp, ...resProps } =
        props;

      return {
        ref: mergeRefs(inputRef, forwardedRef),
        type: 'checkbox',
        name,
        value,
        id,
        tabIndex,
        onChange: callAllFn(handleInputChange, onChange),
        onBlur: callAllFn(handleInputBlur, onBlurProp, onBlur),
        onFocus: callAllFn(handleInputFocus, onFocusProp, onFocus),
        onKeyDown: callAllFn(handleInputKeyDown, onKeyDown),
        onKeyUp: callAllFn(handleInputKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: isTrulyDisabled,
        readOnly: isReadOnly,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-invalid': ariaInvalid ?? isInvalid,
        'aria-describedby': ariaDescribedBy,
        'aria-disabled': isDisabled,
        ...resProps,
      };
    },
    [
      ariaDescribedBy,
      ariaInvalid,
      ariaLabel,
      ariaLabelledBy,
      handleInputBlur,
      handleInputChange,
      handleInputFocus,
      handleInputKeyDown,
      handleInputKeyUp,
      id,
      isChecked,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      isTrulyDisabled,
      name,
      onBlurProp,
      onFocusProp,
      tabIndex,
      value,
    ],
  );

  const getLabelProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const { onMouseDown, ...resProps } = props;

      return {
        ref: forwardedRef,
        onMouseDown: callAllFn(handleLabelMouseDown, onMouseDown),
        'data-disabled': dataAttr(isDisabled),
        'data-checked': dataAttr(isChecked),
        'data-invalid': dataAttr(isInvalid),
        ...resProps,
      };
    },
    [handleLabelMouseDown, isChecked, isDisabled, isInvalid],
  );

  /**
   * Track :focus-visible
   */
  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);

  /**
   * HTMLFormElement.reset() should reset the checkbox state
   */
  useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!el?.form) return;
    el.form.onreset = () => {
      setIsCheckedLocal(!!defaultChecked);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Sync isIndeterminate prop with input element
   */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);

  /**
   * If disabled set isFocus is false
   */
  useEffect(() => {
    if (isDisabled) {
      setIsFocused(false);
    }
  }, [isDisabled]);

  return {
    state,
    getRootProps,
    getCheckboxProps,
    getInputProps,
    getLabelProps,
    getIndicatorProps,
  };
}
