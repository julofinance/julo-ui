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
  placeholder: 'Default',
  label: 'Label',
  name: 'input-component',
  helperText: 'Helper Text',
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  label: 'Label',
  value: 'Fill',
  inputProps: { disabled: true },
  helperText: 'Helper Text',
};

export const DisabledWithoutValue = Template.bind({});
DisabledWithoutValue.args = {
  label: 'Label',
  placeholder: 'Default',
  inputProps: { disabled: true },
  helperText: 'Helper Text',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  value: 'Error',
  errorMessage: 'Error Message',
  helperText: 'Helper Text',
};

export const WithAdornement = Template.bind({});
WithAdornement.args = {
  append: (
    <img
      style={{ padding: '12px', paddingLeft: 0, width: '16px', height: '16px' }}
      src={require('./assets/ic-id.svg')}
    />
  ),
  preAppend: (
    <img
      style={{
        padding: '12px',
        paddingRight: 0,
        width: '16px',
        height: '16px',
      }}
      src={require('./assets/ic-id.svg')}
    />
  ),
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: "Nomor Handphone",
  placeholder: "81234567890",
  preAppend: (
    <p
      style={{
        padding: '12px',
        margin: 0,
        paddingRight: 0,
        color: "#757575",
        fontSize: "14px",
        fontWeight: 700
      }}
    >+62</p>
  ),
};