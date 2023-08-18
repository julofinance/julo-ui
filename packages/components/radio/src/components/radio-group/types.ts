import { Dict, HTMLJuloProps } from '@julo-ui/system';

export interface RadioGroupProps
  extends UseRadioGroupProps,
    Omit<
      HTMLJuloProps<'div'>,
      'onChange' | 'value' | 'defaultValue' | 'defaultChecked'
    > {
  orientation?: 'vertical' | 'horizontal';
  /**
   *
   * The gap between checkbox
   *
   * @default 1.25rem
   */
  gap?: string | number;
}

export interface UseRadioGroupProps extends Dict {
  /**
   * The value of the radio to be `checked`
   * (in controlled mode)
   */
  value?: string | number;
  /**
   * The value of the radio to be `checked`
   * initially (in uncontrolled mode)
   */
  defaultValue?: string | number;
  /**
   * Function called once a radio is checked
   * @param nextValue the value of the checked radio
   */
  onChange?(nextValue: string | number): void;
  /**
   * If `true`, all wrapped radio inputs will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If `true` and `isDisabled` is true, all wrapped radio inputs will remain
   * focusable but not interactive.
   *
   * @default false
   */
  isFocusable?: boolean;
  /**
   * The `name` attribute forwarded to each `radio` element
   */
  name?: string;
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
