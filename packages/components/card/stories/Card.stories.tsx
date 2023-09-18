import { Story, Meta } from '@storybook/react';
import { css } from '@emotion/react';

import DefaultCard, {
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from '../src';
import { julo } from '@julo-ui/system';
import { Button, Typography } from '@julo-ui/react';

export default {
  title: 'Components/Card',
  component: DefaultCard,
  parameters: {
    docs: {
      description: {
        component: "`import { Card } from '@julo-ui/card';`",
      },
    },
  },
} as Meta<typeof DefaultCard>;

const Card: Story<CardProps> = (args) => <DefaultCard {...args} />;

export const CardDefault = Card.bind({});
CardDefault.args = {
  variant: 'default',
  children: (
    <>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </>
  ),
};

export const CardBorder = Card.bind({});
CardBorder.args = {
  variant: 'border',
  children: (
    <>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </>
  ),
};

export const CardFilled = Card.bind({});
CardFilled.args = {
  variant: 'filled',
  children: (
    <>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </>
  ),
};

const style = {
  title: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  footer: css`
    align-items: center;
    gap: 12px;
  `,
};

export const CardCustom = Card.bind({});
CardCustom.args = {
  variant: 'default',
  sx: {
    width: '328px',
  },
  children: (
    <>
      <CardHeader>
        <julo.img src={'https://i.ibb.co/tQrr8YT/Juara.png'} width='100%' />
        <julo.div css={style.title}>
          <julo.img
            src={'https://i.ibb.co/KFqVCfT/Aman-pakai-JULO.png'}
            width='32px'
            height='32px'
          />
          <Typography
            type='body'
            fontWeight={700}
            fontSize='16px'
            lineHeight='24px'
          >
            Card title text maximum length 2 lines
          </Typography>
        </julo.div>
      </CardHeader>
      <CardBody>
        <Typography
          type='body'
          size='small'
          fontWeight={400}
          fontSize='14px'
          lineHeight='22px'
        >
          To use Body Text, please enter the text of the card contents. maximum
          length of 3 lines.
        </Typography>
      </CardBody>
      <CardFooter css={style.footer}>
        <Button block variant='secondary' size='small'>
          Action 2
        </Button>
        <Button block size='small'>
          Action 1
        </Button>
      </CardFooter>
    </>
  ),
};
