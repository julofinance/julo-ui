import type { FormControlProps } from '@julo-ui/form-control';
import type {
  InputLeftAddonProps,
  InputLeftElementProps,
  InputProps,
  InputRightAddonProps,
  InputRightElementProps,
} from '@julo-ui/input';
import type { DOMAttributes } from '@julo-ui/system';
import type { TextAreaProps } from '@julo-ui/textarea';

export interface BaseTextFieldProps
  extends Omit<FormControlProps, 'onChange' | 'onFocus' | 'onBlur'> {
  name?: string;
  label?: string;
  errorMessage?: string;
  helperText?: string;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: number;
  leftAddon?: React.ReactNode;
  leftAddonProps?: Omit<InputLeftAddonProps, 'children'>;
  rightAddon?: React.ReactNode;
  rightAddonProps?: Omit<InputRightAddonProps, 'children'>;
  leftElement?: React.ReactNode;
  leftElementProps?: Omit<InputLeftElementProps, 'children'>;
  rightElement?: React.ReactNode;
  rightElementProps?: Omit<InputRightElementProps, 'children'>;
  hideLoadingIndicator?: boolean;
  showCounter?: boolean;
  /**
   * @default 0
   */
  maxTextLength?: number;
  /**
   * @default 0
   */
  currentTextLength?: number;
  /**
   * type for input
   *
   * useless if using multiline
   */
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export type TextFieldProps = SinglelineTextFieldProps | MultilineTextFieldProps;

interface MultilineTextFieldProps extends BaseTextFieldProps {
  multiline: true;
  inputRef?: React.Ref<HTMLTextAreaElement>;
  inputProps?: DOMAttributes<HTMLTextAreaElement> &
    Omit<TextAreaProps, 'isResizeable'>;
  onFocus?: TextAreaProps['onFocus'];
  onChange?: TextAreaProps['onChange'];
  onBlur?: TextAreaProps['onBlur'];
  value?: TextAreaProps['value'];
}

interface SinglelineTextFieldProps extends BaseTextFieldProps {
  multiline?: false;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: DOMAttributes<HTMLInputElement> & InputProps;
  onFocus?: InputProps['onFocus'];
  onChange?: InputProps['onChange'];
  onBlur?: InputProps['onBlur'];
  value?: InputProps['value'];
}
