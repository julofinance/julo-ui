import { cloneElement, forwardRef, isValidElement } from 'react';
import { julo } from '@julo-ui/system';

import { TooltipTriggerProps } from './types';

import { useTooltipContext } from '../../TooltipProvider';

const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  (props, ref) => {
    const { getTriggerProps } = useTooltipContext();
    const clonedTriggerProps = getTriggerProps(props, ref);
    // must delete to prevent duplicated elements
    delete clonedTriggerProps.children;

    const clonedElement = cloneElement(
      isValidElement(props.children) ? (
        props.children
      ) : (
        <julo.span>{props.children}</julo.span>
      ),
      { ...clonedTriggerProps },
    );

    return clonedElement;
  },
);

TooltipTrigger.displayName = 'TooltipTrigger';

export default TooltipTrigger;
