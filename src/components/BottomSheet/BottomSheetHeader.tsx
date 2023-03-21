import React, { isValidElement, ReactNode } from 'react';
import Typography from '../Typography';
import { bSheetHeader } from './styles';

const BottomSheetHeader = ({ children }: { children: string | ReactNode }) => {
  const isString = typeof children === 'string';

  if (isString) {
    return (
      <div className={bSheetHeader}>
        <Typography type='body' bold>
          {children}
        </Typography>
      </div>
    );
  } else {
    return isValidElement(children) ? children : null;
  }
};

export default BottomSheetHeader;
