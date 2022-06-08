import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "`import { Avatar } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '70px',
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Medium = Template.bind({});
Medium.args = {
  medium: true,
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  large: true,
  src: 'https://i.ibb.co/fSj7yVC/pngaaa-com-1208049.png',
};
