import React from 'react';
import { Story, Meta } from '@storybook/react';

// label,
  // fieldid,
  // placeholder,
  // required = false,
  // error = false,
  // errormessage,

import { FormInputTextArea, FormInputTextAreaProps } from '../src/components/form-input-textarea';

export default {
  title: 'UI/Forms/Inputs/TextArea',
  component: FormInputTextArea,
  argTypes: {
    label: { control: 'text' },
    fieldid: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    errormessage: { control: 'text' },
  },
} as Meta;

const Template: Story<FormInputTextAreaProps> = (args) => <FormInputTextArea {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'About You',
  fieldid: 'account-about',
  placeholder: 'Tell us about yourself',
  required: false,
  error: false,
  errormessage: "",
};

export const Required = Template.bind({});
Required.args = {
  label: 'About You',
  fieldid: 'account-about',
  placeholder: 'Tell us about yourself',
  required: true,
  error: false,
  errormessage: "",
};

export const Error = Template.bind({});
Error.args = {
  label: 'About You',
  fieldid: 'account-about',
  placeholder: 'Tell us about yourself',
  required: false,
  error: true,
  errormessage: "Invalid encoding",
};