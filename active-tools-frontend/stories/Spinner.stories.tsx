import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Spinner, SpinnerProps } from '../src/components/spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['s','m','l']
      }
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Main = Template.bind({});
Main.args = {
  color: '#000',
  size: 'm',
};