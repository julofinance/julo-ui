import { cx, forwardRef, julo } from '@julo-ui/system';

import ProgressFill from './ProgressFill';
import useProgressStyle from './usecase/use-progress-style';
import { progressCx } from './styles';
import type { ProgressProps } from './types';

const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-valuetext': ariaValueText,
    title,
    role,
    className,
    sx,
    trackColor,
    color,
    height,
    ...resProps
  } = props;

  const { fillCss } = useProgressStyle({
    hasStripe,
    isAnimated,
    isIndeterminate,
    color,
  });

  return (
    <julo.div
      ref={ref}
      className={cx('julo-progress', 'julo-progress__track', className)}
      sx={{
        ...(propBorderRadius && { borderRadius: propBorderRadius }),
        ...(trackColor && { backgroundColor: trackColor }),
        ...(height && { height }),
        ...sx,
      }}
      {...resProps}
      __css={progressCx}
    >
      <ProgressFill
        className='julo-progress__fill'
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuetext={ariaValueText}
        min={min}
        max={max}
        value={value}
        isIndeterminate={isIndeterminate}
        css={fillCss}
        title={title}
        role={role}
        borderRadius={propBorderRadius}
        sx={{
          ...(height && { height }),
          ...(color && { backgroundColor: color }),
        }}
      />
      {children}
    </julo.div>
  );
});

Progress.displayName = 'Progress';

export default Progress;
