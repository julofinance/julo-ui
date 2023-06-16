import { useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { julo } from '@julo-ui/system';

import Input, {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '../src';
import { Button } from '@julo-ui/react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "`import { Input } from '@julo-ui/input';`",
      },
    },
  },
} as Meta<typeof Input>;

export const InputDefault = () => <Input placeholder='Default' />;

export const InputIsInvalid = () => <Input placeholder='Invalid' isInvalid />;

export const InputDisabled = () => (
  <>
    <Input style={{ marginBottom: '10px' }} placeholder='Empty' disabled />
    <Input value='Filled' disabled />
  </>
);

export const InputWithNativeSize = () => <Input htmlSize={10} />;

export const InputWithElement = () => (
  <InputGroup>
    <InputLeftElement>$</InputLeftElement>
    <Input placeholder='Enter Amount' />
    <InputRightElement>tes</InputRightElement>
  </InputGroup>
);

export const InputInvalidWithElement = () => (
  <InputGroup>
    <InputLeftElement>$</InputLeftElement>
    <Input isInvalid placeholder='Enter Amount' />
    <InputRightElement>tes</InputRightElement>
  </InputGroup>
);

export const InputDisabledWithElement = () => (
  <InputGroup>
    <InputLeftElement>$</InputLeftElement>
    <Input disabled placeholder='Enter Amount' />
    <InputRightElement>tes</InputRightElement>
  </InputGroup>
);

export const InputWithAddon = () => (
  <InputGroup>
    <InputLeftAddon>https://</InputLeftAddon>
    <Input placeholder='Enter Amount' />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
);

export const InputInvalidWithAddon = () => (
  <InputGroup>
    <InputLeftAddon>https://</InputLeftAddon>
    <Input isInvalid placeholder='Enter Amount' />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
);

export const InputDisabledWithAddon = () => (
  <InputGroup>
    <InputLeftAddon>https://</InputLeftAddon>
    <Input disabled placeholder='Enter Amount' />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
);

const style = {
  wrapper: css`
    .julo-input-group:not(:last-of-type) {
      margin-bottom: 0.625rem;
    }
  `,
  group2: css`
    --element-size: 4.375rem;

    .julo-input-element {
      &[data-element-placement='left'] {
        width: var(--element-size);
      }
    }

    .julo-input {
      padding-left: var(--element-size);
    }
  `,
};

export const InputWithElementAddon = () => (
  <julo.div css={style.wrapper}>
    <InputGroup>
      <InputLeftAddon>https://</InputLeftAddon>
      <Input placeholder='Enter Amount' />
      <InputRightElement>.com</InputRightElement>
    </InputGroup>
    <InputGroup css={style.group2}>
      <InputLeftElement>https://</InputLeftElement>
      <Input placeholder='Enter Amount' />
      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>
  </julo.div>
);

export const PasswordInput = () => {
  const [show, setShow] = useState(false);
  return (
    <InputGroup>
      <Input
        style={{ paddingTop: '5px', paddingBottom: '5px' }}
        type={show ? 'text' : 'password'}
      />
      <InputRightElement
        style={{ paddingTop: '5px', paddingBottom: '5px', paddingRight: '5px' }}
      >
        <Button size='small' onClick={() => setShow((prev) => !prev)}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
