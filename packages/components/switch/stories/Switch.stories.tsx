import { Story, Meta } from '@storybook/react';

import Switch, { SwitchProps } from '../src';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "`import { Switch } from '@julo-ui/switch';`",
      },
    },
  },
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const SwitchTest = Template.bind({});
