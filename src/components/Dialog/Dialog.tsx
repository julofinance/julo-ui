import React, { FC, useEffect, useState } from 'react';
import { cx } from '@emotion/css';

import { dialogWrapperCss, cardCss } from './styles';

import { Props } from './types';

const Dialog: FC<Props> = ({
  children,
  persistent = true,
  onClose,
  show = false,
  className,
  animation,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClick = () => {
    if (persistent) {
      setIsOpen(false);
      if (onClose) {
        onClose(false);
      }
    }
  };

  return (
    <div
      className={cx(dialogWrapperCss(isOpen), className)}
      onClick={handleClick}
    >
      <div
        className={cx(cardCss({ isOpen, animation }))}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
