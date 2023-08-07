import { Story, Meta } from '@storybook/react';

import Checkbox, { CheckboxProps } from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "`import { Checkbox } from '@julo-ui/checkbox';`",
      },
    },
  },
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const CheckboxTest = Template.bind({});
