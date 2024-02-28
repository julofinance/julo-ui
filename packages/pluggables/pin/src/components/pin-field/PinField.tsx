import { cx, forwardRef, julo } from '@julo-ui/system';

import type { PinFieldProps } from './types';
import { pinFieldCx } from './styles';
import { usePinField } from './use-pin-field';

const PinField = forwardRef<PinFieldProps, 'input'>((props, ref) => {
  const { className, ...resProps } = props;

  const pinFieldProps = usePinField(resProps, ref);

  return (
    <julo.input
      className={cx('julo-pin__field', className)}
      {...pinFieldProps}
      __css={pinFieldCx}
    />
  );
});

export default PinField;
