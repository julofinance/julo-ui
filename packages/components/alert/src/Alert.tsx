import { forwardRef, julo } from '@julo-ui/system';

import { alertCx } from './styles';
import type { AlertProps } from './types';

const Alert = forwardRef<AlertProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={alertCx}>
      Hello World
    </julo.div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
