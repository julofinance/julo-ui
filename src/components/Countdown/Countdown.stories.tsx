import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Countdown from './Countdown';

export default {
  title: 'Components/Countdown',
  component: Countdown,
  parameters: {
    docs: {
      description: {
        component:
          "`import { Countdown } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Countdown>;

const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: 2000
};
