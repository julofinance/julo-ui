import { HTMLJuloProps } from '@julo-ui/system';

export interface CheckboxGroupProps
  extends UseCheckboxGroupProps,
    Omit<HTMLJuloProps<'div'>, 'onChange' | 'defaultValue'> {
  orientation?: 'vertical' | 'horizontal';
  /**
   *
   * The gap between checkbox
   *
   * @default 1.25rem
   */
  gap?: string | number;
}

export interface UseCheckboxGroupProps {
  /**
   * The value of the checkbox group
   */
  value?: Array<string | number>;
  /**
   * The initial value of the checkbox group
   */
  defaultValue?: Array<string | number>;
  /**
   * The callback fired when any children Checkbox is checked or unchecked
   */
  onChange?(value: Array<string | number>): void;
  /**
   * If `true`, all wrapped checkbox inputs will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, input elements will receive
   * `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs
   *
   * @default false
   */
  isNative?: boolean;
}
