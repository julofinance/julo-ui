import { Story, Meta } from '@storybook/react';

import { RangeSliderProps, RangeSlider } from '../src';

export default {
  title: 'Components/Forms/Sliders/RangeSlider',
  component: RangeSlider,
  parameters: {
    docs: {
      description: {
        component: "`import { Sliders } from '@julo-ui/sliders';`",
      },
    },
  },
} as Meta<typeof RangeSlider>;

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />;

export const RangeSliderDefault = Template.bind({});
