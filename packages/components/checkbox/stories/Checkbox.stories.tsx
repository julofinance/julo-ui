import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, {
  CheckboxGroup,
  CheckboxProps,
  useCheckboxGroup,
} from '../src';
import FormControl, { FormLabel } from '@julo-ui/form-control';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "`import { Checkbox } from '@julo-ui/checkbox';`",
      },
    },
  },
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  children: 'Hello World',
};

export const CheckboxIndeterminate = () => (
  <Checkbox isIndeterminate>Indeterminate</Checkbox>
);

export const CheckboxDisabled = () => (
  <Checkbox isChecked isDisabled>
    Disabled
  </Checkbox>
);

export const CheckboxNotFocusable = () => (
  <>
    <Checkbox isFocusable={false}>not focusable</Checkbox>
    <Checkbox isFocusable={false} isDisabled>
      disabled and not focusable (truly disabled)
    </Checkbox>
    <Checkbox tabIndex={-1} isFocusable={false}>
      Not Focusable with provided tabIndex
    </Checkbox>
  </>
);

export const CheckboxControlled = () => {
  const [value, setValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return <Checkbox isChecked={value} onChange={handleChange} />;
};

export const CheckboxWithCheckboxGroup = () => {
  return (
    <CheckboxGroup
      orientation='vertical'
      defaultValue={['one', 'two']}
      // eslint-disable-next-line no-console
      onChange={(value) => console.log(value)}
    >
      <Checkbox value='one'>One</Checkbox>
      <Checkbox value='two'>Two</Checkbox>
      <Checkbox value='three'>Three</Checkbox>
    </CheckboxGroup>
  );
};

export const CheckboxWithControlledCheckboxGroup = () => {
  const [value, setValue] = useState<(string | number)[]>(['one', 'two']);
  return (
    <>
      <CheckboxGroup
        value={value}
        onChange={(value) => {
          // eslint-disable-next-line no-console
          console.log(value);
          setValue(value);
        }}
      >
        <Checkbox value='one'>One</Checkbox>
        <Checkbox value='two'>Two</Checkbox>
        <Checkbox value='three'>Three</Checkbox>
      </CheckboxGroup>
      <pre>{JSON.stringify(value)}</pre>
    </>
  );
};

export const CheckboxWithCustomCheckboxGroup = () => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [2],
  });
  return (
    <>
      <pre>{JSON.stringify(value.sort())}</pre>
      <Checkbox {...getCheckboxProps({ value: 1 })}>One</Checkbox>
      <Checkbox {...getCheckboxProps({ value: 2 })}>Two</Checkbox>
      <Checkbox {...getCheckboxProps({ value: 3 })}>Three</Checkbox>
    </>
  );
};

export const CheckboxWithCheckboxGroupAndFormControl = () => {
  return (
    <>
      <FormControl id='optIn'>
        <FormLabel>Opt-in Example</FormLabel>
        <CheckboxGroup orientation='vertical' defaultValue={['1', '3']}>
          <Checkbox value='1'>Opt-in 1</Checkbox>
          <Checkbox value='2'>Opt-in 2</Checkbox>
          <Checkbox value='3'>Opt-in 3</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl id='optInInvalid' isInvalid sx={{ marginTop: '10px' }}>
        <FormLabel>Invalid Opt-in Example</FormLabel>
        <CheckboxGroup orientation='vertical' defaultValue={['2', '3']}>
          <Checkbox value='1'>Invalid Opt-in 1</Checkbox>
          <Checkbox value='2'>Invalid Opt-in 2</Checkbox>
          <Checkbox value='3'>Invalid Opt-in 3</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl id='optInDisabled' isDisabled sx={{ marginTop: '10px' }}>
        <FormLabel>Disabled Opt-in Example</FormLabel>
        <CheckboxGroup orientation='vertical' defaultValue={['2', '3']}>
          <Checkbox value='1'>Disabled Opt-in 1</Checkbox>
          <Checkbox value='2'>Disabled Opt-in 2</Checkbox>
          <Checkbox value='3'>Disabled Opt-in 3</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  );
};
