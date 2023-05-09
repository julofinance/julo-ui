import { Story, Meta } from '@storybook/react';

import Typography from '../../Typography';
import Heading from './Heading';
import { HeadingProps } from '../../types';

export default {
  title: 'Components/Typography',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          "`import { Typography } from '@julofinance/react-components';`",
      },
    },
  },
  argTypes: {
    type: {
      table: { disable: true },
    },
  },
} as Meta<typeof Heading>;

const text = 'Hello World!';

const Template: Story<Omit<HeadingProps, 'type'>> = (args) => (
  <Typography type='heading' {...args} />
);

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: text,
  headingType: 1,
  bold: true,
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  children: text,
  headingType: 2,
  bold: true,
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: text,
  headingType: 3,
  bold: true,
};

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {
  children: text,
  headingType: 4,
  bold: false,
};

export const HeadingReguler = Template.bind({});
HeadingReguler.args = {
  children: text,
  headingType: 5,
  bold: false,
};

export const HeadingSmall = Template.bind({});
HeadingSmall.args = {
  children: text,
  headingType: 6,
  bold: false,
};

export const HeadingAsChild = Template.bind({});
HeadingAsChild.args = {
  children: (
    <div>
      <span>{text}</span>
    </div>
  ),
  headingType: 1,
  asChild: true,
};
