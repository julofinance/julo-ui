import { forwardRef } from 'react';
import { cx, julo } from '@julo-ui/system';

import { TooltipArrowProps } from './types';

const TooltipArrow = forwardRef<HTMLDivElement, TooltipArrowProps>(
  (props, ref) => {
    return (
      <julo.div
        ref={ref}
        data-popper-arrow
        {...props}
        className={cx('julo-tooltip__arrow', props.className)}
      >
        <julo.div
          data-popper-arrow-inner
          className='julo-tooltip__arrow-inner'
        />
      </julo.div>
    );
  },
);

TooltipArrow.displayName = 'TooltipArrow';

export default TooltipArrow;
