import { forwardRef, julo, cx } from '@julo-ui/system';

import { useAlertContext } from '../../AlertProvider';

import { useHandleIcon } from './usecase';
import { alertIconStatusSx, alertIconCx } from './styles';
import { AlertIconProps } from './types';

const AlertIcon = forwardRef<AlertIconProps, 'div'>((props, ref) => {
  const { placement = 'left', className, sx, ...resProps } = props;
  const { status = 'neutrals' } = useAlertContext(
    'AlertIcon should be within Alert',
  );

  const Icon = useHandleIcon({ status: status });

  return (
    <julo.div
      ref={ref}
      data-status={status}
      className={cx('julo-alert__icon', className)}
      sx={{ ...alertIconStatusSx[status], ...sx }}
      {...(placement && { 'data-icon-placement': placement })}
      {...resProps}
      __css={alertIconCx}
    >
      <Icon />
    </julo.div>
  );
});

AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
