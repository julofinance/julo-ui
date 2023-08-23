import { Story, Meta } from '@storybook/react';

import { SliderProps, Slider } from '../src';

export default {
  title: 'Components/Forms/Sliders/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "`import { Sliders } from '@julo-ui/sliders';`",
      },
    },
  },
} as Meta<typeof Slider>;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const SliderDefault = Template.bind({});
