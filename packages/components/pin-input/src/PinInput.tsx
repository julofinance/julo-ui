import { forwardRef, julo } from '@julo-ui/system';

import { pinInputCx } from './styles';
import type { PinInputProps } from './types';

const PinInput = forwardRef<PinInputProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={pinInputCx}>
      Hello World
    </julo.div>
  );
});

PinInput.displayName = 'PinInput';

export default PinInput;
