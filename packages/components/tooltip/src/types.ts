import { type UsePopperProps } from '@chakra-ui/popper';
import { type PropGetter } from '@julo-ui/system';

import { TooltipRootProps } from './components';

export type TooltipProps = TooltipRootProps & {
  label?: string;
  hasArrow?: boolean;
};

export type UseTooltipReturn = {
  open: boolean;
  show: () => void;
  hide: () => void;
  getTriggerProps: PropGetter<'button'>;
  getContentProps: PropGetter<'div'>;
  getPositionerProps: PropGetter<'div'>;
  getArrowProps: (
    props?: React.HTMLAttributes<HTMLDivElement>,
  ) => React.HTMLAttributes<HTMLDivElement>;
  getArrowInnerProps: (
    props?: React.HTMLAttributes<HTMLDivElement>,
  ) => React.HTMLAttributes<HTMLDivElement>;
};

export interface UseTooltipProps
  extends Pick<
    UsePopperProps,
    'modifiers' | 'gutter' | 'offset' | 'arrowPadding' | 'placement'
  > {
  /**
   * Delay (in ms) before showing the tooltip
   * @default 0ms
   */
  openDelay?: number;
  /**
   * Delay (in ms) before hiding the tooltip
   * @default 0ms
   */
  closeDelay?: number;
  /**
   * If `true`, the tooltip will hide on click
   * @default true
   */
  closeOnClick?: boolean;
  /**
   * If `true`, the tooltip will hide while the pointer is down
   * @default true
   */
  closeOnPointerDown?: boolean;
  /**
   * If `true`, the tooltip will hide on pressing Esc key
   * @default true
   */
  closeOnEsc?: boolean;
  /**
   * Callback to run when the tooltip shows
   */
  onOpen?(): void;
  /**
   * Callback to run when the tooltip hides
   */
  onClose?(): void;
  /**
   * Custom `id` to use in place of `uuid`
   */
  id?: string;
  /**
   * If `true`, the tooltip will be shown (in controlled mode)
   * @default false
   */
  open?: boolean;
  /**
   * If `true`, the tooltip will be initially shown
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default 10
   */
  arrowSize?: number;
}
