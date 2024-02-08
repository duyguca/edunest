import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Master Google Ads",
    imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    price: "Free",
  },
};
