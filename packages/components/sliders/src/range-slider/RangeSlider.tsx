import { cx, forwardRef, julo } from '@julo-ui/system';
import { rangeSliderCx } from './styles';

import { RangeSliderProps } from './types';
import { useRangeSlider } from './use-range-slider';
import { rootSliderCx } from '../styles';
import { RangeSliderProvider } from './RangeSliderProvider';

const RangeSlider = forwardRef<RangeSliderProps, 'div'>((props, ref) => {
  const {
    children,
    className,
    orientation = 'horizontal',
    ...resProps
  } = props;

  const { getRootProps, ...rangeSliderContext } = useRangeSlider({
    direction: 'ltr',
    orientation,
    ...resProps,
  });

  return (
    <RangeSliderProvider value={rangeSliderContext}>
      <julo.div
        className={cx('julo-range-slider', className)}
        {...getRootProps({}, ref)}
        __css={[rootSliderCx, rangeSliderCx]}
      >
        {children}
      </julo.div>
    </RangeSliderProvider>
  );
});

RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
