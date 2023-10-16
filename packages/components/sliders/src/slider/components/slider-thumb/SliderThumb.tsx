import { cx, forwardRef, julo } from '@julo-ui/system';

import { rootSliderThumbCx } from '../../../styles';
import { useSliderContext } from '../../SliderProvider';
import DefaultSliderThumbIcon from './DefaultSliderThumbIcon';
import { SliderThumbProps } from './types';

const SliderThumb = forwardRef<SliderThumbProps, 'div'>((props, ref) => {
  const {
    children = <DefaultSliderThumbIcon />,
    sx,
    className,
    ...resProps
  } = props;

  const sliderContext = useSliderContext();

  if (!sliderContext)
    throw new Error('SliderThumb should be within Slider or SliderProvider');

  const { getThumbProps, state } = sliderContext;

  return (
    <julo.div
      className={cx('julo-slider__thumb', className)}
      sx={{
        ...(children && {
          padding: '0.25rem',
          width: 'fit-content',
          height: 'auto',
        }),
        ...(state.orientation === 'horizontal'
          ? { top: '50%', transform: 'translateY(-50%);' }
          : { left: '50%', transform: 'translateX(-50%);' }),
        ...sx,
      }}
      {...getThumbProps(resProps, ref)}
      __css={rootSliderThumbCx}
    >
      {children}
    </julo.div>
  );
});

SliderThumb.displayName = 'SliderThumb';

export default SliderThumb;
