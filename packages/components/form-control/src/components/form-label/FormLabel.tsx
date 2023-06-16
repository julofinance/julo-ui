import { cx, forwardRef, julo } from '@julo-ui/system';

import { useFormControlContext } from '../../FormControlProvider';

import RequiredIndicator from './RequiredIndicator';
import { FormLabelProps } from './types';
import { formLabelCx } from './styles';

const FormLabel = forwardRef<FormLabelProps, 'label'>((props, ref) => {
  const {
    children,
    className,
    requiredIndicator = <RequiredIndicator />,
    optionalIndicator,
    ...resProps
  } = props;

  const field = useFormControlContext();
  const ownProps = field?.getLabelProps(resProps, ref) ?? { ref, ...resProps };

  return (
    <julo.label
      {...ownProps}
      className={cx('julo-form__label', className)}
      __css={formLabelCx}
    >
      {children}
      {field?.isRequired ? requiredIndicator : optionalIndicator}
    </julo.label>
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
