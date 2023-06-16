import { forwardRef, julo, cx } from '@julo-ui/system';
import { useFormControl } from '@julo-ui/form-control';
import Typography from '@julo-ui/typography';

import { inputCx } from './styles';
import type { InputProps } from './types';

const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const { className, htmlSize, ...resProps } = props;

  const inputProps = useFormControl<HTMLInputElement>(resProps);

  return (
    <Typography type='body' size='small' asChild>
      <julo.input
        ref={ref}
        size={htmlSize}
        className={cx('julo-input', className)}
        {...inputProps}
        __css={inputCx}
      />
    </Typography>
  );
});

/**
 * id used for InputGroup
 */
Input.id = 'input';
Input.displayName = 'Input';

export default Input;
