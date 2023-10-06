import { forwardRef, julo, cx } from '@julo-ui/system';

import { cardFooterCx } from './styles';
import type { CardFooterProps } from './types';

const CardFooter = forwardRef<CardFooterProps, 'div'>((props, ref) => {
  const { children, className, sx, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-card__footer', className)}
      sx={sx}
      {...resProps}
      __css={cardFooterCx}
    >
      {children}
    </julo.div>
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
