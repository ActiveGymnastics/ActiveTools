import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../src/components/button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    label: { control: 'text'},
    primary: { control: 'checkbox' },
    backgroundColor: { control: 'text' },
    color: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  color: 'tw-primary-500',
  backgroundColor: 'tw-white-500'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
