import { Story, Meta } from '@storybook/react';

import Pin, { PinProps } from '../src';

export default {
  title: 'Pluggables/Pin',
  component: Pin,
  parameters: {
    docs: {
      description: {
        component: "`import { Pin } from '@julo-ui/pin';`",
      },
    },
  },
} as Meta<typeof Pin>;

const Template: Story<PinProps> = (args) => (
  <Pin allowPhysicalKeyboard {...args} />
);

export const PinTest = Template.bind({});
