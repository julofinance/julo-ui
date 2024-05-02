import { isValidElement } from 'react';

import { forwardRef, julo } from '@julo-ui/system';

import { TooltipRoot } from './components/tooltip-root';
import { TooltipTrigger } from './components/tooltip-trigger';
import { TooltipPositioner } from './components/tooltip-positioner';
import { TooltipContent } from './components/tooltip-content';
import { TooltipArrow } from './components/tooltip-arrow';

import type { TooltipProps } from './types';

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const { children, label, hasArrow, ...resProps } = props;

  return (
    <TooltipRoot placement='bottom' {...resProps}>
      <TooltipTrigger>
        {isValidElement(children) ? (
          children
        ) : (
          <julo.span>{children}</julo.span>
        )}
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent ref={ref}>
          {hasArrow && <TooltipArrow />}
          {label}
        </TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
