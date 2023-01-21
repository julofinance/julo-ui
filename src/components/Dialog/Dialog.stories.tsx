import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Dialog from './Dialog';
import { PR20, NT80 } from '@julofinance/color-token';

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

const descriptionText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed neque, at in pellentesque suscipit ac viverra quam. Nam tortor mauris quisque lacus, urna fermentum pretium sem.';

export const Small: ComponentStory<typeof Dialog> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <>
      <button onClick={() => updateArgs({ ...args, show: true })}>
        Press me
      </button>

      <Dialog {...args} onClose={() => updateArgs({ ...args, show: false })}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '328px',
          }}
        >
          <img src={require('./assets/placeholder.svg')} />
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              fontFamily: 'Nunito',
              color: PR20,
              margin: 0,
              marginTop: '16px'
            }}
          >
            Title
          </p>
          <p 
           style={{
            fontSize: '14px',
            fontFamily: 'Nunito',
            color: NT80,
            lineHeight: '22px',
            textAlign: 'center',
            margin: 0,
            marginTop: '8px'
          }}
          >
          {descriptionText}
          </p>
        </div>
      </Dialog>
    </>
  );
};
