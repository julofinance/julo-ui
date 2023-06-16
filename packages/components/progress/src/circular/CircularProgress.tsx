import { cx, forwardRef, julo } from '@julo-ui/system';

import { Shape } from './Shape';
import { Circle } from './Circle';

import useCircleProgressStyle from './usecase/use-circle-progress-style';
import { circularProgressCX, trackColorSx } from './styles';
import type { CircularProgressProps } from './types';

const CircularProgress = forwardRef<CircularProgressProps, 'div'>(
  (props, ref) => {
    const {
      className,
      size = '48px',
      max = 100,
      min = 0,
      valueText,
      getValueText,
      value,
      capIsRound,
      children,
      thickness = '10px',
      color = 'var(--colors-primary-30)',
      trackColor,
      isIndeterminate,
      variant = 'primary',
      ...resProps
    } = props;

    const { progress, indicatorProps } = useCircleProgressStyle({
      max,
      min,
      valueText,
      value,
      getValueText,
      isIndeterminate,
    });

    return (
      <julo.div
        ref={ref}
        className={cx('julo-progress', className)}
        {...progress.bind}
        {...resProps}
        __css={circularProgressCX}
      >
        <Shape size={size} isIndeterminate={isIndeterminate}>
          <Circle
            sx={{
              ...trackColorSx[variant],
              ...(trackColor && { stroke: trackColor }),
            }}
            strokeWidth={thickness}
            className='julo-progress__track'
          />
          <Circle
            stroke={color}
            strokeWidth={thickness}
            className='julo-progress__indicator'
            strokeLinecap={capIsRound ? 'round' : undefined}
            opacity={progress.value === 0 && !isIndeterminate ? 0 : undefined}
            {...indicatorProps}
          />
        </Shape>
        {children}
      </julo.div>
    );
  },
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
