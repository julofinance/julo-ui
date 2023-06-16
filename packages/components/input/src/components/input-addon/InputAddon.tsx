import { cx, forwardRef, julo } from '@julo-ui/system';

import { InputAddonProps } from './types';
import { inputAddonCx } from './styles';

const InputAddon = forwardRef<InputAddonProps, 'div'>((props, ref) => {
  const { className, children, placement, ...resProps } = props;

  return (
    <julo.div
      ref={ref}
      data-addon-placement={placement}
      className={cx('julo-input-addon', className)}
      {...resProps}
      __css={inputAddonCx}
    >
      {children}
    </julo.div>
  );
});

InputAddon.displayName = 'InputAddon';

export default InputAddon;
