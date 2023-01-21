import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "`import { Button } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button Text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  children: 'Button Text',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  inverted: true,
  children: 'Button Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button Text',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  color: 'secondary',
  disabled: true,
  children: 'Button Text',
};

export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  color: 'secondary',
  inverted: true,
  children: 'Button Text',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  children: 'Button Text',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  color: 'tertiary',
  disabled: true,
  children: 'Button Text',
};

export const TertiaryInverted = Template.bind({});
TertiaryInverted.args = {
  color: 'tertiary',
  inverted: true,
  children: 'Button Text',
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  children: 'Button Text',
};

export const WithSymbol = Template.bind({});
WithSymbol.args = {
  children: '+',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  width: '200px',
};
