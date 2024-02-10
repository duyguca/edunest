import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial";

const meta: Meta = {
  title: "Example/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgPath: "https://duygukoksal.com/EduNest/member1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    fullname: "Duygu Koksal",
    email: "duygukoksalca@gmail.com",
  },
};
