import { forwardRef, julo, cx } from '@julo-ui/system';

import { cardHeaderCx } from './styles';
import type { CardHeaderProps } from './types';

const CardHeader = forwardRef<CardHeaderProps, 'div'>((props, ref) => {
  const { children, className, sx, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-card__header', className)}
      sx={sx}
      {...resProps}
      __css={cardHeaderCx}
    >
      {children}
    </julo.div>
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
