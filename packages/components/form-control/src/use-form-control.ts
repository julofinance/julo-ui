import { ariaAttr } from '@julo-ui/dom-utils';
import { callAllFn } from '@julo-ui/function-utils';

import { useFormControlContext } from './FormControlProvider';
import { FormControlOptions } from './types';

export interface UseFormControlProps<T extends HTMLElement>
  extends FormControlOptions {
  id?: string;
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  'aria-describedby'?: string;
}

export function useFormControlProps<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const field = useFormControlContext();

  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    isLoading,
    onFocus,
    onBlur,
    ...resProps
  } = props;

  const labelIds: string[] = props['aria-describedby']
    ? [props['aria-describedby']]
    : [];

  if (field?.hasFeedbackText && field?.isInvalid) {
    labelIds.push(field.feedbackId);
  }

  if (field?.hasHelperText) {
    labelIds.push(field.helperTextId);
  }

  return {
    ...resProps,
    'aria-describedby': labelIds.join(' ') || undefined,
    id: id ?? field?.id,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    isLoading: isLoading ?? field?.isLoading,
    onFocus: callAllFn(field?.onFocus, onFocus),
    onBlur: callAllFn(field?.onBlur, onBlur),
  };
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const {
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isLoading,
    ...resProps
  } = useFormControlProps(props);

  return {
    ...resProps,
    disabled: isDisabled,
    required: isRequired,
    readOnly: isReadOnly,
    ...(!isDisabled && !isReadOnly && { 'aria-invalid': ariaAttr(isInvalid) }),
    'aria-required': ariaAttr(isRequired),
    'aria-readonly': ariaAttr(isReadOnly),
    'aria-busy': ariaAttr(isLoading),
  };
}
