import { Story, Meta } from '@storybook/react';

import PinInput, { PinInputProps } from '../src';

export default {
  title: 'Components/PinInput',
  component: PinInput,
  parameters: {
    docs: {
      description: {
        component: "`import { PinInput } from '@julo-ui/pin-input';`",
      },
    },
  },
} as Meta<typeof PinInput>;

const Template: Story<PinInputProps> = (args) => <PinInput {...args} />;

export const PinInputTest = Template.bind({});
