import { Story, Meta } from '@storybook/react';

import Test, { TestProps } from '../src';

export default {
  title: 'Components/Test',
  component: Test,
  parameters: {
    docs: {
      description: {
        component: "`import { Test } from '@julo-ui/test';`",
      },
    },
  },
} as Meta<typeof Test>;

const Template: Story<TestProps> = (args) => <Test {...args} />;

export const TestTest = Template.bind({});
