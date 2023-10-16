import { Story, Meta } from '@storybook/react';

import { CircularProgress, CircularProgressProps } from '../src';

export default {
  title: 'Components/Progress',
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component: "`import {  CircularProgress } from '@julo-ui/progress';`",
      },
    },
  },
} as Meta<typeof CircularProgress>;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const Circular = Template.bind({});
Circular.argTypes = {
  children: {
    table: { disabled: true },
  },
  variant: {
    control: 'radio',
    options: ['primary', 'secondary'],
    defaultValue: 'primary',
  },
  isIndeterminate: {
    control: 'boolean',
    defaultValue: false,
  },
  value: {
    control: 'number',
    defaultValue: 80,
  },
  max: {
    control: 'number',
    defaultValue: 100,
  },
  capIsRound: {
    control: 'boolean',
    defaultValue: false,
  },
  thickness: {
    control: 'number',
    defaultValue: 10,
  },
  valueText: {
    control: 'text',
    defaultValue: '',
  },
  size: {
    control: 'number',
    defaultValue: undefined,
  },
  color: {
    control: 'color',
  },
  trackColor: {
    control: 'color',
  },
};

export const CircularIndeterminate = () => <CircularProgress isIndeterminate />;
