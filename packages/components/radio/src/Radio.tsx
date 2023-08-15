import { forwardRef, julo } from '@julo-ui/system';

import { radioCx } from './styles';
import type { RadioProps } from './types';

const Radio = forwardRef<RadioProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={radioCx}>
      Hello World
    </julo.div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
