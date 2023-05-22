import { forwardRef, useMemo } from 'react';

import { cx } from '@emotion/css';

import Typography from '@julo-ui/typography';
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
    typographyProps,
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
    <Typography type='body' size={size} {...typographyProps} bold asChild>
      <button
        ref={ref}
        className={cx(buttonCx, variantClass, className)}
        data-button-size={size}
        data-button-variant={variant}
        data-button-variant-inverted={inverted}
        data-button-block={block}
        {...resProps}
      >
        {children}
      </button>
    </Typography>
  );
});

Button.displayName = 'Button';

export default Button;
