import { Story, Meta } from '@storybook/react';
import { julo } from '@julo-ui/system';

import Caption from '../src/components/Caption';
import Typography, { CaptionProps, RawBaseTypographyProps } from '../src';

export default {
  title: 'Components/Typography',
  component: Caption,
  parameters: {
    docs: {
      description: {
        component: "`import { Typography } from '@julo-ui/typography';`",
      },
    },
  },
  argTypes: {
    type: {
      table: { disable: true },
    },
  },
} as Meta<typeof Caption>;

const Template: Story<Omit<CaptionProps, 'type'>> = (args) => (
  <Typography type='body' {...args} />
);

const text = 'Hello World!';

export const CaptionRegular = Template.bind({});
CaptionRegular.args = {
  children: text,
  bold: false,
};

export const CaptionSmall = Template.bind({});
CaptionSmall.args = {
  size: 'small',
  children: text,
  bold: false,
};

export const CaptionAsChild = Template.bind({});
CaptionAsChild.args = {
  children: <julo.strong>{text}</julo.strong>,
  asChild: true,
} as CaptionProps & RawBaseTypographyProps;
