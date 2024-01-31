import { cx, forwardRef, julo } from '@julo-ui/system';

import {
  rootSliderHorizontalTrackCx,
  rootSliderTrackCx,
  rootSliderVerticalTrackCx,
} from '../../../styles';
import { useRangeSliderContext } from '../../RangeSliderProvider';
import { RangeSliderTrackProps } from './types';

const RangeSliderTrack = forwardRef<RangeSliderTrackProps, 'div'>(
  (props, ref) => {
    const { className, ...resProps } = props;

    const { getTrackProps, state } = useRangeSliderContext(
      'RangeSliderTrack should be within Slider or SliderProvider',
    );

    return (
      <julo.div
        className={cx('julo-range-slider__track', className)}
        {...getTrackProps(resProps, ref)}
        __css={[
          rootSliderTrackCx,
          state.orientation === 'horizontal'
            ? rootSliderHorizontalTrackCx
            : rootSliderVerticalTrackCx,
        ]}
      />
    );
  },
);

RangeSliderTrack.displayName = 'RangeSliderTrack';

export default RangeSliderTrack;
