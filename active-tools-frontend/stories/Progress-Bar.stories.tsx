import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from '../src/components/progress-bar';

export default {
  title: 'UI/Progress Bar',
  component: ProgressBar,
  argTypes: {
    twBarWidth: { control: 'text' },
    label: { control: 'text'},
    twBackgroundColor: { control: 'text'},
    twBarColor: { control: 'text'},

  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: '100%',
  twBarWidth: 'w-12/12',
  twBackgroundColor: 'bg-gray-200',
  twBarColor: 'bg-green-500'
};

export const Half = Template.bind({});
Half.args = {
  label: '100%',
  twBarWidth: 'w-6/12',
  twBackgroundColor: 'bg-gray-200',
  twBarColor: 'bg-green-500'
};