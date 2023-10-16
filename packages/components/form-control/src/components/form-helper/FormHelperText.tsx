import { cx, forwardRef } from '@julo-ui/system';
import Typography from '@julo-ui/typography';

import { useFormControlContext } from '../../FormControlProvider';
import { formInfoText } from '../../styles';

import { FormHelperTextProps } from './types';
import { formHelperTextCx } from './styles';

const FormHelperText = forwardRef<FormHelperTextProps, 'div'>((props, ref) => {
  const { className, ...resProps } = props;
  const field = useFormControlContext();

  if (field?.isInvalid && !field?.isDisabled && !field?.isReadOnly) return null;

  return (
    <Typography
      as='div'
      type='caption'
      size='small'
      {...field?.getHelperTextProps(resProps, ref)}
      css={[formInfoText, formHelperTextCx]}
      className={cx('julo-form__helper-text', className)}
    />
  );
});

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
