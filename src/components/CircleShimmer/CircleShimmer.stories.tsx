import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CircleShimmer from './CircleShimmer'

export default {
  title: 'Components/Shimmer',
  component: CircleShimmer,
} as ComponentMeta<typeof CircleShimmer>

const Template: ComponentStory<typeof CircleShimmer> = (args) => (
  <CircleShimmer {...args} />
)

export const Circle = Template.bind({})
Circle.args = {
  size: '100px',
  margin: '0',
}
