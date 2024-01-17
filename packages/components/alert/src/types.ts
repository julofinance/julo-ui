import { HTMLJuloProps } from '@julo-ui/system';

export type AlertStatus = 'info' | 'negative' | 'positive' | 'warning' | 'neutrals';

export interface AlertProps extends HTMLJuloProps<'div'> {
  /**
   * @default "neutrals"
   */
  status?: AlertStatus;
}

export interface UseAlertProps {
  status: AlertStatus;
}
