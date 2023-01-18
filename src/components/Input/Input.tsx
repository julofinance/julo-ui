import React, {
  FC,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  MutableRefObject,
} from 'react';
import { cx } from '@emotion/css';
import {
  inputComponentCss,
  inputContainerCss,
  inputLabelCss,
  errorCss,
  helperTextCss,
  inputWrapperCss,
  adornmentWrapperCss,
} from './styles';
import { Props } from './types';

const Input: FC<Props> = ({
  containerClassName,
  inputWrapperClassName,
  helperTextClassName,
  errorMessage,
  label,
  labelClassName,
  onChange,
  type = 'text',
  value,
  inputProps,
  name,
  placeholder,
  isNumeric,
  errorClassName,
  leftAdornment,
  rightAdornment,
  helperText,
  'data-testid': dataTestId,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  /**
   * trimLeft: remove all whitespace before first string
   * replace /\s\s+/g: replace double space with one space
   * replace /[^0-9]/g: replace except number space with one space
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const trimmedValue = value.trimLeft().replace(/\s\s+/g, ' ');
    const valueNumeric = trimmedValue.replace(/[^0-9]/g, '');
    const result = isNumeric ? valueNumeric : trimmedValue;

    if (onChange) {
      onChange(result);
    }
    setInputValue(result);
  };

  const onKeyDownValidation = (event: KeyboardEvent<HTMLInputElement>) => {
    return (
      type === 'number' &&
      (event.key === 'e' ||
        event.key === 'E' ||
        event.key === '-' ||
        event.key === '+') &&
      event.preventDefault()
    );
  };

  useEffect(() => {
    if (errorMessage && inputRef.current) {
      inputRef.current.focus();
    }
  }, [errorMessage]);

  // replace inputValue with value that defined outside component
  useEffect(() => {
    if (value || value === '') {
      setInputValue(value);
    }
  }, [value]);

  return (
    <div
      data-testid={dataTestId}
      className={cx(
        inputContainerCss({ error: !!errorMessage }),
        containerClassName,
      )}
    >
      <div className={cx(inputLabelCss, labelClassName)}>{label}</div>
      <div
        className={cx(
          inputWrapperCss({
            isFocused,
            isError: !!errorMessage,
            hasValue: !!inputValue,
          }),
          inputWrapperClassName,
        )}
      >
        {leftAdornment && (
          <div className={adornmentWrapperCss}>{leftAdornment}</div>
        )}
        <input
          {...inputProps}
          className={inputComponentCss({ error: !!errorMessage })}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          ref={inputRef}
          onKeyDown={onKeyDownValidation}
          name={name}
          id={name}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        {rightAdornment && (
          <div className={adornmentWrapperCss}>{rightAdornment}</div>
        )}
      </div>
      {helperText && !errorMessage && (
        <div className={cx(helperTextClassName, helperTextCss)}>
          {helperText}
        </div>
      )}

      {errorMessage && (
        <div className={cx(errorClassName, errorCss)}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
