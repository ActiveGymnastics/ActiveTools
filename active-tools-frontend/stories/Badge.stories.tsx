import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from '../src/components/badge';

export default {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    twBackgroundColor: { control: 'text'},
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Hello',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Hello',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Hello',
  size: 'sm',
};