import { Story, Meta } from '@storybook/react';

import TextArea, { TextAreaProps } from '../src';
import {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '@julo-ui/input';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: "`import { TextArea } from '@julo-ui/textarea';`",
      },
    },
  },
} as Meta<typeof TextArea>;

const Template: Story<TextAreaProps> = (args) => (
  <TextArea placeholder='Here is some sample placeholder' {...args} />
);

export const TextAreaDefault = Template.bind({});

export const TextAreaInvalid = () => (
  <TextArea isInvalid placeholder='Here is some sample placeholder' />
);

export const TextAreaDisabled = () => (
  <TextArea disabled placeholder='Here is some sample placeholder' />
);

export const TextAreaWithInputElement = () => (
  <InputGroup>
    <InputLeftElement>https://</InputLeftElement>
    <TextArea placeholder='Here is some sample placeholder' />
    <InputRightElement>.com</InputRightElement>
  </InputGroup>
);

export const TextAreaWithInputAddon = () => (
  <InputGroup>
    <InputLeftAddon>https://</InputLeftAddon>
    <TextArea placeholder='Here is some sample placeholder' />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
);
