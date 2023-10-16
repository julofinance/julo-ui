import { cx, forwardRef, julo } from '@julo-ui/system';

import {
  rootSliderHorizontalTrackCx,
  rootSliderTrackCx,
  rootSliderVerticalTrackCx,
} from '../../../styles';
import { useSliderContext } from '../../SliderProvider';
import { SliderTrackProps } from './types';

const SliderTrack = forwardRef<SliderTrackProps, 'div'>((props, ref) => {
  const { className, ...resProps } = props;
  const sliderContext = useSliderContext();

  if (!sliderContext)
    throw Error('SliderTrack must be used within Slider or SliderProvider');

  const { getTrackProps, state } = sliderContext;

  return (
    <julo.div
      ref={ref}
      className={cx('julo-slider__track', className)}
      {...getTrackProps(resProps, ref)}
      __css={[
        rootSliderTrackCx,
        state.orientation === 'horizontal'
          ? rootSliderHorizontalTrackCx
          : rootSliderVerticalTrackCx,
      ]}
    />
  );
});

SliderTrack.displayName = 'SliderTrack';

export default SliderTrack;
