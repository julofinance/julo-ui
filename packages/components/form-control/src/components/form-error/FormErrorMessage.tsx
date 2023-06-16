import { cx, forwardRef } from '@julo-ui/system';
import Typography from '@julo-ui/typography';

import { useFormControlContext } from '../../FormControlProvider';
import { formInfoText } from '../../styles';

import { FormErrorMessageProps } from './types';
import { formErrorMessageCx } from './styles';

const FormErrorMessage = forwardRef<FormErrorMessageProps, 'div'>(
  (props, ref) => {
    const { className, css, ...resProps } = props;
    const field = useFormControlContext();

    if (!field?.isInvalid || field?.isDisabled || field?.isReadOnly)
      return null;

    return (
      <Typography
        as='div'
        type='caption'
        size='small'
        {...field?.getErrorMessageProps(resProps, ref)}
        css={[formInfoText, formErrorMessageCx, css]}
        className={cx('julo-form__error-message', className)}
      />
    );
  },
);

FormErrorMessage.displayName = 'FormErrorMessage';

export default FormErrorMessage;
