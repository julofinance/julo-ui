import { HTMLJuloProps } from '@julo-ui/system';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps extends HTMLJuloProps<'button'> {
  block?: boolean;
  inverted?: boolean | false;
  /**
   * @default regular
   */
  size?: 'regular' | 'small';
  /**
   * @default primary
   */
  variant?: ButtonVariant;
}
