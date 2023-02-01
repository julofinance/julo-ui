import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

export interface Props {
  containerClassName?: string;
  inputWrapperClassName?: string;
  labelClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
  helperTextClassName?: string;
  label?: string;
  onChange?: (event: string | number) => void;
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  name: string;
  placeholder?: string;
  helperText?: string;
  isNumeric?: boolean;
  preAppend?: ReactNode;
  append?: ReactNode;
  'data-testid'?: string;
}

export interface IInput {
  error?: boolean;
}

export interface IInputState {
  isFocused: boolean;
  hasValue: boolean;
  isError: boolean;
}
