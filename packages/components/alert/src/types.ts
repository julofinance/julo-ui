import { HTMLJuloProps } from '@julo-ui/system';

export type AlertStatus =
  | 'info'
  | 'negative'
  | 'positive'
  | 'warning'
  | 'neutrals';

export interface AlertProps extends HTMLJuloProps<'div'> {
  /**
   * @default "neutrals"
   * The `status` of the Alert will affect style colors and Typography
   */
  status?: AlertStatus;
}
