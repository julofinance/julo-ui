import { forwardRef, julo, cx } from '@julo-ui/system';
import { Typography } from '@julo-ui/typography';

import type { BadgeProps } from './types';
import { badgeCx, badgeSizeSx, badgeStatusSx } from './styles';
import useHandleIcon from './usecase/use-handle-icon';

const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const {
    leftIcon: leftIconProp,
    rightIcon: rightIconProp,
    size = 'regular',
    status = 'warning',
    children,
    className,
    sx,
    ...resProps
  } = props;

  const { leftIcon, rightIcon } = useHandleIcon({
    leftIcon: leftIconProp,
    rightIcon: rightIconProp,
  });

  return (
    <Typography type='caption' size='small' bold asChild>
      <julo.div
        ref={ref}
        className={cx('julo-badge', className)}
        data-badge-size={size}
        data-badge-status={status}
        sx={{
          ...badgeStatusSx[status],
          ...badgeSizeSx[size],
          ...sx,
        }}
        {...resProps}
        __css={badgeCx({ withIcon: !!leftIcon || !!rightIcon })}
      >
        {leftIcon}
        <span className='julo-badge__content'>{children}</span>
        {rightIcon}
      </julo.div>
    </Typography>
  );
});

Badge.displayName = 'Badge';

export default Badge;
