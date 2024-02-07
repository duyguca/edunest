import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta = {
  title: "Example/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    subtitle: "members",
    title: "Build a powerful membership site with Webflow.",
    imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
};
