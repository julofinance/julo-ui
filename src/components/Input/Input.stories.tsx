import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "`import { Input } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Please type your input',
  label: 'Input label',
  name: 'input-component'
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'This is disabled example',
  inputProps: { disabled: true },
};

export const Error = Template.bind({});
Error.args = {
  value: 'This is disabled example',
  errorMessage: 'Error example',
};

export const WithAdornement = Template.bind({});
WithAdornement.args = {
  rightAdornment: <img width={20} height={20} src={require('./assets/ic-location.svg')}/>,
  leftAdornment: <img width={20} height={20} src={require('./assets/ic-location.svg')}/>,
};
