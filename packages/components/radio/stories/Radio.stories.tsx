import { Story, Meta } from '@storybook/react';

import Radio, { RadioProps } from '../src';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "`import { Radio } from '@julo-ui/radio';`",
      },
    },
  },
} as Meta<typeof Radio>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const RadioTest = Template.bind({});
