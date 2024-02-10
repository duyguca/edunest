import type { Meta, StoryObj } from "@storybook/react";
import Features from "./Features";

// Define metadata for the stories
const meta: Meta<typeof Features> = {
  title: "Example/Features", // Title of the storybook section
  component: Features, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
};

export default meta;

type Story = StoryObj<typeof Features>;

// Define an individual story named "Primary"
export const Primary: Story = {
  args: {
    title: "Free & Premium Cources",
    features: [
      {
        title: "Email Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member1.png",
      },
      {
        title: "Paid Advertising",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member3.png",
      },
      {
        title: "SEO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member4.png",
      },
      {
        title: "Funnel Optimization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member2.png",
      },
      {
        title: "Content Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member2.png",
      },
      {
        title: "Social Media Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "https://duygukoksal.com/EduNest/member2.png",
      },
    ],
  },
};
