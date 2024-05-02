import { Story, Meta } from '@storybook/react';
import { julo } from '@julo-ui/system';

import Tooltip, { TooltipProps } from '../src';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "`import { Tooltip } from '@julo-ui/tooltip';`",
      },
    },
  },
  decorators: [
    (story) => (
      <julo.div sx={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
        {story()}
      </julo.div>
    ),
  ],
} as Meta<typeof Tooltip>;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <button>Hover me</button>
  </Tooltip>
);

const WithIconTemplate: Story<TooltipProps> = (args) => (
  <Tooltip label='With Icon' {...args}>
    <button>
      <span role='img' aria-label='notification'>
        🔔
      </span>
      {'  '}
      <span>Hover me</span>
    </button>
  </Tooltip>
);

export const Basic = Template.bind({});
Basic.argTypes = {
  label: {
    control: 'text',
    defaultValue: 'This is tooltip',
  },
  closeDelay: {
    control: 'number',
  },
  closeOnClick: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
    defaultValue: false,
  },
  gutter: {
    control: 'number',
    defaultValue: 8,
  },
  open: {
    control: 'boolean',
  },
  defaultOpen: {
    control: 'boolean',
  },
  hasArrow: {
    control: 'boolean',
  },
  openDelay: {
    control: 'number',
  },
  placement: {
    control: 'radio',
    options: ['bottom', 'left', 'right', 'top'],
    defaultValue: 'bottom',
  },
};

export const WithIcon = WithIconTemplate.bind({});
