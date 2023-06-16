import { cx, forwardRef, julo } from '@julo-ui/system';

import { useFormControlContext } from '../../FormControlProvider';

import { RequiredIndicatorProps } from './types';

const RequiredIndicator = forwardRef<RequiredIndicatorProps, 'span'>(
  (props, ref) => {
    const { className, ...resProps } = props;
    const field = useFormControlContext();

    if (!field?.isRequired) return null;

    return (
      <julo.span
        {...field.getRequiredIndicatorProps(resProps, ref)}
        className={cx('julo-form__required-indicator', className)}
      />
    );
  },
);

RequiredIndicator.displayName = 'RequiredIndicator';

export default RequiredIndicator;
