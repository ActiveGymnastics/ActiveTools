// type?: keyof typeof types;
// title?: string;
// message?: string;
// buttonAction1?: string;
// buttonAction2?: string;

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ModalConfirmation, ModalConfirmationProps } from '../src/components/modal-confirmation';

export default {
  title: 'UI/Modal/Confirmation',
  component: ModalConfirmation,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    type: {
      control: 'select',
      options: ['primary', 'warning', 'danger']
    },
    buttonAction1: { control: 'text'},
    buttonAction2: { control: 'text'}
  },
} as Meta;

const Template: Story<ModalConfirmationProps> = (args) => <ModalConfirmation {...args} />;

export const Main = Template.bind({});
Main.args = {
  type: 'primary',
  title: 'Delete Record?',
  message: 'This will delete the record forever.',
  buttonAction1: 'Delete',
  buttonAction2: 'Cancel'
};