import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { cx, julo } from '@julo-ui/system';

import { TooltipPositionerProps } from './types';

import { useTooltipContext } from '../../TooltipProvider';
import { positionerTooltipCx } from '../../styles';

const TooltipPositioner = forwardRef<HTMLDivElement, TooltipPositionerProps>(
  function TooltipPositioner(props, ref) {
    const { getPositionerProps, open } = useTooltipContext();

    return (
      <>
        {createPortal(
          <julo.div
            className={cx('julo-tooltip__positioner', props.className)}
            {...getPositionerProps(props, ref)}
            __css={positionerTooltipCx({ open })}
          />,
          document.body,
        )}
      </>
    );
  },
);

TooltipPositioner.displayName = 'TooltipPositioner';

export default TooltipPositioner;
