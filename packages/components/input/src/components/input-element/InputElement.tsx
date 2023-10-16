import { cx, forwardRef, julo } from '@julo-ui/system';

import type { InputElementProps } from './types';
import { inputElementCx } from './styles';

const InputElement = forwardRef<InputElementProps, 'div'>((props, ref) => {
  const { placement, children, className, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-input-element', className)}
      data-element-placement={placement}
      {...resProps}
      __css={inputElementCx}
    >
      {children}
    </julo.div>
  );
});

InputElement.displayName = 'InputElement';

export default InputElement;
