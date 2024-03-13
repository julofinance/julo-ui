import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { julo } from '@julo-ui/system';

import Radio, {
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  useRadioGroup,
} from '../src';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "`import { Radio } from '@julo-ui/radio';`",
      },
    },
  },
} as Meta<typeof Radio>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

const TemplateRadioGroup: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio value='Option 1'>Option 1</Radio>
    <Radio value='Option 2'>Option 2</Radio>
    <Radio value='Option 3'>Option 3</Radio>
  </RadioGroup>
);

export const RadioDefault = Template.bind({});
RadioDefault.argTypes = {
  size: {
    defaultValue: '1rem',
    control: 'text',
  },
};

export const RadioWithRadioGroup = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <RadioGroup value={value} onChange={(value) => setValue(String(value))}>
        <Radio value='Option 1'>Option 1</Radio>
        <Radio value='Option 2'>Option 2</Radio>
        <Radio value='Option 3'>Option 3</Radio>
      </RadioGroup>
      <button onClick={() => setValue('')}>Clear</button>
      <pre>
        <code>{value}</code>
      </pre>
    </>
  );
};

export const RadioWithRadioGroupOrientationAndGap = TemplateRadioGroup.bind({});
RadioWithRadioGroupOrientationAndGap.argTypes = {
  orientation: {
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
};
RadioWithRadioGroupOrientationAndGap.args = {
  orientation: 'horizontal',
  gap: '1.25rem',
};

export const RadioWithCustomRadioGroup = () => {
  const { getRootProps, getRadioProps, focus } = useRadioGroup({
    isNative: true,
  });
  return (
    <div {...getRootProps()}>
      <button onClick={focus}>Focus</button>
      <label>
        <input
          type='radio'
          {...getRadioProps({ value: 'a', disabled: true })}
        />
        <span>a</span>
      </label>
      <label>
        <input type='radio' {...getRadioProps({ value: 'b' })} />
        <span>b</span>
      </label>
      <label>
        <input type='radio' {...getRadioProps({ value: 'c' })} />
        <span>c</span>
      </label>
    </div>
  );
};

export const RadioWithHook = () => {
  const options = ['react', 'vue', 'svelte'];

  const { getRadioProps, getRootProps } = useRadioGroup({
    name: 'test',
    defaultValue: 'vue',
    // eslint-disable-next-line no-console
    onChange: console.log,
  });

  return (
    <julo.div
      sx={{
        display: 'flex',
        '.julo-radio:not(:last-of-type)': {
          marginRight: '.625rem',
        },
      }}
      {...getRootProps()}
    >
      {options.map((value) => (
        <Radio key={value} {...getRadioProps({ value })}>
          {value}
        </Radio>
      ))}
    </julo.div>
  );
};

export function RadioWithDisabledRadioGroup() {
  return (
    <RadioGroup isDisabled>
      <Radio value='one'>One</Radio>
      <Radio value='two' isDisabled>
        Two
      </Radio>
      <Radio value='three' isDisabled={false}>
        Three
      </Radio>
    </RadioGroup>
  );
}
