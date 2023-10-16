import { forwardRef, julo, cx } from '@julo-ui/system';
import Typography from '@julo-ui/typography';

import type { ButtonProps } from './types';
import { buttonCx, buttonSize, buttonVariant } from './styles';

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    children,
    className,
    inverted,
    size = 'regular',
    variant = 'primary',
    block,
    sx,
    ...resProps
  } = props;

  return (
    <Typography type='body' size={size} bold asChild>
      <julo.button
        ref={ref}
        className={cx('julo-button', className)}
        data-button-size={size}
        data-button-variant={variant}
        data-button-variant-inverted={inverted}
        data-button-block={block}
        sx={{
          ...buttonVariant[variant],
          ...buttonSize[size],
          ...sx,
        }}
        {...resProps}
        __css={buttonCx}
      >
        {children}
      </julo.button>
    </Typography>
  );
});

Button.displayName = 'Button';

export default Button;
