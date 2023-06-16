import { Meta } from '@storybook/react';
import { julo } from '@julo-ui/system';

import Body from '../src/components/Body';
import Typography from '../src';

export default {
  title: 'Components/Typography',
  component: Body,
  parameters: {
    docs: {
      description: {
        component: "`import { Typography } from '@julo-ui/typography';`",
      },
    },
  },
  argTypes: {
    type: {
      table: { disable: true },
    },
  },
} as Meta<typeof Body>;

const text = 'Hello World!';

export const BodyRegular = () => <Typography type='body'>{text}</Typography>;

export const BodySmall = () => (
  <Typography type='body' size='small'>
    {text}
  </Typography>
);

export const BodyAsChild = () => (
  <Typography type='body' asChild bold>
    {<julo.h1>{text}</julo.h1>}
  </Typography>
);
