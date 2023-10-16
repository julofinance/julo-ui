import { HTMLJuloProps } from '@julo-ui/system';

export const BADGE_STATUS = [
  'warning',
  'success',
  'info',
  'error',
  'neutral',
] as const;

export type BadgeStatus = typeof BADGE_STATUS[number];
export type BadgeSize = 'small' | 'regular';

export interface BadgeProps extends HTMLJuloProps<'div'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /**
   * @default regular
   */
  size?: BadgeSize;
  /**
   * @default 'warning
   */
  status?: BadgeStatus;
}
