import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Typography from '../Typography';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "`import { Checkbox } from '@julofinance/react-components';`",
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '25px',
};

export const Checked = Template.bind({});
Checked.args = {
  size: '25px',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: '25px',
  disabled: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  size: '25px',
  defaultChecked: true,
  disabled: true,
};

export const Labeled = Template.bind({});
Labeled.args = {
  size: '25px',
  label: <Typography body={1}>Label</Typography>,
};

export const Multiple: ComponentStory<typeof Checkbox> = ({ onClick, onChange, value, ...args}) => {
  const [options, setOptions] = useState([
    {label: 'A', checked: false, value: 'A'},
    {label: 'B', checked: false, value: 'B'},
    {label: 'C', checked: false, value: 'C'},
    {label: 'D', checked: false, value: 'D'},
    {label: 'E', checked: false, value: 'E'},
  ]);
  const [optionClicked, setOptionClicked] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>, index:number) => {
    const updOptions = options.map(opt => ({...opt}));
    updOptions[index].checked = !options[index].checked;
    setOptions(updOptions);

    let temp = '';
    updOptions.map(opt => ( opt.checked ? temp += opt.value : null));
    setOptionClicked(temp);
  };

  return (
    <>
      <CheckboxGroup inline={true} >
        {options.map((opt, index) => (
          <Checkbox
            {...args}
            defaultChecked={opt.checked}
            key={index}
            label={<Typography body={1}>{opt.label}</Typography>}
            name={'checkboxOptions[]'}
            value={opt.value}
            onChange={(event) => handleOptionChange(event,index)}
          />
        ))}
      </CheckboxGroup>
      <p>Checkbox clicked: {optionClicked}</p>
    </>
  );
};