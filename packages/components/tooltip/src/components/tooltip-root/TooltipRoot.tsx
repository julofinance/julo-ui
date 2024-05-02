import { TooltipRootProps } from './types';

import { TooltipContextProvider } from '../../TooltipProvider';
import { useTooltip } from '../../use-tooltip';

/**
 * Tooltip Root is a wrapper for create Tooltip and REQUIRED.
 */
function TooltipRoot(props: TooltipRootProps) {
  const tooltipContext = useTooltip(props);

  return (
    <TooltipContextProvider value={tooltipContext}>
      {props.children}
    </TooltipContextProvider>
  );
}

TooltipRoot.displayName = 'TooltipRoot';

export default TooltipRoot;
