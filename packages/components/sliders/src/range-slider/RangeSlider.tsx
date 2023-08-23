import { forwardRef, julo } from '@julo-ui/system';
import { rangeSliderCx } from './styles';

import { RangeSliderProps } from './types';

const RangeSlider = forwardRef<RangeSliderProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={rangeSliderCx}>
      Hello World
    </julo.div>
  );
});

RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
