import type { Meta, StoryObj } from "@storybook/react";
import Members from "./Members";

// Define metadata for the stories
const meta: Meta<typeof Members> = {
  title: "Example/Members", // Title of the storybook section
  component: Members, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
};

export default meta;

type Story = StoryObj<typeof Members>;

// Define an individual story named "Primary"
export const Primary: Story = {
  args: {
    title: " Take a look at our newest students",
    members: [
      {
        memberName: "Duygu Koksal",
        location: "Vancovuer / Canada",
        imgPath: "https://duygukoksal.com/EduNest/member1.png",
      },
      {
        memberName: "John Doe",
        location: "Surrey / Canada",
        imgPath: "https://duygukoksal.com/EduNest/member3.png",
      },
      {
        memberName: "Salim Serdar",
        location: "Vancouver / Canada",
        imgPath: "https://duygukoksal.com/EduNest/member4.png",
      },
      {
        memberName: "Umut Tuna",
        location: "Burnaby / Canada",
        imgPath: "https://duygukoksal.com/EduNest/member2.png",
      },
    ],
  },
};
