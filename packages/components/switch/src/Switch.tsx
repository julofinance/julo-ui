import { cx, forwardRef, julo } from '@julo-ui/system';
import { useCheckbox } from '@julo-ui/checkbox';

import { switchCx } from './styles';
import type { SwitchProps } from './types';

const Switch = forwardRef<SwitchProps, 'div'>((props, ref) => {
  const { className, children, inputProps, inputRef, ...resProps } = props;

  const {
    getRootProps,
    getIndicatorProps,
    getCheckboxProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox(resProps);

  return (
    <julo.label
      ref={ref}
      className={cx('julo-switch', className)}
      {...getRootProps()}
      __css={switchCx}
    >
      <julo.input
        className='julo-switch__input'
        {...getInputProps(inputProps, inputRef)}
      />
      <julo.span {...getCheckboxProps()} className='julo-switch__track'>
        <julo.span {...getIndicatorProps()} className='julo-switch__thumb' />
      </julo.span>
      {children && (
        <julo.span className='julo-switch__label' {...getLabelProps()}>
          {children}
        </julo.span>
      )}
    </julo.label>
  );
});

Switch.displayName = 'Switch';

export default Switch;
