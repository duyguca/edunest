import type { Meta, StoryObj } from "@storybook/react";
import Feature from "./Feature";

const meta: Meta = {
  title: "Example/Feature",
  component: Feature,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Email Marketing",
    icon: "https://duygukoksal.com/EduNest/member1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
};
