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
} as Meta<typeof Tooltip>;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip placement='bottom' label='testing' {...args}>
    <button> testing aja nih bos hehe </button>
  </Tooltip>
);

const Template2: Story<TooltipProps> = (args) => (
  <div
    style={{
      position: 'fixed',
      background: 'red',
      height: '100px',
      width: '200px',
    }}
  >
    <Tooltip open placement='right' label='testing' {...args}>
      testing aja nih bos hehe
    </Tooltip>
  </div>
);

const Template3: Story<TooltipProps> = (args) => (
  <Tooltip open placement='bottom-end' label='testing' {...args}>
    <julo.div> testing aja nih bos hehe </julo.div>
  </Tooltip>
);
export const TooltipTest = Template.bind({});
export const TooltipTest2 = Template2.bind({});
export const TooltipTest3 = Template3.bind({});
