import { HTMLJuloProps } from '@julo-ui/system';

interface ProgressOptions {
  /**
   * The `value` of the progress indicator.
   * If `undefined` the progress bar will be in `indeterminate` state
   */
  value?: number;
  /**
   * The minimum value of the progress
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the progress
   * @default 100
   */
  max?: number;
  /**
   * If `true`, the progress bar will show stripe
   *
   * @default false
   */
  hasStripe?: boolean;
  /**
   * If `true`, and hasStripe is `true`, the stripes will be animated
   *
   * @default false
   */
  isAnimated?: boolean;
  /**
   * If `true`, the progress will be indeterminate and the `value`
   * prop will be ignored
   *
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * The color name of the progress track. Use a color key in the theme object
   */
  trackColor?: string;
  /**
   * The color of the progress indicator. Use a color key in the theme object
   */
  color?: string;
}

export interface ProgressProps
  extends ProgressOptions,
    Omit<HTMLJuloProps<'div'>, 'color'> {
  borderRadius?: string | number;
  height?: string | number;
}
