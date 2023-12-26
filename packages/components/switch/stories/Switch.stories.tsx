import { Story, Meta } from '@storybook/react';

import { FormControl, FormLabel } from '@julo-ui/form-control';

import Switch, { SwitchProps } from '../src';
import { julo } from '@julo-ui/system';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "`import { Switch } from '@julo-ui/switch';`",
      },
    },
  },
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const SwitchDefault = Template.bind({});

export const SwitchDisabled = () => <Switch isDisabled />;

export const SwitchOnDisabled = () => <Switch isChecked isDisabled />;

export const SwitchWithFormControl = () => {
  return (
    <>
      <FormControl id='optIn'>
        <FormLabel>Opt-in Example</FormLabel>
        <julo.div
          sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Switch value='1'>Opt-in 1</Switch>
          <Switch value='2'>Opt-in 2</Switch>
          <Switch value='3'>Opt-in 3</Switch>
        </julo.div>
      </FormControl>
      <FormControl id='optInInvalid' isInvalid sx={{ marginTop: '10px' }}>
        <FormLabel>Invalid Opt-in Example</FormLabel>
        <julo.div
          sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Switch value='1'>Invalid Opt-in 1</Switch>
          <Switch value='2'>Invalid Opt-in 2</Switch>
          <Switch value='3'>Invalid Opt-in 3</Switch>
        </julo.div>
      </FormControl>
      <FormControl id='optInDisabled' isDisabled sx={{ marginTop: '10px' }}>
        <FormLabel>Disabled Opt-in Example</FormLabel>
        <julo.div
          sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Switch value='1'>Disabled Opt-in 1</Switch>
          <Switch value='2'>Disabled Opt-in 2</Switch>
          <Switch value='3'>Disabled Opt-in 3</Switch>
        </julo.div>
      </FormControl>
    </>
  );
};
