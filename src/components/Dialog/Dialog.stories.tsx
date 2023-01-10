import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: "`import { Dialog } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

export const Basic: ComponentStory<typeof Dialog> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <>
      <button onClick={() => updateArgs({ ...args, show: true })}>
        Press me
      </button>

      <Dialog {...args} onClose={() => updateArgs({ ...args, show: false })}>
        <div>this is a dialog</div>
      </Dialog>
    </>
  );
};
