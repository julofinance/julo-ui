import { forwardRef, memo, useMemo } from 'react';

import { cx } from '@emotion/css';

import Typography from '../Typography';
import type { ButtonProps } from './types';
import {
  buttonCx,
  primaryButtonCx,
  secondaryButtonCx,
  tertiaryButtonCx,
} from './styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    inverted,
    size = 'regular',
    variant = 'primary',
    block,
    ...resProps
  } = props;

  const variantClass = useMemo(() => {
    switch (variant) {
      case 'secondary':
        return secondaryButtonCx;

      case 'tertiary':
        return tertiaryButtonCx;

      default:
        return primaryButtonCx;
    }
  }, [variant]);

  return (
    <Typography type='body' size={size} bold asChild>
      <button
        ref={ref}
        className={cx(
          buttonCx,
          variantClass,
          {
            inverted: inverted,
            block,
            small: size === 'small',
          },
          className,
        )}
        {...resProps}
      >
        {children}
      </button>
    </Typography>
  );
});

export default memo(Button);
