import { cx, forwardRef, julo } from '@julo-ui/system';

import { rootSliderInnerTrackCx } from '../../../styles';
import { useSliderContext } from '../../SliderProvider';
import { SliderInnerTrackProps } from './types';

const SliderInnerTrack = forwardRef<SliderInnerTrackProps, 'div'>(
  (props, ref) => {
    const { className, ...resProps } = props;
    const sliderContext = useSliderContext();

    if (!sliderContext)
      throw new Error(
        'SliderInnerTrack should be within Slider or SliderProvider',
      );

    const { getInnerTrackProps } = sliderContext;

    return (
      <julo.div
        className={cx('julo-slider__inner-track', className)}
        {...getInnerTrackProps(resProps, ref)}
        __css={rootSliderInnerTrackCx}
      />
    );
  },
);

SliderInnerTrack.displayName = 'SliderInnerTrack';

export default SliderInnerTrack;
