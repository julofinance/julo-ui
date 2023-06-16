import { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  TextArea,
} from '@julo-ui/react';

import DefaultFormControl, {
  FormLabel,
  FormHelperText,
  FormControlProps,
  FormErrorMessage,
  FormInfoGroup,
} from '../src';

export default {
  title: 'Components/Forms/FormControl',
  component: DefaultFormControl,
  parameters: {
    docs: {
      description: {
        component: "`import { FormControl } from '@julo-ui/form-control';`",
      },
    },
  },
  argTypes: {
    children: {
      table: { disabled: true },
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    isRequired: {
      control: 'boolean',
      defaultValue: false,
    },
    isInvalid: {
      control: 'boolean',
      defaultValue: false,
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: false,
    },
    isReadOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<typeof DefaultFormControl>;

const FormControl: Story<FormControlProps> = (args) => (
  <DefaultFormControl {...args} />
);

export const FormControlDefault = FormControl.bind({});

FormControlDefault.args = {
  children: (
    <>
      <FormLabel>First Name</FormLabel>
      <Input />
      <FormHelperText>Helper Text</FormHelperText>
      <FormErrorMessage>Your First Name is invalid</FormErrorMessage>
    </>
  ),
};

export const FormControlWithInputGroup = FormControl.bind({});
FormControlWithInputGroup.args = {
  children: (
    <>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement>✉️</InputLeftElement>
        <Input placeholder='your-email@example.com' />
        <InputRightAddon>✅</InputRightAddon>
      </InputGroup>
      <FormHelperText>Helper Text</FormHelperText>
      <FormErrorMessage>Your Email is invalid</FormErrorMessage>
    </>
  ),
};

export const FormControlTextArea = FormControl.bind({});

FormControlTextArea.args = {
  children: (
    <>
      <FormLabel>First Name</FormLabel>
      <TextArea />
      <FormHelperText>Helper Text</FormHelperText>
      <FormErrorMessage>Your First Name is invalid</FormErrorMessage>
    </>
  ),
};

export const FormControlInvalid = () => (
  <FormControl isInvalid isRequired>
    <FormLabel>First Name</FormLabel>
    <Input />
    <FormHelperText>Helper Text</FormHelperText>
    <FormErrorMessage>Your First Name is invalid</FormErrorMessage>
  </FormControl>
);

export const FormControlWithCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <FormControl isRequired>
      <FormLabel>First Name</FormLabel>
      <Input onChange={(e) => setCounter(e.target.value.length)} />
      <FormInfoGroup
        showCounter
        maxTextLength={100}
        currentTextLength={counter}
      >
        <FormHelperText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </FormHelperText>
        <FormErrorMessage>Your First Name is invalid</FormErrorMessage>
      </FormInfoGroup>
    </FormControl>
  );
};

export const FormControlInvalidWithCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <FormControl isRequired isInvalid>
      <FormLabel>First Name</FormLabel>
      <Input onChange={(e) => setCounter(e.target.value.length)} />
      <FormInfoGroup
        showCounter
        maxTextLength={100}
        currentTextLength={counter}
      >
        <FormHelperText>Helper Text</FormHelperText>
        <FormErrorMessage>Your First Name is invalid</FormErrorMessage>
      </FormInfoGroup>
    </FormControl>
  );
};

export const FormLabelStandalone = () => (
  <FormLabel>FormLabel: I'm alone</FormLabel>
);
