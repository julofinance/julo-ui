import { Story, Meta } from '@storybook/react';

import Typography from '../../Typography';
import Caption from './Caption';
import { CaptionProps } from '../../types';

export default {
  title: 'Components/Typography',
  component: Caption,
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
} as Meta<typeof Caption>;

const text = 'Hello World!';

const Template: Story<Omit<CaptionProps, 'type'>> = (args) => (
  <Typography type='caption' {...args} />
);

export const CaptionLarge = Template.bind({});
CaptionLarge.args = {
  children: text,
  bold: false,
};

export const CaptionSmall = Template.bind({});
CaptionSmall.args = {
  children: text,
  bold: false,
};

export const CaptionAsChild = Template.bind({});
CaptionAsChild.args = {
  children: <strong>{text}</strong>,
  asChild: true,
};
