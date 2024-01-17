import { Story, Meta } from '@storybook/react';
import { css } from '@emotion/react';

import DefaultAlert, {
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from '../src';
import { Typography } from '@julo-ui/typography';

export default {
  title: 'Components/Alert',
  component: DefaultAlert,
  parameters: {
    docs: {
      description: {
        component: "`import { Alert } from '@julo-ui/alert';`",
      },
    },
  },
} as Meta<typeof Alert>;

const Alert: Story<AlertProps> = (args) => <DefaultAlert {...args} />;

export const Info = () => {
  return (
    <Alert status='info'>
      <AlertIcon />
      <div>
        <AlertTitle>Hello!</AlertTitle>
        <AlertDescription>
          To improve our services, system maintenance is carried out on the JULO
          website so that it cannot be accessed temporarily
        </AlertDescription>
      </div>
    </Alert>
  );
};

export const Negative = () => {
  return (
    <Alert status='negative'>
      <AlertIcon />
      <div>
        <AlertTitle>500 Internal Server Error</AlertTitle>
        <AlertDescription>
          Try to refresh this page or feel free to contact us if the problem
          persist.
        </AlertDescription>
      </div>
    </Alert>
  );
};

export const Positive = () => {
  return (
    <Alert status='positive'>
      <AlertIcon />
      <div>
        <AlertTitle>Application submitted!</AlertTitle>
        <AlertDescription>
          Thanks for submitting your application. We will review your
          application within the next 48 hours.
        </AlertDescription>
      </div>
    </Alert>
  );
};

export const Warning = () => {
  return (
    <Alert status='warning'>
      <AlertIcon />
      <div>
        <AlertTitle>Hello User</AlertTitle>
        <AlertDescription>Seems your bill is due, pay it now</AlertDescription>
      </div>
    </Alert>
  );
};

export const Neutrals = () => {
  return (
    <Alert status='neutrals'>
      <AlertIcon />
      <div>
        <AlertTitle>Hello User</AlertTitle>
        <AlertDescription>Julo never ask your NIK and Password</AlertDescription>
      </div>
    </Alert>
  );
};

const style = css`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  .julo-alert__icon {
    margin: 0px !important;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const AlertCustom = () => {
  return (
    <Alert status='positive' css={style}>
      <AlertIcon />
      <AlertTitle>
        <Typography bold type='body'>
          Application submitted!
        </Typography>
      </AlertTitle>
      <AlertDescription>
        Thanks for submitting your application. We will review your application
        within the next 48 hours.
      </AlertDescription>
    </Alert>
  );
};
