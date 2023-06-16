import { cx, forwardRef, julo } from '@julo-ui/system';

import { formControlCx } from './styles';
import type { FormControlProps } from './types';
import {
  FormControlProvider,
  useFormControlProvider,
} from './FormControlProvider';

const FormControl = forwardRef<FormControlProps, 'div'>((props, ref) => {
  const { className, ...resProps } = props;

  const {
    getRootProps,
    htmlProps: _,
    ...context
  } = useFormControlProvider(resProps);

  return (
    <FormControlProvider value={context}>
      <julo.div
        {...getRootProps({}, ref)}
        __css={formControlCx}
        className={cx('julo-form-control', className)}
      />
    </FormControlProvider>
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
