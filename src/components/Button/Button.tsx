import React, { memo } from 'react';

import { cx } from '@emotion/css';

import Typography from '../Typography';
import { styledButton } from './styles';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    children,
    ref,
    onClick,
    className,
    type = 'button',
    'data-testid': dataTestId,
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      className={cx(styledButton(otherProps), className)}
      onClick={onClick}
      disabled={otherProps.disabled}
      type={type}
      data-testid={dataTestId}
    >
      <Typography body={otherProps.small ? 2 : 1} bold color='inherit'>
        {children}
      </Typography>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default memo(Button);
