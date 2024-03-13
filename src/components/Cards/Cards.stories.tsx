import type { Meta, StoryObj } from "@storybook/react";
import Cards from "./Cards";

// Define metadata for the stories
const meta: Meta<typeof Cards> = {
  title: "Example/Cards", // Title of the storybook section
  component: Cards, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
};

export default meta;

type Story = StoryObj<typeof Cards>;

// Define an individual story named "Primary"
export const Primary: Story = {
  args: {
    title: " Free & Premium  Courses",

    cards: [
      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },
      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },
      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },
      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },
      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },

      {
        title: "Master Google Ads",
        imgPath: "https://duygukoksal.com/EduNest/hero-image.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        price: "Free",
      },
    ],
  },
};
