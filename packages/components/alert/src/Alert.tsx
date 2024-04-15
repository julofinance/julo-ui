import { forwardRef, julo, cx } from '@julo-ui/system';

import useHandleChildren from './usecase/use-handle-children';
import { alertCx, alertStatus } from './styles';
import type { AlertProps } from './types';
import { AlertProvider } from './AlertProvider';

const Alert = forwardRef<AlertProps, 'div'>((props, ref) => {
  const { children, className, status = 'neutrals', sx, ...resProps } = props;

  const clone = useHandleChildren({ children });

  return (
    <AlertProvider value={{ status }}>
      <julo.div
        ref={ref}
        className={cx('julo-alert', className)}
        data-alert-status={status}
        sx={{
          ...alertStatus[status],
          ...sx,
        }}
        {...resProps}
        __css={alertCx}
      >
        {clone}
      </julo.div>
    </AlertProvider>
  );
});

Alert.displayName = 'Alert';

export default Alert;
