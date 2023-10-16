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

type CheckboxControlProps = Omit<HTMLJuloProps<'div'>, keyof UseCheckboxProps>;

export interface CheckboxProps
  extends CheckboxControlProps,
    BaseInputProps,
    UseCheckboxProps {
  /**
   * The spacing between the checkbox and its label text
   * @default 0.5rem
   * @type SystemProps["marginLeft"]
   */
  spacing?: SystemStyleObject['marginLeft'];
  /**
   * The color of the checkbox icon when checked or indeterminate
   */
  iconColor?: string;
  /**
   * The size of the checkbox icon when checked or indeterminate
   */
  iconSize?: string | number;
  /**
   * The checked icon to use
   *
   * @type React.ReactElement
   * @default CheckboxIcon
   */
  icon?: React.ReactElement;
  /**
   * Additional props to be forwarded to the `input` element
   */
  inputProps?: DOMAttributes<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export interface CheckboxState {
  isInvalid?: boolean;
  isFocused: boolean;
  isChecked: boolean;
  isActive: boolean;
  isHovered: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export interface UseCheckboxProps {
  /**
   * If `true`, the checkbox will be checked.
   * You'll need to pass `onChange` to update its value (since it is now controlled)
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * If `true`, the checkbox will be indeterminate.
   * This only affects the icon shown inside checkbox
   * and does not modify the isChecked property.
   *
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * If `true`, the checkbox will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true` and `isDisabled` is passed, the checkbox will
   * remain tabbable but not interactive
   *
   * @default false
   */
  isFocusable?: boolean;
  /**
   * If `true`, the checkbox will be readonly
   *
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * If `true`, the checkbox is marked as invalid.
   * Changes style of unchecked state.
   *
   * @default false
   */
  isInvalid?: boolean;
  /**
   * If `true`, the checkbox input is marked as required,
   * and `required` attribute will be added
   *
   * @default false
   */
  isRequired?: boolean;
  /**
   * If `true`, the checkbox will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * The callback invoked when the checked state of the `Checkbox` changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The callback invoked when the checkbox is blurred (loses focus)
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * The callback invoked when the checkbox is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * The name of the input field in a checkbox
   * (Useful for form submission).
   */
  name?: string;
  /**
   * The value to be used in the checkbox input.
   * This is the value that will be returned on form submission.
   */
  value?: string | number;
  /**
   * id assigned to input
   */
  id?: string;
  /**
   * Defines the string that labels the checkbox element.
   */
  'aria-label'?: string;
  /**
   * Refers to the `id` of the element that labels the checkbox element.
   */
  'aria-labelledby'?: string;
  'aria-invalid'?: true | undefined;
  'aria-describedby'?: string;
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number;
}
