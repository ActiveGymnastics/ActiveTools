import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from '../src/components/avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    image: { control: 'text' },
    link: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Main = Template.bind({});
Main.args = {
  image: 'https://source.unsplash.com/JN0SUcTOig0/200x200',
};