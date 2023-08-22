import { useMemo } from 'react';

import { cx, forwardRef, julo } from '@julo-ui/system';

import { CheckboxGroupProvider } from './CheckboxGroupProvider';
import { useCheckboxGroup } from './use-checkbox-group';
import { CheckboxGroupProps } from './types';
import { checkboxGroupCx } from './styles';

const CheckboxGroup = forwardRef<CheckboxGroupProps, 'div'>((props, ref) => {
  const {
    children,
    isDisabled,
    className,
    orientation = 'horizontal',
    gap = '1.25rem',
    onChange: onChangeProp,
    ...resProps
  } = props;

  const { value, onChange } = useCheckboxGroup({
    ...props,
    onChange: onChangeProp,
  });

  const group = useMemo(
    () => ({ value, onChange, isDisabled }),
    [isDisabled, onChange, value],
  );

  return (
    <CheckboxGroupProvider value={group}>
      <julo.div
        ref={ref}
        className={cx('julo-checkbox-group', className)}
        data-orientation={orientation}
        {...resProps}
        __css={checkboxGroupCx({ gap })}
      >
        {children}
      </julo.div>
    </CheckboxGroupProvider>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
