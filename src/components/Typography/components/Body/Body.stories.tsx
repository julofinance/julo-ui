import { Story, Meta } from '@storybook/react';

import Body from './Body';
import { BodyProps } from '../../types';
import Typography from '../../Typography';

export default {
  title: 'Components/Typography',
  component: Body,
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
} as Meta<typeof Body>;

const text = 'Hello World!';

const Template: Story<Omit<BodyProps, 'type'>> = (args) => (
  <Typography type='body' {...args} />
);

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  children: text,
  size: 'regular',
  bold: false,
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  children: text,
  size: 'small',
  bold: false,
};

export const BodyAsChild = Template.bind({});
BodyAsChild.args = {
  children: <p>{text}</p>,
  asChild: true,
};
