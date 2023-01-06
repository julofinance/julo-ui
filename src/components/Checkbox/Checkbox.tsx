import React, { useState, memo, useEffect } from 'react';
import { hiddenCheckbox, styledCheckbox, styledCheckboxWrapper } from './styles';
import type { CheckboxProps } from './types';

const Checkbox = (props: CheckboxProps) => {
  const { defaultChecked, label, name, value, onClick, onChange, ...otherProps } = props;
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
        value={value}
      />
      <div className={`${styledCheckbox(otherProps)} ${checked ? 'checked' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      {label}
    </div>
  );
};

Checkbox.defaultProps = {
  defaultChecked: false,
  margin: '5px',
  size: '25px',
};

export default memo(Checkbox);
