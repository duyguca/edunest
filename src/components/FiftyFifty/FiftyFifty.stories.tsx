import type { Meta, StoryObj } from "@storybook/react";
import FiftyFifty from "./FiftyFifty";

const meta: Meta = {
  title: "Example/FiftyFifty",
  component: FiftyFifty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FiftyFifty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Become a member to access exclusive courses.",
    imgPath: "https://duygukoksal.com/EduNest/membership.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    variant: "primary",
  },
};
