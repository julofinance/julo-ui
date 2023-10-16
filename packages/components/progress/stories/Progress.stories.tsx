import { Story, Meta } from '@storybook/react';

import { Progress, ProgressProps } from '../src';

export default {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "`import { Progress } from '@julo-ui/progress';`",
      },
    },
  },
} as Meta<typeof Progress>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Linear = Template.bind({});
Linear.argTypes = {
  value: {
    control: 'number',
    defaultValue: 80,
  },
  height: {
    control: 'text',
  },
  isIndeterminate: { control: 'boolean', defaultValue: false },

  min: {
    control: 'number',
    defaultValue: 0,
  },
  max: {
    control: 'number',
    defaultValue: 100,
  },
  hasStripe: {
    control: 'boolean',
    defaultValue: false,
  },
  borderRadius: {
    control: 'text',
    defaultValue: undefined,
  },
  isAnimated: {
    control: 'boolean',
    defaultValue: false,
  },
  trackColor: {
    control: 'color',
  },
  color: {
    control: 'color',
  },
};

export const LinearIndeterminate = () => <Progress isIndeterminate />;
