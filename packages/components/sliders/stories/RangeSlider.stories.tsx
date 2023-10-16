import { Meta } from '@storybook/react';

import { julo } from '@julo-ui/system';

import {
  RangeSlider,
  RangeSliderInnerTrack,
  RangeSliderMarker,
  RangeSliderThumb,
  RangeSliderTrack,
  useRangeSlider,
} from '../src';
import { useState } from 'react';

export default {
  title: 'Components/Forms/RangeSlider',
  component: RangeSlider,
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
} as Meta<typeof RangeSlider>;

export const RangeSliderDefault = () => (
  <RangeSlider defaultValue={[25, 50, 75]}>
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
    <RangeSliderThumb index={2} />
  </RangeSlider>
);

export const RangeSliderDisableSwapThumb = () => (
  <RangeSlider defaultValue={[25, 50, 75]} isDisableSwap>
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
    <RangeSliderThumb index={2} />
  </RangeSlider>
);

export const RangeSliderDisableDefaultIcon = () => (
  <RangeSlider isReversed>
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} children={null} />
    <RangeSliderThumb index={1} children={null} />
  </RangeSlider>
);

export const RangeSliderReversed = () => (
  <RangeSlider
    isReversed
    // eslint-disable-next-line no-console
    onChange={(v) => console.log('onChange', v)}
  >
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);

export const RangeSliderVertical = () => (
  <RangeSlider orientation='vertical' defaultValue={[25, 50, 75]}>
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
    <RangeSliderThumb index={2} />
  </RangeSlider>
);

export const RangeSliderVerticalDisableSwapThumb = () => (
  <RangeSlider orientation='vertical' defaultValue={[25, 50, 75]} isDisableSwap>
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
    <RangeSliderThumb index={2} />
  </RangeSlider>
);

export const RangeSliderVerticalReversed = () => (
  <RangeSlider
    orientation='vertical'
    isReversed
    // eslint-disable-next-line no-console
    onChange={(v) => console.log('onChange', v)}
  >
    <RangeSliderTrack>
      <RangeSliderInnerTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);

export function RangeSliderStepped() {
  const [value, setValue] = useState<number[]>([0, 0]);
  return (
    <RangeSlider value={value} onChange={setValue} min={1} max={7} step={2}>
      <RangeSliderTrack>
        <RangeSliderInnerTrack />
      </RangeSliderTrack>
      <RangeSliderThumb
        children={value[0]}
        sx={{ width: 24, height: 24 }}
        index={0}
      />
      <RangeSliderThumb
        children={value[1]}
        sx={{ width: 24, height: 24 }}
        index={1}
      />
    </RangeSlider>
  );
}

export const RangeSliderWithMarker = () => {
  const [value, setValue] = useState<number[]>([25, 50, 75]);

  const markerStyle = {
    marginTop: '0.5rem',
  };

  return (
    <RangeSlider value={value} onChange={setValue} sx={{ marginTop: '50px' }}>
      <RangeSliderTrack>
        <RangeSliderInnerTrack />
      </RangeSliderTrack>
      <RangeSliderMarker value={25} sx={markerStyle}>
        25%
      </RangeSliderMarker>
      <RangeSliderMarker value={50} sx={markerStyle}>
        50%
      </RangeSliderMarker>
      <RangeSliderMarker value={75} sx={markerStyle}>
        75%
      </RangeSliderMarker>
      <RangeSliderMarker
        value={value[0]}
        sx={{
          backgroundColor: 'var(--colors-primary-30)',
          color: 'var(--colors-neutrals-10)',
          padding: '0.25rem 0.5rem',
          top: '-150%',
          marginTop: 0,
        }}
      >
        {value[0]}%
      </RangeSliderMarker>
      <RangeSliderMarker
        value={value[1]}
        sx={{
          backgroundColor: 'var(--colors-primary-30)',
          color: 'var(--colors-neutrals-10)',
          padding: '0.25rem 0.5rem',
          top: '-150%',
          marginTop: 0,
        }}
      >
        {value[1]}%
      </RangeSliderMarker>
      <RangeSliderMarker
        value={value[2]}
        sx={{
          backgroundColor: 'var(--colors-primary-30)',
          color: 'var(--colors-neutrals-10)',
          padding: '0.25rem 0.5rem',
          top: '-150%',
          marginTop: 0,
        }}
      >
        {value[2]}%
      </RangeSliderMarker>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
      <RangeSliderThumb index={2} />
    </RangeSlider>
  );
};

export const RangeSliderWithSpacing = () => {
  const [value, setValue] = useState<number[]>([25, 50, 75]);
  const [spacing, setSpacing] = useState(10);

  return (
    <>
      <RangeSlider
        value={value}
        onChange={setValue}
        minStepsBetweenThumbs={spacing}
      >
        <RangeSliderTrack>
          <RangeSliderInnerTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
        <RangeSliderThumb index={2} />
      </RangeSlider>
      <pre>{JSON.stringify(value)}</pre>
      <pre>
        spacing:
        <julo.input
          value={spacing}
          type='number'
          onChange={(e) => setSpacing(Number(e.target.value))}
        />
      </pre>
    </>
  );
};

export const CustomRangeSlider = () => {
  const {
    state,
    getThumbProps,
    getInnerTrackProps,
    getRootProps,
    getTrackProps,
  } = useRangeSlider({
    direction: 'ltr',
    defaultValue: [10, 40],
    minStepsBetweenThumbs: 5,
  });

  return (
    <>
      <julo.div {...getRootProps()}>
        <julo.div
          sx={{ height: '4px', backgroundColor: 'var(--colors-neutrals-40)' }}
          {...getTrackProps()}
        >
          <julo.div
            sx={{ height: '100%', backgroundColor: 'var(--colors-primary-30)' }}
            {...getInnerTrackProps()}
          />
        </julo.div>
        {state.value.map((v, i) => (
          <julo.div
            key={i}
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--corner-3xl)',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--colors-primary-50)',
            }}
            {...getThumbProps({ index: i })}
          />
        ))}
      </julo.div>
      <pre>{JSON.stringify(state.value)}</pre>
    </>
  );
};
