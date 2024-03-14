import { useEffect, useId, useState, useCallback, useRef } from 'react';
import { trackFocusVisible } from '@zag-js/focus-visible';

import { omit } from '@julo-ui/object-utils';
import { PropGetter } from '@julo-ui/system';
import { ariaAttr, dataAttr, mergeRefs } from '@julo-ui/dom-utils';
import { _noop, callAllFn } from '@julo-ui/function-utils';
import { useFormControlProps } from '@julo-ui/form-control';
import { useCallbackRef } from '@julo-ui/use-callback-ref';
import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';

import { RadioState, UseRadioProps } from './types';
import { useRadioGroupContext } from './components/radio-group';

export type UseRadioReturn = ReturnType<typeof useRadio>;

export function useRadio(props: UseRadioProps = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    checked,
    isFocusable,
    onChange = _noop,
    name,
    value,
    tabIndex,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-invalid': ariaInvalid,
    'data-radiogroup': dataRadioGroup,
    ...rootResProps
  } = props;

  const htmlProps = omit(rootResProps, [
    'isDisabled',
    'isReadOnly',
    'isRequired',
    'isInvalid',
    'id',
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const uuid = `radio-${useId()}`;

  const formControl = useFormControlProps(props);
  const group = useRadioGroupContext();

  const isWithinRadioGroup = !!group || dataRadioGroup;

  const {
    id: formControlId,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    onBlur,
    onFocus,
    'aria-describedby': ariaDescribedBy,
  } = formControl;

  const id = props.id ?? (!isWithinRadioGroup ? formControlId : uuid);
  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur);
  const onFocusProp = useCallbackRef(onFocus);

  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isRootLabelElement, setIsRootLabelElement] = useState(true);
  const [isCheckedLocal, setIsCheckedLocal] = useState(Boolean(defaultChecked));

  const isControlledNatively = checked !== undefined;
  const isControlled = isCheckedProp !== undefined;
  const isChecked = isControlled
    ? isCheckedProp
    : isControlledNatively
    ? checked
    : isCheckedLocal;
  const isTrulyDisabled = isDisabled && !isFocusable;

  const state: RadioState = {
    isActive,
    isChecked,
    isFocused,
    isHovered,
    isDisabled,
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
        setIsCheckedLocal(event.target.checked);
      }

      onChangeProp(event);
    },
    [isControlled, isDisabled, isReadOnly, onChangeProp],
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

  const handleRadioMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (isFocused) {
        event.preventDefault();
      }

      if (isDisabled) return;

      setIsActive(true);
    },
    [isDisabled, isFocused],
  );

  const handleRadioMouseUp = useCallback(() => {
    if (isDisabled) return;
    setIsActive(false);
  }, [isDisabled]);

  const handleRadioMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleRadioMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleLabelMouseDown = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

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
    [handleRootOnClick, htmlProps, isChecked, isDisabled, isInvalid],
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

  const getRadioProps: PropGetter = useCallback(
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
        'data-disabled': dataAttr(isDisabled),
        'data-readonly': dataAttr(isReadOnly),
        'data-invalid': dataAttr(isInvalid),
        'aria-hidden': true,
        onMouseDown: callAllFn(handleRadioMouseDown, onMouseDown),
        onMouseUp: callAllFn(handleRadioMouseUp, onMouseUp),
        onMouseEnter: callAllFn(handleRadioMouseEnter, onMouseEnter),
        onMouseLeave: callAllFn(handleRadioMouseLeave, onMouseLeave),
        ...resProps,
      };
    },
    [
      handleRadioMouseDown,
      handleRadioMouseEnter,
      handleRadioMouseLeave,
      handleRadioMouseUp,
      isActive,
      isChecked,
      isDisabled,
      isFocusVisible,
      isFocused,
      isHovered,
      isInvalid,
      isReadOnly,
    ],
  );

  const getInputProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => {
      const { onChange, onBlur, onFocus, onKeyDown, onKeyUp, ...resProps } =
        props;

      return {
        ref: mergeRefs(inputRef, forwardedRef),
        type: 'radio',
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
        'aria-disabled': ariaAttr(isTrulyDisabled),
        'aria-required': ariaAttr(isRequired),
        'data-readonly': dataAttr(isReadOnly),
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
    getLabelProps,
    getInputProps,
    getRadioProps,
    htmlProps,
  };
}
