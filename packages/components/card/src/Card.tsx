import { forwardRef, julo, cx } from '@julo-ui/system';

import { cardCx, cardVariant } from './styles';
import type { CardProps } from './types';

const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const { variant = 'filled', className, sx, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-card', className)}
      data-card-variant={variant}
      sx={{
        ...cardVariant[variant],
        ...sx,
      }}
      {...resProps}
      __css={cardCx}
    >
      Hello World
    </julo.div>
  );
});

Card.displayName = 'Card';

export default Card;
