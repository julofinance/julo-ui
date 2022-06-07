import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LineShimmer from './LineShimmer';

export default {
  title: 'Components/Shimmer',
  component: LineShimmer,
  parameters: {
    docs: {
      description: {
        component:
          "`import { LineShimmer } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof LineShimmer>;

const Template: ComponentStory<typeof LineShimmer> = (args) => (
  <LineShimmer {...args} />
);

export const Line = Template.bind({});
Line.args = {
  width: '100%',
  height: '100px',
  margin: '0',
  borderRadius: '4px',
};
