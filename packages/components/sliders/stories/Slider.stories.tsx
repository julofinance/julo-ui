import { Meta } from '@storybook/react';
import { julo } from '@julo-ui/system';

import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderInnerTrack,
  SliderMarker,
} from '../src';
import { useState } from 'react';

export default {
  title: 'Components/Forms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "`import { Sliders } from '@julo-ui/sliders';`",
      },
    },
  },
  decorators: [
    (story) => <julo.div sx={{ height: '300px' }}>{story()}</julo.div>,
  ],
} as Meta<typeof Slider>;

export const SliderDefault = () => (
  <Slider>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);

export const SliderReversed = () => (
  <Slider isReversed>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);

export const SliderDisableDefaultIcon = () => (
  <Slider>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb children={null} />
  </Slider>
);

export const SliderCustomIcon = () => (
  <Slider>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb sx={{ width: 30, height: 30 }}>#</SliderThumb>
  </Slider>
);

export const SliderVertical = () => (
  <Slider orientation='vertical'>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);

export const SliderWithMarker = () => {
  const [value, setValue] = useState<number>(0);

  const markerStyle = {
    marginTop: '0.5rem',
  };

  return (
    <Slider value={value} onChange={setValue} sx={{ marginTop: '50px' }}>
      <SliderTrack>
        <SliderInnerTrack />
      </SliderTrack>
      <SliderMarker value={25} sx={markerStyle}>
        25%
      </SliderMarker>
      <SliderMarker value={50} sx={markerStyle}>
        50%
      </SliderMarker>
      <SliderMarker value={75} sx={markerStyle}>
        75%
      </SliderMarker>
      <SliderMarker
        value={value}
        sx={{
          backgroundColor: 'var(--colors-primary-30)',
          color: 'var(--colors-neutrals-10)',
          padding: '0.25rem 0.5rem',
          top: '-150%',
          marginTop: 0,
        }}
      >
        {value}%
      </SliderMarker>
      <SliderThumb />
    </Slider>
  );
};

export const SliderVerticalAndReversed = () => (
  <Slider isReversed orientation='vertical'>
    <SliderTrack>
      <SliderInnerTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);

export function SliderStepped() {
  const [value, setValue] = useState<number>(1);
  return (
    <Slider value={value} onChange={setValue} min={1} max={7} step={2}>
      <SliderTrack>
        <SliderInnerTrack />
      </SliderTrack>
      <SliderThumb children={value} sx={{ width: 24, height: 24 }} />
    </Slider>
  );
}
