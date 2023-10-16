import { forwardRef, julo, cx } from '@julo-ui/system';

import { cardBodyCx } from './styles';
import type { CardBodyProps } from './types';

const CardBody = forwardRef<CardBodyProps, 'div'>((props, ref) => {
  const { children, className, sx, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-card__body', className)}
      sx={sx}
      {...resProps}
      __css={cardBodyCx}
    >
      {children}
    </julo.div>
  );
});

CardBody.displayName = 'CardBody';

export default CardBody;
