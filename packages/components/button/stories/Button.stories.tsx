import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "`import { Button } from '@julofinance/react-components';`",
      },
    },
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button Text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  children: 'Button Text',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  inverted: true,
  children: 'Button Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button Text',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
  children: 'Button Text',
};

export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  variant: 'secondary',
  inverted: true,
  children: 'Button Text',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button Text',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  disabled: true,
  children: 'Button Text',
};

export const TertiaryInverted = Template.bind({});
TertiaryInverted.args = {
  variant: 'tertiary',
  inverted: true,
  children: 'Button Text',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'primary',
  children: (
    <svg
      width='9'
      height='11'
      viewBox='0 0 9 11'
      xmlns='http://www.w3.org/2000/svg'
      fill='white'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.899902 1.89995C0.899902 1.58169 1.02633 1.27647 1.25137 1.05142C1.47642 0.826379 1.78164 0.699951 2.0999 0.699951H4.8515C5.16974 0.700019 5.47491 0.826492 5.6999 1.05155L7.7483 3.09995C7.97336 3.32494 8.09983 3.63012 8.0999 3.94835V9.09995C8.0999 9.41821 7.97347 9.72344 7.74843 9.94848C7.52339 10.1735 7.21816 10.3 6.8999 10.3H2.0999C1.78164 10.3 1.47642 10.1735 1.25137 9.94848C1.02633 9.72344 0.899902 9.41821 0.899902 9.09995V1.89995ZM2.0999 5.49995C2.0999 5.34082 2.16312 5.18821 2.27564 5.07569C2.38816 4.96317 2.54077 4.89995 2.6999 4.89995H6.2999C6.45903 4.89995 6.61164 4.96317 6.72417 5.07569C6.83669 5.18821 6.8999 5.34082 6.8999 5.49995C6.8999 5.65908 6.83669 5.81169 6.72417 5.92422C6.61164 6.03674 6.45903 6.09995 6.2999 6.09995H2.6999C2.54077 6.09995 2.38816 6.03674 2.27564 5.92422C2.16312 5.81169 2.0999 5.65908 2.0999 5.49995ZM2.6999 7.29995C2.54077 7.29995 2.38816 7.36317 2.27564 7.47569C2.16312 7.58821 2.0999 7.74082 2.0999 7.89995C2.0999 8.05908 2.16312 8.21169 2.27564 8.32422C2.38816 8.43674 2.54077 8.49995 2.6999 8.49995H6.2999C6.45903 8.49995 6.61164 8.43674 6.72417 8.32422C6.83669 8.21169 6.8999 8.05908 6.8999 7.89995C6.8999 7.74082 6.83669 7.58821 6.72417 7.47569C6.61164 7.36317 6.45903 7.29995 6.2999 7.29995H2.6999Z'
      />
    </svg>
  ),
};
