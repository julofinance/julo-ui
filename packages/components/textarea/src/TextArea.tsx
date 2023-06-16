import { forwardRef, julo, cx } from '@julo-ui/system';
import { useFormControl } from '@julo-ui/form-control';
import Typography from '@julo-ui/typography';

import { textAreaCx } from './styles';
import type { TextAreaProps } from './types';

const TextArea = forwardRef<TextAreaProps, 'textarea'>((props, ref) => {
  const { className, isResizeable = true, sx, ...resProps } = props;

  const textareaProps = useFormControl<HTMLTextAreaElement>(resProps);

  return (
    <Typography type='body' size='small' asChild>
      <julo.textarea
        ref={ref}
        className={cx('julo-textarea', className)}
        sx={{
          resize: isResizeable ? 'both' : 'none',
          ...sx,
        }}
        {...textareaProps}
        __css={textAreaCx}
      />
    </Typography>
  );
});

/**
 * id used for InputGroup
 */
TextArea.id = 'textarea';
TextArea.displayName = 'TextArea';

export default TextArea;
