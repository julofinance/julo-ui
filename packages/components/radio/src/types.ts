import type {
  DOMAttributes,
  HTMLJuloProps,
  PropsOf,
  SystemStyleObject,
} from '@julo-ui/system';

type BaseInputProps = Pick<
  PropsOf<'input'>,
  'onBlur' | 'checked' | 'defaultChecked'
>;

type RadioControlProps = Omit<HTMLJuloProps<'input'>, keyof UseRadioProps>;

export interface RadioProps
  extends UseRadioProps,
    BaseInputProps,
    RadioControlProps {
  /**
   * The spacing between the radio and its label text
   * @default 0.5rem
   * @type SystemProps["marginLeft"]
   */
  spacing?: SystemStyleObject['marginLeft'];
  /**
   * Additional props to be forwarded to the `input` element
   */
  inputProps?: DOMAttributes<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export interface RadioState {
  isInvalid?: boolean;
  isFocused: boolean;
  isChecked: boolean;
  isActive: boolean;
  isHovered: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export interface UseRadioProps {
  /**
   * id assigned to input
   */
  id?: string;
  /**
   * The name of the input field in a radio
   * (Useful for form submission).
   */
  name?: string;
  /**
   * The value to be used in the radio button.
   * This is the value that will be returned on form submission.
   */
  value?: string | number;
  /**
   * If `true`, the radio will be checked.
   * You'll need to pass `onChange` to update its value (since it is now controlled)
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * If `true`, the radio will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the radio will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true` and `isDisabled` is true, the radio will remain
   * focusable but not interactive.
   *
   * @default false
   */
  isFocusable?: boolean;
  /**
   * If `true`, the radio will be read-only
   *
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * If `true`, the radio button will be invalid. This also sets `aria-invalid` to `true`.
   *
   * @default false
   */
  isInvalid?: boolean;
  /**
   * If `true`, the radio button will be required. This also sets `aria-required` to `true`.
   *
   * @default false
   */
  isRequired?: boolean;
  /**
   * Function called when checked state of the `input` changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The callback invoked when the radio is blurred (loses focus)
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * The callback invoked when the radio is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Defines the string that labels the radio element.
   */
  'aria-label'?: string;
  /**
   * @internal
   *
   * Uses to handle id assignment to each of radio that inside FormControl but not wrap with RadioGroup
   */
  'data-radiogroup'?: true;
  /**
   * Refers to the `id` of the element that labels the radio element.
   */
  'aria-labelledby'?: string;
  'aria-invalid'?: React.AriaAttributes['aria-invalid'];
  'aria-describedby'?: string;
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number;
}
