import { useMemo } from 'react';

import { cx, forwardRef, julo } from '@julo-ui/system';

import { RadioGroupProvider } from './RadioGroupProvider';
import { radioGroupCx } from './styles';
import { RadioGroupProps } from './types';
import { useRadioGroup } from './use-radio-group';

const RadioGroup = forwardRef<RadioGroupProps, 'div'>((props, ref) => {
  const {
    children,
    className,
    orientation = 'horizontal',
    gap = '1.25rem',
    ...resProps
  } = props;

  const {
    getRootProps,
    value,
    name,
    isDisabled,
    isFocusable,
    onChange,
    htmlProps,
  } = useRadioGroup(resProps);

  const group = useMemo(
    () => ({
      name,
      value,
      isDisabled,
      isFocusable,
      onChange,
    }),
    [isDisabled, isFocusable, name, onChange, value],
  );

  return (
    <RadioGroupProvider value={group}>
      <julo.div
        ref={ref}
        className={cx('julo-radio-group', className)}
        data-orientation={orientation}
        {...getRootProps(htmlProps, ref)}
        __css={radioGroupCx({ gap })}
      >
        {children}
      </julo.div>
    </RadioGroupProvider>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
