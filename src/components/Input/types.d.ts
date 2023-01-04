export interface Props {
  containerClassName?: string;
  inputWrapperClassName?: string;
  labelClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
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
  isNumeric?: boolean;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
}

export interface IInput {
  error?: boolean;
}
