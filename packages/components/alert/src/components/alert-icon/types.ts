import { HTMLJuloProps } from '@julo-ui/system';

export interface AlertIconProps extends HTMLJuloProps<'svg'> {
  /**
   * The placement option for icon and affect in style margin left or right
   * if placement={null}, the placement style will not be applied
   *
   */
  placement?: 'left' | null | 'right';
}
