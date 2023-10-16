export type Orientation = 'vertical' | 'horizontal';

export type EventSource = 'keyboard' | 'pointer' | null;

export interface BaseSliderState {
  min: number;
  max: number;
  step: number;
  isFocused: boolean;
  isDragging: boolean;
  isReversed: boolean;
  isDisabled: boolean;
  eventSource: EventSource;
  focusThumbOnChange: boolean;
  isInteractive: boolean;
  isVertical: boolean;
  orientation: Orientation;
  tenSteps: number;
}

export interface BaseUseSliderProps {
  /**
   * The minimum allowed value of the slider. Cannot be greater than max.
   * @default 0
   */
  min?: number;
  /**
   * The maximum allowed value of the slider. Cannot be less than min.
   * @default 100
   */
  max?: number;
  /**
   * The step in which increments/decrements have to be made
   * @default 1
   */
  step?: number;
  /**
   * Orientation of the slider
   * @default "horizontal"
   */
  orientation?: Orientation;
  /**
   * If `true`, the value will be incremented or decremented in reverse.
   * @default false
   */
  isReversed?: boolean;
  /**
   * The base `id` to use for the slider and its components
   */
  id?: string;
  /**
   * If `true`, the slider will be disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the slider will be in `read-only` state
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Function that returns the `aria-valuetext` for screen readers.
   * It is mostly used to generate a more human-readable
   * representation of the value for assistive technologies
   */
  getAriaValueText?(value: number): string;
  /**
   * If `false`, the slider handle will not capture focus when value changes.
   * @default true
   */
  focusThumbOnChange?: boolean;
  /**
   * The writing mode
   * @default "ltr"
   */
  direction?: 'ltr' | 'rtl';
}
