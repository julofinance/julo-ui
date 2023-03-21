import { css } from '@emotion/css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Dialog from './Dialog';
import { PR30, NT80 } from '@julofinance/color-token';
import Typography from '../Typography';
import Button from '../Button';

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

const titleCss = css`
  margin-top: 16px !important;
  margin-bottom: 8px !important;
`;

const descCss = css`
  text-align: center !important;
  margin-bottom: 16px !important;
`;

const descriptionText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed neque, at in pellentesque suscipit ac viverra quam. Nam tortor mauris quisque lacus, urna fermentum pretium sem.';

export const Small: ComponentStory<typeof Dialog> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <>
      <Button onClick={() => updateArgs({ ...args, show: true })}>
        Press me
      </Button>

      <Dialog {...args} onClose={() => updateArgs({ ...args, show: false })}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '328px',
          }}
        >
          <img
            style={{ marginTop: '10px' }}
            src={require('./assets/placeholder.svg')}
          />
          <Typography type='body' className={titleCss} bold color={PR30}>
            Title
          </Typography>
          <Typography className={descCss} color={NT80} type='body' size='small'>
            {descriptionText}
          </Typography>
          <Button block>Action 1</Button>
        </div>
      </Dialog>
    </>
  );
};

export const Medium: ComponentStory<typeof Dialog> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <>
      <Button onClick={() => updateArgs({ ...args, show: true })}>
        Press me
      </Button>

      <Dialog {...args} onClose={() => updateArgs({ ...args, show: false })}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '552px',
          }}
        >
          <img
            style={{ marginTop: '10px' }}
            src={require('./assets/placeholder.svg')}
          />
          <Typography type='body' className={titleCss} bold color={PR30}>
            Title
          </Typography>
          <Typography className={descCss} color={NT80} type='body' size='small'>
            {descriptionText}
          </Typography>
          <Button block>Action 1</Button>
        </div>
      </Dialog>
    </>
  );
};

export const Large: ComponentStory<typeof Dialog> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <>
      <Button onClick={() => updateArgs({ ...args, show: true })}>
        Press me
      </Button>

      <Dialog {...args} onClose={() => updateArgs({ ...args, show: false })}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '936px',
            padding: '16px 56px',
          }}
        >
          <img src={require('./assets/placeholder.svg')} />
          <Typography type='body' className={titleCss} bold color={PR30}>
            Title
          </Typography>
          <Typography className={descCss} color={NT80} type='body' size='small'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus at
            sagittis, dictum ac lacinia. Sit amet, porta non orci. Erat diam
            fames pretium leo. Lacus donec elementum vulputate nisl quis. Non
            massa amet mauris, feugiat ipsum scelerisque lacus nec. Diam neque
            tincidunt consectetur fringilla sed. Posuere sem urna dictum cras
            sem lectus massa.
          </Typography>
          <Button block>Action 1</Button>
        </div>
      </Dialog>
    </>
  );
};
