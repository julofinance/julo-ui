import { cx, forwardRef, julo } from '@julo-ui/system';

import { rootSliderInnerTrackCx } from '../../../styles';
import { useRangeSliderContext } from '../../RangeSliderProvider';
import { RangeSliderInnerTrackProps } from './types';

const RangeSliderInnerTrack = forwardRef<RangeSliderInnerTrackProps, 'div'>(
  (props, ref) => {
    const { className, ...resProps } = props;
    const rangeSliderContext = useRangeSliderContext();

    if (!rangeSliderContext)
      throw new Error(
        'RangeSliderInnerTrack should be within RangeSlider or RangeSliderProvider',
      );

    const { getInnerTrackProps } = rangeSliderContext;

    return (
      <julo.div
        className={cx('julo-range-slider__inner-track', className)}
        {...getInnerTrackProps(resProps, ref)}
        __css={rootSliderInnerTrackCx}
      />
    );
  },
);

RangeSliderInnerTrack.displayName = 'RangeSliderInnerTrack';

export default RangeSliderInnerTrack;
