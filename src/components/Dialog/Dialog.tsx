import React, { FC, useEffect, useState } from 'react';
import { cx } from '@emotion/css';

import { dialogWrapperCss, cardCss } from './styles';

import { Props } from './types';

const Dialog: FC<Props> = ({
  children,
  clickOutside = true,
  onClose,
  show = false,
  containerClassName,
  contentClassName,
  animation,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClick = () => {
    if (clickOutside) {
      setIsOpen(false);
      if (onClose) {
        onClose(false);
      }
    }
  };

  return (
    <div
      className={cx(dialogWrapperCss(isOpen), containerClassName)}
      style={{ pointerEvents: isOpen ? 'visible' : 'none' }}
      onClick={handleClick}
    >
      <div
        className={cx(cardCss({ isOpen, animation }), contentClassName)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
