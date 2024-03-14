import { cloneElement } from 'react';

import { callAllFn } from '@julo-ui/function-utils';
import { cx, forwardRef, julo } from '@julo-ui/system';

import useHandleAnimation from './usecase/use-handle-animation';
import { CheckboxIcon } from './components/checkbox-icon';
import { useCheckboxGroupContext } from './components/checkbox-group';
import { useCheckbox } from './use-checkbox';
import { checkboxCx, iconCx } from './styles';
import type { CheckboxProps } from './types';

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const {
    className,
    spacing = '0.5rem',
    children,
    iconColor,
    iconSize,
    icon = <CheckboxIcon />,
    checked,
    isChecked: isCheckedProp,
    isDisabled,
    onChange: onChangeProp,
    inputProps,
    inputRef = null,
    value,
    ...resProps
  } = props;

  const groupContext = useCheckboxGroupContext();

  let isChecked = isCheckedProp || checked;

  if (groupContext?.value && value) {
    isChecked = groupContext.value.includes(value);
  }

  let onChange = onChangeProp;

  if (groupContext?.onChange && value) {
    onChange = callAllFn(groupContext.onChange, onChangeProp);
  }

  const {
    state,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
  } = useCheckbox({
    ...resProps,
    value,
    isDisabled: isDisabled ?? groupContext?.isDisabled,
    isChecked,
    onChange,
  });

  const { isShouldAnimate } = useHandleAnimation(state.isChecked);

  const clonedIcon = cloneElement(icon, {
    __css: iconCx({
      isIndeterminate: Boolean(state.isIndeterminate),
      isShouldAnimate,
      iconColor,
      iconSize,
    }),
    isIndeterminate: state.isIndeterminate,
    isChecked: state.isChecked,
  });

  return (
    <julo.label
      ref={ref}
      className={cx('julo-checkbox', className)}
      {...getRootProps({}, ref)}
      __css={checkboxCx}
    >
      <julo.input
        {...getInputProps(
          {
            ...inputProps,
            className: cx('julo-checkbox__input', inputProps?.className),
          },
          inputRef,
        )}
      />
      <julo.span className='julo-checkbox__control' {...getCheckboxProps()}>
        {clonedIcon}
      </julo.span>
      {children && (
        <julo.span
          className='julo-checkbox__label'
          sx={{ marginLeft: spacing }}
          {...getLabelProps()}
        >
          {children}
        </julo.span>
      )}
    </julo.label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
