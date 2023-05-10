import { Meta, Story } from '@storybook/react';

import Heading from '../src/components/Heading';
import Typography, { HeadingProps } from '../src';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: "`import { Typography } from '@julo-ui/typography';`",
      },
    },
  },
  argTypes: {},
};

export default meta;

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
