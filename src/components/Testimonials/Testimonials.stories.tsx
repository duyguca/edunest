import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "./Testimonials";
import Testimonial from "../Testimonial/Testimonial";

// Define metadata for the stories
const meta: Meta<typeof Testimonials> = {
  title: "Example/Testimonials", // Title of the storybook section
  component: Testimonials, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
};

export default meta;

type Story = StoryObj<typeof Testimonials>;

// Define an individual story named "Primary"
export const Primary: Story = {
  args: {
    title: "Check out what our students have to say",
    testimonials: [
      {
        imgPath: "https://duygukoksal.com/EduNest/member1.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        fullname: " Duygu Koksal",
        email: "duygukoksalca@gmail.com",
      },
      {
        imgPath: "https://duygukoksal.com/EduNest/member2.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        fullname: " Duygu Koksal",
        email: "duygukoksalca@gmail.com",
      },
    ],
  },
};
