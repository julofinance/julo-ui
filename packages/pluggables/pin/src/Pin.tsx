import { forwardRef, julo } from '@julo-ui/system';

import { pinCx } from './styles';
import type { PinProps } from './types';

const Pin = forwardRef<PinProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={pinCx}>
      Hello World
    </julo.div>
  );
});

Pin.displayName = 'Pin';

export default Pin;
