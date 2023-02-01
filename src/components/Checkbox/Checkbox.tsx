import React, { FC, useState, memo, useEffect } from 'react';
import { hiddenCheckbox, styledCheckbox, styledCheckboxWrapper } from './styles';
import type { CheckboxProps } from './types';
import WhiteTick from './assets/WhiteTick';
import GreyTick from './assets/GreyTick';

const Checkbox: FC<CheckboxProps> = (props) =>{
  const { 
    defaultChecked, 
    label, 
    name, 
    value, 
    onChange, 
    margin = '5px',
    size = '20px',
    'data-testid': dataTestId
  } = props;
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  }

  useEffect(() => {
    if (defaultChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [defaultChecked])

  return (
    <div className={styledCheckboxWrapper} >
      <input className={hiddenCheckbox}
        type='checkbox'
        defaultChecked={defaultChecked}
        disabled={props.disabled}
        onChange={onChange}
        name={name || ''}
        onClick={handleClick}
        data-testid={dataTestId}
        value={value}
      />
      <div className={`${styledCheckbox({margin, size, ...props})} ${checked ? 'checked' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <WhiteTick />
        <GreyTick />
      </div>
      {label}
    </div>
  );
};

export default memo(Checkbox);
