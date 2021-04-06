import React from 'react';
import { Story, Meta } from '@storybook/react';

// label,
  // fieldid,
  // placeholder,
  // required = false,
  // error = false,
  // errormessage,

import { FormInputText, FormInputTextProps } from '../src/components/form-input-text';

export default {
  title: 'UI/Forms/Inputs/Text',
  component: FormInputText,
  argTypes: {
    label: { control: 'text' },
    fieldid: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    errormessage: { control: 'text' },
  },
} as Meta;

const Template: Story<FormInputTextProps> = (args) => <FormInputText {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Email',
  fieldid: 'account-email',
  placeholder: 'Your email',
  required: false,
  error: false,
  errormessage: "",
};

export const Required = Template.bind({});
Required.args = {
  label: 'Email',
  fieldid: 'account-email',
  placeholder: 'Your email',
  required: true,
  error: false,
  errormessage: "",
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  fieldid: 'account-email',
  placeholder: 'Your email',
  required: false,
  error: true,
  errormessage: "Invalid Email",
};