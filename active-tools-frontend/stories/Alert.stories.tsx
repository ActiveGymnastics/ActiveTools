import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert, AlertProps } from '../src/components/alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error']
    }
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: 'Success',
  message: 'Account created successfully!',
  size: 'md',
  type: 'success'
};