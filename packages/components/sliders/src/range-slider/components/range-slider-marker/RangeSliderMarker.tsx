import { cx, forwardRef, julo } from '@julo-ui/system';

import { useRangeSliderContext } from '../../RangeSliderProvider';
import { RangeSliderMarkerProps } from './types';

const RangeSliderMarker = forwardRef<RangeSliderMarkerProps, 'div'>(
  (props, ref) => {
    const { className, ...resProps } = props;
    const rangeSliderContext = useRangeSliderContext();

    if (!rangeSliderContext)
      throw new Error(
        'RangeSliderMarker should be within RangeSlider or RangeSliderProvider',
      );

    const { getMarkerProps } = rangeSliderContext;

    return (
      <julo.div
        className={cx('julo-range-slider__marker', className)}
        {...getMarkerProps(resProps, ref)}
      />
    );
  },
);

export default RangeSliderMarker;
