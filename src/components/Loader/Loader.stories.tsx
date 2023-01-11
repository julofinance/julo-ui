import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: "`import { Loader } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  dark: false,
  size: '50px'
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true
};

export const Light = Template.bind({});
Light.args = {
  dark: false
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '50px',
  dark: false
};
