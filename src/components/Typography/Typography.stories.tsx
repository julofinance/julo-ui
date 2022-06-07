import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component:
          "`import { Typography } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: 'Hello World!',
  tag: 1,
  bold: true,
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  children: 'Hello World!',
  tag: 2,
  bold: true,
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: 'Hello World!',
  body: 1,
  bold: false,
};

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {
  children: 'Hello World!',
  body: 2,
  bold: false,
};

export const HeadingReguler = Template.bind({});
HeadingReguler.args = {
  children: 'Hello World!',
  caption: 1,
  bold: false,
};

export const HeadingSmall = Template.bind({});
HeadingSmall.args = {
  children: 'Hello World!',
  caption: 2,
  bold: false,
};
