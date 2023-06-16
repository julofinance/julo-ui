import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { CircularProgress } from '@julo-ui/progress';
import { forwardRef } from '@julo-ui/system';
import FormControl, {
  FormErrorMessage,
  FormHelperText,
  FormInfoGroup,
  FormLabel,
} from '@julo-ui/form-control';
import Input, {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  InputRightElement,
} from '@julo-ui/input';
import TextArea, { TextAreaProps } from '@julo-ui/textarea';

import type { TextFieldProps } from './types';

const TextField = forwardRef<TextFieldProps, 'div'>((props, ref) => {
  const {
    name,
    inputProps,
    label,
    helperText,
    multiline = false,
    errorMessage,
    rows,
    leftAddon,
    leftAddonProps,
    rightAddon,
    rightAddonProps,
    leftElement,
    leftElementProps,
    rightElement,
    rightElementProps,
    isLoading,
    hideLoadingIndicator,
    showCounter,
    currentTextLength = 0,
    maxTextLength = 0,
    onChange,
    onBlur,
    onFocus,
    inputRef,
    type,
    ...resProps
  } = props;

  const isShowLoadingIndicator = isLoading && !hideLoadingIndicator;

  return (
    <FormControl ref={ref} isLoading={isLoading} {...resProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {leftAddon && (
          <InputLeftAddon {...leftAddonProps}>{leftAddon}</InputLeftAddon>
        )}
        {leftElement && (
          <InputLeftElement {...leftElementProps}>
            {leftElement}
          </InputLeftElement>
        )}
        {multiline ? (
          <TextArea
            ref={inputRef}
            name={name}
            rows={rows}
            maxLength={maxTextLength}
            {...(inputProps as TextAreaProps)}
            onChange={callAllFn(
              onChange as TextAreaProps['onChange'],
              inputProps?.onChange,
            )}
            onFocus={callAllFn(
              onFocus as TextAreaProps['onFocus'],
              inputProps?.onFocus,
            )}
            onBlur={callAllFn(
              onBlur as TextAreaProps['onBlur'],
              inputProps?.onBlur,
            )}
          />
        ) : (
          <Input
            ref={inputRef}
            name={name}
            type={type}
            maxLength={maxTextLength}
            {...(inputProps as InputProps)}
            onChange={callAllFn(
              onChange as InputProps['onChange'],
              inputProps?.onChange,
            )}
            onFocus={callAllFn(
              onFocus as InputProps['onFocus'],
              inputProps?.onFocus,
            )}
            onBlur={callAllFn(
              onBlur as InputProps['onBlur'],
              inputProps?.onBlur,
            )}
          />
        )}
        {(rightElement || isShowLoadingIndicator) && (
          <InputRightElement {...rightElementProps}>
            {isShowLoadingIndicator ? (
              <CircularProgress isIndeterminate size={20} />
            ) : (
              rightElement
            )}
          </InputRightElement>
        )}
        {rightAddon && (
          <InputRightAddon {...rightAddonProps}>{rightAddon}</InputRightAddon>
        )}
      </InputGroup>
      <FormInfoGroup
        showCounter={showCounter}
        currentTextLength={currentTextLength}
        maxTextLength={maxTextLength}
      >
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormInfoGroup>
    </FormControl>
  );
});

TextField.displayName = 'TextField';

export default TextField;
