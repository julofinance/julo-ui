import { HTMLJuloProps } from '@julo-ui/system';

export type ButtonSize = 'regular' | 'small';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps extends HTMLJuloProps<'button'> {
  block?: boolean;
  inverted?: boolean | false;
  /**
   * @default regular
   */
  size?: ButtonSize;
  /**
   * @default primary
   */
  variant?: ButtonVariant;
}
