import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipControllerProps } from '../src';
import { Button, Typography } from '@julo-ui/react';

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

const Basic: Story<TooltipControllerProps> = (args) => (
  <>
    <Button data-tooltip-id='my-tooltip' data-tooltip-content='Tooltip'>
      Button
    </Button>
    <Tooltip {...args} id='my-tooltip' />
  </>
);

const AnchorSelectTemplate: Story<TooltipControllerProps> = (args) => (
  <>
    <Button id='anchor-element-id'>Button</Button>
    <Tooltip
      {...args}
      anchorSelect='#anchor-element-id'
      content='Hello world!'
    />
  </>
);

const ChildrenTemplate: Story<TooltipControllerProps> = (args) => (
  <>
    <Button id='anchor-element-id'>Button</Button>
    <Tooltip {...args} anchorSelect='#anchor-element-id'>
      <Typography bold type='body'>
        Titles
      </Typography>
      <Typography type='body' size='small'>
        Please enter description for the tooltip.
      </Typography>
      <Typography type='body' size='small'>
        The maximum length is 3 lines.
      </Typography>
      <Typography type='body' size='small'>
        Arrow can be adjusted position
      </Typography>
    </Tooltip>
  </>
);

export const TooltipBasic = Basic.bind({});
TooltipBasic.argTypes = {
  place: {
    control: 'select',
    options: [
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
    ],
  },
  clickable: {
    control: 'boolean',
    defaultValue: false,
  },
  noArrow: {
    control: 'boolean',
    defaultValue: false,
  },
  openOnClick: {
    control: 'boolean',
    defaultValue: false,
  },
};

export const AnchorSelect = AnchorSelectTemplate.bind({});
export const Children = ChildrenTemplate.bind({});
