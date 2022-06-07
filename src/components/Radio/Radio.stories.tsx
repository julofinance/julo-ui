import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "`import { Radio } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '30px',
};

export const Checked = Template.bind({});
Checked.args = {
  size: '30px',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: '30px',
  disabled: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  size: '30px',
  checked: true,
  disabled: true,
};
