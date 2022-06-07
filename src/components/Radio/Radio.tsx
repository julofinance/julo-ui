import React, { memo } from 'react';

import { styledRadio } from './styles';
import type { RadioProps } from './types';

const Radio = (props: RadioProps) => {
  const { checked, onClick, ...otherProps } = props;

  return (
    <input
      className={styledRadio(otherProps)}
      type='radio'
      checked={checked}
      onClick={onClick}
    />
  );
};

Radio.defaultProps = {
  margin: 0,
  checked: false,
  size: '20px',
};

export default memo(Radio);
