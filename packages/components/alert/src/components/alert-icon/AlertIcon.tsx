import { forwardRef, julo, cx } from '@julo-ui/system';

import { useAlertContext } from '../../AlertProvider';

import { useHandleIcon } from './usecase';
import { alertIconStatusSx, alertIconCx } from './styles';
import { AlertIconProps } from './types';

const AlertIcon = forwardRef<AlertIconProps, 'div'>((props, ref) => {
  const { className, sx, ...resProps } = props;
  const alertContext = useAlertContext();

  if (!alertContext) throw new Error('AlertIcon should be within Alert');

  const { status } = alertContext;
  const Icon = useHandleIcon({ status: status });

  return (
    <julo.div
      ref={ref}
      data-status={status}
      className={cx('julo-alert__icon', className)}
      sx={{ ...alertIconStatusSx[status], ...sx }}
      __css={alertIconCx}
    >
      <Icon {...resProps} />
    </julo.div>
  );
});

AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
