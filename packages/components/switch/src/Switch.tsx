import { forwardRef, julo } from '@julo-ui/system';

import { switchCx } from './styles';
import type { SwitchProps } from './types';

const Switch = forwardRef<SwitchProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={switchCx}>
      Hello World
    </julo.div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
