import { Typography } from '@julo-ui/typography';
import { forwardRef, cx } from '@julo-ui/system';

import { useAlertContext } from '../../AlertProvider';

import { alertDescription } from './styles';
import type { AlertDescriptionProps } from './types';

const AlertDescription = forwardRef<AlertDescriptionProps, 'div'>(
  (props, ref) => {
    const { children, className, css, sx, ...resProps } = props;
    const alertContext = useAlertContext();

    if (!alertContext) throw new Error('AlertIcon should be within Alert');

    const { status } = alertContext;

    return (
      <Typography
        bold
        as='div'
        type='caption'
        ref={ref}
        sx={{ ...alertDescription[status], ...sx }}
        css={css}
        className={cx('julo-alert__description', className)}
        {...resProps}
      >
        {children}
      </Typography>
    );
  },
);

AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
