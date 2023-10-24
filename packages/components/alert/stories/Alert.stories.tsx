import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from '../src';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "`import { Alert } from '@julo-ui/alert';`",
      },
    },
  },
} as Meta<typeof Alert>;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const AlertTest = Template.bind({});
