import { HTMLJuloProps } from '@julo-ui/system';
import { BaseSliderState, BaseUseSliderProps } from '../types';

export interface RangeSliderProps
  extends UseRangeSliderProps,
    Omit<HTMLJuloProps<'div'>, keyof UseRangeSliderProps> {}

export interface UseRangeSliderProps extends BaseUseSliderProps {
  /**
   * The value of the slider in controlled mode
   */
  value?: number[];
  /**
   * The initial value of the slider in uncontrolled mode
   */
  defaultValue?: number[];
  /**
   * Function called when the user starts selecting a new value (by dragging or clicking)
   */
  onChangeStart?(value: number[]): void;
  /**
   * Function called when the user is done selecting a new value (by dragging or clicking)
   */
  onChangeEnd?(value: number[]): void;
  /**
   * Function called whenever the slider value changes  (by dragging or clicking)
   */
  onChange?(value: number[]): void;
  /**
   * The name attribute of the hidden `input` field.
   * This is particularly useful in forms
   */
  name?: string | string[];

  /**
   * The static string to use used for `aria-valuetext`
   */
  'aria-valuetext'?: string[];
  /**
   * The static string to use used for `aria-label`
   * if no visible label is used.
   */
  'aria-label'?: string[];
  /**
   * The static string `aria-labelledby` that points to the
   * ID of the element that serves as label for the slider
   */
  'aria-labelledby'?: string[];
  /**
   * The minimum distance between slider thumbs. Useful for preventing
   * the thumbs from being too close together.
   * @default 0
   */
  minStepsBetweenThumbs?: number;
  /**
   * If true, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   *
   * @default false
   */
  isDisableSwap?: boolean;
}

export interface Bounds {
  min: number;
  max: number;
}

export interface RangeSliderState extends BaseSliderState {
  value: number[];
  getThumbPercent: (index: number) => number;
  getThumbMinValue: (index: number) => number;
  getThumbMaxValue: (index: number) => number;
  valueBounds: Bounds[];
  distanceBetweenThumbs: number;
}

export interface RangeSliderActions {
  setValueAtIndex(index: number, value: number): void;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  stepUp(index: number, step?: number): void;
  stepDown(index: number, step?: number): void;
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  reset(): void;
}
