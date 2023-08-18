import { cx, forwardRef, julo } from '@julo-ui/system';
import { callAllFn, isTrullyEmpty } from '@julo-ui/function-utils';

import { useRadioGroupContext } from './components/radio-group';
import { useRadio } from './use-radio';
import { radioCx } from './styles';
import type { RadioProps } from './types';

const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
  const {
    className,
    spacing = '0.5rem',
    children,
    isChecked: isCheckedProp,
    isDisabled,
    isFocusable,
    onChange: onChangeProp,
    inputProps,
    inputRef = null,
    value,
    name: nameProp,
    ...resProps
  } = props;

  const groupContext = useRadioGroupContext();

  let isChecked = isCheckedProp;
  let onChange = onChangeProp;

  if (!!groupContext) {
    if (!isTrullyEmpty(groupContext.value) && !isTrullyEmpty(value)) {
      isChecked = groupContext.value === value;
    }

    if (groupContext.onChange && value) {
      onChange = callAllFn(groupContext.onChange, onChangeProp);
    }
  }

  const name = nameProp ?? groupContext?.name;

  const {
    getInputProps,
    getRootProps,
    getLabelProps,
    getRadioProps,
    htmlProps,
  } = useRadio({
    ...resProps,
    value,
    isDisabled: isDisabled ?? groupContext?.isDisabled,
    isFocusable: isFocusable ?? groupContext?.isFocusable,
    isChecked,
    onChange,
    name,
  });

  return (
    <julo.label
      className={cx('julo-radio', className)}
      ref={ref}
      {...getRootProps()}
      __css={radioCx}
    >
      <julo.input
        {...getInputProps(
          {
            ...inputProps,
            className: cx('julo-radio__input', inputProps?.className),
          },
          inputRef,
        )}
      />
      <julo.span
        className='julo-radio__control'
        {...getRadioProps(htmlProps)}
      />
      {children && (
        <julo.span
          className='julo-radio__label'
          sx={{ marginLeft: spacing }}
          {...getLabelProps()}
        >
          {children}
        </julo.span>
      )}
    </julo.label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
