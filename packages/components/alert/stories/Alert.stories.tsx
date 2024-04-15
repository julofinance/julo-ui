import { Story, Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { julo } from '@julo-ui/system';
import { Typography } from '@julo-ui/typography';

import DefaultAlert, {
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from '../src';

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
      <AlertIcon placement='left' />
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
      <AlertIcon placement='left' />
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
      <AlertIcon placement='left' />
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
      <AlertIcon placement='left' />
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
      <AlertIcon placement='left' />
      <div>
        <AlertTitle>Hello User</AlertTitle>
        <AlertDescription>
          Julo never ask your NIK and Password
        </AlertDescription>
      </div>
    </Alert>
  );
};

export const AlertWithIconPlacement = () => {
  return (
    <Alert status='warning'>
      <AlertIcon placement='left' />
      <julo.div sx={{ width: '100%', flex: '1' }}>
        <AlertTitle>Hello User</AlertTitle>
        <AlertDescription>Seems your bill is due, pay it now</AlertDescription>
      </julo.div>
      <AlertIcon placement='right' />
    </Alert>
  );
};

export const AlertCustom = () => {
  const styleCustom = css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;

    svg {
      width: 50px;
      height: 50px;
    }

    .julo-alert__description {
      text-align: center;
    }
  `;

  return (
    <Alert status='positive' css={styleCustom}>
      <AlertIcon placement={null} />
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
