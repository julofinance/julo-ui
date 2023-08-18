import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from '../src';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "`import { Card } from '@julo-ui/card';`",
      },
    },
  },
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardTest = Template.bind({});
