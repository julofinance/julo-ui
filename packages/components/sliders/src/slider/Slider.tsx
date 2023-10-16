import { cx, forwardRef, julo } from '@julo-ui/system';

import type { SliderProps } from './types';
import { useSlider } from './use-slider';
import { sliderCx } from './styles';
import { SliderProvider } from './SliderProvider';
import { rootSliderCx } from '../styles';

const Slider = forwardRef<SliderProps, 'div'>((props, ref) => {
  const {
    children,
    className,
    orientation = 'horizontal',
    inputRef,
    inputProps,
    ...resProps
  } = props;

  const { getInputProps, getRootProps, ...sliderContext } = useSlider({
    direction: 'ltr',
    orientation,
    ...resProps,
  });

  return (
    <SliderProvider value={sliderContext}>
      <julo.div
        className={cx('julo-slider', className)}
        {...getRootProps({}, ref)}
        __css={[rootSliderCx, sliderCx]}
      >
        {children}
        <julo.input
          className='julo-slider__input'
          {...getInputProps(inputProps, inputRef)}
        />
      </julo.div>
    </SliderProvider>
  );
});

Slider.displayName = 'Slider';

export default Slider;
