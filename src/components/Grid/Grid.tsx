import React from 'react';
import { GridProps } from './types';
import { gridStyles } from './styles';
import { cx } from '@emotion/css';

const Grid: React.FC<GridProps> = ({
  align = 'flex-start',
  background,
  border = 'none',
  borderRadius,
  children,
  className,
  'data-testid': dataTestId,
  equalHeight,
  gutter = 0,
  height = 200,
  justify = 'flex-start',
  margin,
  onClick,
  padding,
  ref,
}) => {
  return (
    <div
      ref={ref}
      className={cx(
        gridStyles({
          align,
          background,
          border,
          borderRadius,
          equalHeight,
          gutter,
          height,
          justify,
          margin,
          padding,
        }),
        className,
      )}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default Grid;
