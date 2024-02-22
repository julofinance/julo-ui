import { HTMLJuloProps, julo } from '@julo-ui/system';
import { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import OtpInput, {
  OtpInputField,
  OtpInputProps,
  OtpInputProvider,
  useOtpInput,
  useOtpInputField,
} from '../src';

export default {
  title: 'Components/Forms/OtpInput',
  component: OtpInput,
  parameters: {
    docs: {
      description: {
        component: "`import { OtpInput } from '@julo-ui/otp-input';`",
      },
    },
  },
} as Meta<typeof OtpInput>;

const Template: Story<OtpInputProps> = (args) => <OtpInput {...args} />;

export const OtpInputDefault = () => (
  <OtpInput>
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
  </OtpInput>
);

export const OtpInputPlaceholder = () => (
  <OtpInput placeholder='🥳'>
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
  </OtpInput>
);

export const OtpInputInvalid = () => (
  <OtpInput isInvalid>
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
  </OtpInput>
);

export const OtpInputDisabled = () => (
  <OtpInput isDisabled>
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
  </OtpInput>
);

export const OtpInputType = Template.bind({});
OtpInputType.argTypes = {
  type: {
    control: 'radio',
    options: ['alphanumeric', 'number'],
    defaultValue: 'number',
  },
};
OtpInputType.args = {
  children: (
    <>
      <OtpInputField />
      <OtpInputField />
      <OtpInputField />
      <OtpInputField />
      <OtpInputField />
      <OtpInputField />
    </>
  ),
};

export const OtpInputOtpFalse = () => (
  <OtpInput otp={false}>
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
    <OtpInputField />
  </OtpInput>
);

export const OtpInputControlledValue = () => {
  const [value, setValue] = useState('');

  const clear = () => setValue('');

  return (
    <>
      <OtpInput value={value} onChange={setValue}>
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
      </OtpInput>
      <julo.button sx={{ marginTop: '10px' }} onClick={clear}>
        clear
      </julo.button>
    </>
  );
};

function Input(props: HTMLJuloProps<'input'>) {
  const inputProps = useOtpInputField(props);
  return <input {...inputProps} />;
}

export const OtpInputHook = () => {
  const context = useOtpInput({
    autoFocus: true,
    mask: true,
    onComplete: alert,
  });

  const style: React.CSSProperties = {
    width: 40,
    height: 40,
    textAlign: 'center',
    color: 'black',
    margin: 4,
  };

  return (
    <OtpInputProvider value={context}>
      <Input style={style} />
      <Input style={style} />
      <Input style={style} />
      <Input style={style} />
      <Input style={style} />
      <Input style={style} />
    </OtpInputProvider>
  );
};
