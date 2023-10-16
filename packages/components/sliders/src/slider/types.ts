import { DOMAttributes, HTMLJuloProps } from '@julo-ui/system';

import { BaseUseSliderProps, BaseSliderState } from '../types';

export interface SliderProps
  extends UseSliderProps,
    Omit<HTMLJuloProps<'div'>, keyof UseSliderProps> {
  /**
   * Additional props to be forwarded to the `input` element
   */
  inputProps?: DOMAttributes<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export interface UseSliderProps extends BaseUseSliderProps {
  /**
   * The value of the slider in controlled mode
   */
  value?: number;
  /**
   * The initial value of the slider in uncontrolled mode
   */
  defaultValue?: number;
  /**
   * Function called when the user starts selecting a new value (by dragging or clicking)
   */
  onChangeStart?(value: number): void;
  /**
   * Function called when the user is done selecting a new value (by dragging or clicking)
   */
  onChangeEnd?(value: number): void;
  /**
   * Function called whenever the slider value changes  (by dragging or clicking)
   */
  onChange?(value: number): void;
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms
   */
  name?: string;
  /**
   * The static string to use used for `aria-valuetext`
   */
  'aria-valuetext'?: string;
  /**
   * The static string to use used for `aria-label`
   * if no visible label is used.
   */
  'aria-label'?: string;
  /**
   * The static string `aria-labelledby` that points to the
   * ID of the element that serves as label for the slider
   */
  'aria-labelledby'?: string;
}

export interface SliderState extends BaseSliderState {
  value: number;
}

export interface SliderActions {
  stepUp(step?: number): void;
  stepDown(step?: number): void;
  stepTo(value: number): void;
  reset(): void;
}
