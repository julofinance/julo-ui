import { HTMLJuloProps, forwardRef, julo } from '@julo-ui/system';
import { GetProgressPropsOptions, getProgressProps } from '../utils';
import { progressFillCx } from './styles';

interface ProgressFillProps
  extends HTMLJuloProps<'div'>,
    GetProgressPropsOptions {
  borderRadius?: string | number;
}

const ProgressFill = forwardRef<ProgressFillProps, 'div'>((props, ref) => {
  const {
    min,
    max,
    value,
    isIndeterminate,
    role,
    sx,
    borderRadius,
    ...resProps
  } = props;

  const progress = getProgressProps({
    value,
    min,
    max,
    isIndeterminate,
    role,
  });

  return (
    <julo.div
      ref={ref}
      sx={{
        width: `${progress.percent}%`,
        ...(borderRadius && { borderRadius }),
        ...sx,
      }}
      {...progress.bind}
      {...resProps}
      __css={progressFillCx}
    />
  );
});

export default ProgressFill;
