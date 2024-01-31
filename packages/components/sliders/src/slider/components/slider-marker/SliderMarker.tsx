import { cx, forwardRef, julo } from '@julo-ui/system';

import { useSliderContext } from '../../SliderProvider';
import { SliderMarkerProps } from './types';

const SliderMarker = forwardRef<SliderMarkerProps, 'div'>((props, ref) => {
  const { className, ...resProps } = props;
  const { getMarkerProps } = useSliderContext(
    'SliderMarker should be within Slider or SliderProvider',
  );

  return (
    <julo.div
      className={cx('julo-slider__marker', className)}
      {...getMarkerProps(resProps, ref)}
    />
  );
});

SliderMarker.displayName = 'SliderMarker';

export default SliderMarker;
