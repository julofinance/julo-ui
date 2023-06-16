import { useCallback, useId, useState } from 'react';

import { dataAttr } from '@julo-ui/shared-utils';
import { PropGetter } from '@julo-ui/system';
import { createContext } from '@julo-ui/context';
import Badge from '@julo-ui/badge';

import { FormControlOptions } from './types';
import mergeRefs from '@julofinance/web-helpers/dist/fn/mergeRefs';

type FormControlProviderProps = Omit<
  ReturnType<typeof useFormControlProvider>,
  'getRootProps' | 'htmlProps'
>;

const [FormControlProvider, useFormControlContext] = createContext<
  FormControlProviderProps | undefined
>({
  strict: false,
  name: 'FormControlContext',
});

function useFormControlProvider(props: FormControlOptions) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isLoading,
    ...htmlProps
  } = props;

  const uuid = useId();
  const id = idProp || `field-${uuid}`;

  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helperTextId = `${id}-helper-text`;

  const [hasFeedbackText, setHasFeedbackText] = useState(false);

  const [hasHelperText, setHasHelperText] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const getRootProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...htmlProps,
      ref: forwardedRef,
      role: 'group',
    }),
    [htmlProps],
  );

  const getLabelProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      id: props.id ?? labelId,
      htmlFor: props.htmlFor ?? id,
      'data-busy': dataAttr(isLoading),
      'data-focus': dataAttr(isFocused),
      'data-disabled': dataAttr(isDisabled),
      ...(!isReadOnly &&
        !isDisabled && { 'data-invalid': dataAttr(isInvalid) }),
      'data-readonly': dataAttr(isReadOnly),
    }),
    [id, labelId, isFocused, isDisabled, isInvalid, isReadOnly, isLoading],
  );

  const getHelperTextProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return setHasHelperText(false);
        setHasHelperText(true);
      }),
      id: props.id ?? helperTextId,
    }),
    [helperTextId],
  );

  const getErrorMessageProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return setHasFeedbackText(false);
        setHasFeedbackText(true);
      }),
      id: props.id ?? feedbackId,
      'aria-live': 'polite',
    }),
    [feedbackId],
  );

  const getRequiredIndicatorProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      role: 'presentation',
      'aria-hidden': true,
      children: props.children || (
        <Badge size='small' status='neutral'>
          Wajib
        </Badge>
      ),
    }),
    [],
  );

  return {
    isRequired: Boolean(isRequired),
    isInvalid: Boolean(isInvalid),
    isReadOnly: Boolean(isReadOnly),
    isDisabled: Boolean(isDisabled),
    isFocused: Boolean(isFocused),
    isLoading: Boolean(isLoading),
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    id,
    labelId,
    feedbackId,
    helperTextId,
    hasHelperText,
    hasFeedbackText,
    htmlProps,
    getRootProps,
    getLabelProps,
    getHelperTextProps,
    getRequiredIndicatorProps,
    getErrorMessageProps,
  };
}

export { FormControlProvider, useFormControlProvider, useFormControlContext };
