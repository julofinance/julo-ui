import { cx, forwardRef, julo } from '@julo-ui/system';

import { rootSliderThumbCx } from '../../../styles';
import { useRangeSliderContext } from '../../RangeSliderProvider';
import { RangeSliderThumbProps } from './types';
import DefaultSliderThumbIcon from './DefaultSliderThumbIcon';
import { rangeSliderThumbCx } from './styles';

const RangeSliderThumb = forwardRef<RangeSliderThumbProps, 'div'>(
  (props, ref) => {
    const {
      className,
      children = <DefaultSliderThumbIcon />,
      index,
      sx,
      inputProps,
      inputRef,
      ...resProps
    } = props;
    const rangeSliderContext = useRangeSliderContext();

    if (!rangeSliderContext)
      throw new Error(
        'RangeSliderThumb should be within RangeSlider or RangeSliderProvider',
      );

    const { getThumbProps, getInputProps, state } = rangeSliderContext;

    return (
      <julo.div
        className={cx('julo-range-slider__thumb', className)}
        sx={{
          ...(children && {
            padding: '0.25rem',
            width: 'fit-content',
            height: 'auto',
          }),
          ...(state.orientation === 'horizontal'
            ? { top: '50%', transform: 'translateY(-50%);' }
            : { left: '50%', transform: 'translateX(-50%);' }),
          ...sx,
        }}
        {...getThumbProps({ index, ...resProps }, ref)}
        __css={[rootSliderThumbCx, rangeSliderThumbCx]}
      >
        {children}
        <julo.input {...getInputProps({ index, ...inputProps }, inputRef)} />
      </julo.div>
    );
  },
);

RangeSliderThumb.displayName = 'RangeSliderThumb';

export default RangeSliderThumb;
