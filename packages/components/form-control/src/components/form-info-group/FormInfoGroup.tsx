import { cx, forwardRef, julo } from '@julo-ui/system';
import Typography from '@julo-ui/typography';

import { FormInfoGroupProps, FormInfoGroupWithCounterProps } from './types';
import { formInfoGroupCx } from './styles';

const FormInfoGroup = forwardRef<FormInfoGroupProps, 'div'>((props, ref) => {
  const {
    showCounter,
    currentTextLength,
    maxTextLength,
    children,
    className,
    ...resProps
  } = props as FormInfoGroupWithCounterProps;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-form__info-group', className)}
      {...resProps}
      __css={formInfoGroupCx}
    >
      {children}
      {showCounter && (
        <Typography
          as='div'
          type='caption'
          size='small'
          className='julo-form__counter-text'
        >
          <span>
            {currentTextLength}/{maxTextLength}
          </span>
        </Typography>
      )}
    </julo.div>
  );
});

export default FormInfoGroup;
