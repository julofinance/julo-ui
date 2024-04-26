import { createContext } from '@julo-ui/context';
import { UseTooltipReturn } from './types';

interface TooltipContext extends UseTooltipReturn {
  ariaLabel?: string;
}

export const [TooltipContextProvider, useTooltipContext] =
  createContext<TooltipContext>({
    name: `TooltipContext`,
    errorMessage: `useTooltipContext: 'context' is undefined. You have to wrap the components in "<TooltipRoot />`,
  });
