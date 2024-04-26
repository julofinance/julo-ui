import { Fragment, forwardRef } from 'react';
import { julo, cx } from '@julo-ui/system';

import { TooltipContentProps } from './types';

import { useTooltipContext } from '../../TooltipProvider';
import { contentTooltipCx } from '../../styles';

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (props, ref) => {
    const { getContentProps } = useTooltipContext();

    const { children, className, ...resProps } = props;

    return (
      <Fragment>
        <julo.div
          className={cx('julo-tooltip__content', className)}
          {...getContentProps(resProps, ref)}
          __css={contentTooltipCx}
        >
          {children}
        </julo.div>
      </Fragment>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
