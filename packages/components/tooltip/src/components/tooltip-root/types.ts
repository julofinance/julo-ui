import { UseTooltipProps } from '../../types';

export interface TooltipRootProps extends Partial<UseTooltipProps> {
  /**
   * The React component to use as the
   * trigger for the tooltip
   */
  children: React.ReactNode;
}
