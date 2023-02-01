import React from 'react';
import { cx } from '@emotion/css';
import { itemStyles } from './styles';
import { GridItemProps } from './types';

const GridItem: React.FC<GridItemProps> = ({
  background,
  border = '1px solid grey',
  borderRadius = 5,
  breakpoints = { sm: 1 },
  children,
  className,
  'data-testid': dataTestId,
  margin,
  onClick,
  padding = 5,
  ref,
}) => {
  return (
    <div
      className={cx(
        itemStyles({
          breakpoints,
          padding,
          margin,
          border,
          borderRadius,
          background,
        }),
        className,
      )}
      ref={ref}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default GridItem;
