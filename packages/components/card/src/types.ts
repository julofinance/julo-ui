import { HTMLJuloProps } from '@julo-ui/system';

export type CardVariant = 'default' | 'border' | 'filled';

export interface CardProps extends HTMLJuloProps<'div'> {
  /**
   * @default "default"
   */
  variant?: CardVariant;
}
