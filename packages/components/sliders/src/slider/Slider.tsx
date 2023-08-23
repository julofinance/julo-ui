import { forwardRef, julo } from '@julo-ui/system';

import { sliderCx } from './styles';
import type { SliderProps } from './types';

const Slider = forwardRef<SliderProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={sliderCx}>
      Hello World
    </julo.div>
  );
});

Slider.displayName = 'Slider';

export default Slider;
