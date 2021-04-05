import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  InlineButton,
  InlineButtonProps,
} from "../src/components/inline-button";

export default {
  title: "UI/Inline Button",
  component: InlineButton,
  argTypes: {
    backgroundColor: { control: "text" },
    color: { control: "text" },
    primary: { control: "boolean" },
    outline: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} as Meta;

const Template: Story<InlineButtonProps> = (args) => <InlineButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
