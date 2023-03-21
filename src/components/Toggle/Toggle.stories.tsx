import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Toggle from './Toggle';
import Typography from '../Typography';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: "`import { Toggle } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

export const DefaultUncontrolled: ComponentStory<typeof Toggle> = ({
  onChange,
  checked,
  ...args
}) => <Toggle {...args} />;

export const Checked: ComponentStory<typeof Toggle> = ({
  onChange,
  ...args
}) => <Toggle {...args} />;
Checked.args = {
  checked: true,
};

export const Unchecked: ComponentStory<typeof Toggle> = ({
  onChange,
  ...args
}) => <Toggle {...args} />;
Unchecked.args = {
  checked: false,
};

export const Controlled: ComponentStory<typeof Toggle> = ({
  onChange,
  ...args
}) => {
  const [, updateArgs] = useArgs();

  return (
    <Toggle onChange={() => updateArgs({ checked: !args.checked })} {...args} />
  );
};
Controlled.args = {
  checked: false,
};

export const Disabled: ComponentStory<typeof Toggle> = ({
  onChange,
  checked,
  ...args
}) => {
  return <Toggle {...args} />;
};
Disabled.args = {
  disabled: true,
};

export const WithLabel: ComponentStory<typeof Toggle> = ({
  onChange,
  checked,
  ...args
}) => {
  return (
    <form style={{ display: 'flex' }}>
      <label htmlFor={args.id} style={{ marginRight: '16px' }}>
        <Typography type='body'>Click me!</Typography>
      </label>
      <Toggle {...args} />
    </form>
  );
};
WithLabel.args = {
  id: 'withlabel',
};

export const CheckedBackgroundColor: ComponentStory<typeof Toggle> = ({
  onChange,
  checked,
  ...args
}) => <Toggle {...args} />;
CheckedBackgroundColor.args = {
  backgroundColor: 'blue',
};

export const Sizing: ComponentStory<typeof Toggle> = ({
  onChange,
  checked,
  ...args
}) => <Toggle {...args} />;
Sizing.args = {
  size: 'md',
};
