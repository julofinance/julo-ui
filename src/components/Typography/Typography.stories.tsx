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

const text = 'Hello World!';

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: text,
  display: 1,
  bold: true,
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  children: text,
  display: 2,
  bold: true,
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: text,
  display: 3,
  bold: true,
};

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {
  children: text,
  heading: 1,
  bold: false,
};

export const HeadingReguler = Template.bind({});
HeadingReguler.args = {
  children: text,
  heading: 2,
  bold: false,
};

export const HeadingSmall = Template.bind({});
HeadingSmall.args = {
  children: text,
  heading: 2,
  bold: false,
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  children: text,
  body: 1,
  bold: false,
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  children: text,
  body: 2,
  bold: false,
};

export const CaptionLarge = Template.bind({});
CaptionLarge.args = {
  children: text,
  caption: 1,
  bold: false,
};

export const CaptionSmall = Template.bind({});
CaptionSmall.args = {
  children: text,
  caption: 2,
  bold: false,
};
