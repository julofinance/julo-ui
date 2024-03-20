import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from '../src';
import { Button, Typography } from '@julo-ui/react';
import docs from './Tooltip.md';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
} as Meta<typeof Tooltip>;

const Basic: Story<TooltipProps> = (args) => (
  <>
    <Button data-tooltip-id='my-tooltip' data-tooltip-content='Tooltip'>
      Button
    </Button>

    <Tooltip {...args} id='my-tooltip' />
  </>
);

const AnchorSelectTemplate: Story<TooltipProps> = (args) => (
  <>
    <Button id='anchor-element-id'>Button</Button>
    <Tooltip
      {...args}
      anchorSelect='#anchor-element-id'
      content='Hello world!'
    />
  </>
);

const ChildrenTemplate: Story<TooltipProps> = (args) => (
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

const ClickableTemplate: Story<TooltipProps> = (args) => (
  <>
    <Button id='anchor-element-id'>Button</Button>
    <Tooltip clickable {...args} anchorSelect='#anchor-element-id'>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Typography color='#616161' type='body' size='small'>
          1/2
        </Typography>
        <div style={{ display: 'flex' }}>
          <Button
            style={{ marginRight: '5px' }}
            variant='tertiary'
            inverted
            size='small'
          >
            Lewati
          </Button>
          <Button size='small'>Lanjut</Button>
        </div>
      </div>
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
export const Clickable = ClickableTemplate.bind({});
