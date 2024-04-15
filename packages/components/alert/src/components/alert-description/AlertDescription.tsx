import { Typography } from '@julo-ui/typography';
import { forwardRef, cx } from '@julo-ui/system';

import { useAlertContext } from '../../AlertProvider';

import { alertDescription } from './styles';
import type { AlertDescriptionProps } from './types';

const AlertDescription = forwardRef<AlertDescriptionProps, 'div'>(
  (props, ref) => {
    const { children, className, sx, ...resProps } = props;
    const { status = 'neutrals' } = useAlertContext(
      'AlertDescription should be within Alert',
    );

    return (
      <Typography
        bold
        as='div'
        type='caption'
        ref={ref}
        sx={{ ...alertDescription[status], ...sx }}
        className={cx('julo-alert__description', className)}
        {...resProps}
      >
        {children}
      </Typography>
    );
  },
);

AlertDescription.id = 'alert-description';
AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
