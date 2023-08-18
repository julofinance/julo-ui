import { HTMLJuloProps } from '@julo-ui/system';

//border should be change
export type CardVariant = 'border' | 'filled';

export interface CardProps extends HTMLJuloProps<'div'> {
  /**
   * @default TBD
   */
  variant?: CardVariant;
}
