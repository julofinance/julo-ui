import { Typography } from '@julo-ui/typography';
import { forwardRef, cx } from '@julo-ui/system';

import { useAlertContext } from '../../AlertProvider';

import { alertTitle } from './styles';
import type { AlertTitleProps } from './types';

const AlertTitle = forwardRef<AlertTitleProps, 'div'>((props, ref) => {
  const { children, className, sx, ...resProps } = props;
  const alertContext = useAlertContext();

  if (!alertContext) throw new Error('AlertIcon should be within Alert');

  const { status = 'neutrals' } = alertContext;

  return (
    <Typography
      bold
      as='div'
      type='caption'
      ref={ref}
      sx={{ ...alertTitle[status], ...sx }}
      className={cx('julo-alert__title', className)}
      {...resProps}
    >
      {children}
    </Typography>
  );
});

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
