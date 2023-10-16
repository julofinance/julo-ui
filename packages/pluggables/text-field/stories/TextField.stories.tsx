import { ChangeEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import TextField, { TextFieldProps } from '../src';

export default {
  title: 'Pluggables/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: "`import { TextField } from '@julo-ui/text-field';`",
      },
    },
  },
} as Meta<typeof TextField>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const TextFieldDefault = () => (
  <TextField
    name='fistname'
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
  />
);

export const TextFieldIsInvalid = () => (
  <TextField
    name='fistname'
    label='First Name'
    isRequired
    isInvalid
    helperText='This is a helper text'
    errorMessage='This is an error message'
  />
);

export const TextFieldWithCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <TextField
      name='fistname'
      label='First Name'
      isRequired
      helperText='This is a helper text'
      errorMessage='This is an error message'
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setCounter(e.target.value.length)
      }
      showCounter
      currentTextLength={counter}
      maxTextLength={10}
    />
  );
};

export const TextFieldIsLoading = Template.bind({});
TextFieldIsLoading.args = {
  name: 'fistname',
  label: 'First Name',
  isRequired: true,
  isInvalid: true,
  isLoading: true,
  helperText: 'This is a helper text',
  rightElement: '✅',
  errorMessage: 'This is an error message',
};

export const TextFieldIsLoadingHideIndicator = () => (
  <TextField
    name='fistname'
    label='First Name'
    isRequired
    isInvalid
    isLoading
    helperText='This is a helper text'
    hideLoadingIndicator
    rightElement='Tes'
    errorMessage='This is an error message'
  />
);

export const TextFieldMultiline = () => (
  <TextField
    name='fistname'
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
    multiline
  />
);

export const TextFieldMultilineWithCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <TextField
      name='fistname'
      label='First Name'
      isRequired
      multiline
      helperText='This is a helper text'
      errorMessage='This is an error message'
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setCounter(e.target.value.length)
      }
      showCounter
      currentTextLength={counter}
      maxTextLength={100}
    />
  );
};

export const TextFieldMultilineRows = () => (
  <TextField
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
    multiline
    rows={10}
  />
);

export const TextFieldMultilineWithAddon = () => (
  <TextField
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
    multiline
    leftAddon={<>✅</>}
    rightAddon={<>✅</>}
  />
);

export const TextFieldMultilineWithElement = () => (
  <TextField
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
    multiline
    leftElement={<>✅</>}
    rightElement={<>✅</>}
  />
);

export const TextFieldMultilineWithAddonElement = () => (
  <TextField
    label='First Name'
    isRequired
    helperText='This is a helper text'
    errorMessage='This is an error message'
    multiline
    leftAddon={<>✅</>}
    rightElement={<>✅</>}
  />
);
