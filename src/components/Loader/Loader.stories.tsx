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
  theme: 'Dark',
  size: '156px'
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'Dark'
};

export const Light = Template.bind({});
Light.args = {
  theme: 'Light'
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '156px',
  theme: 'Dark'
};
