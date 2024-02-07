import type { Meta, StoryObj } from "@storybook/react";
import AvatarGroups from "./AvatarGroups";
import Avatar from "./Avatar";

// Define metadata for the stories
const meta: Meta<typeof AvatarGroups> = {
  title: "Example/AvatarGroups", // Title of the storybook section
  component: AvatarGroups, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
};

export default meta;

type Story = StoryObj<typeof AvatarGroups>;

// Define an individual story named "Primary"
export const Primary: Story = {
  render: () => (
    <AvatarGroups>
      <Avatar
        src="https://randomuser.me/api/portraits/men/66.jpg"
        alt="Avatar"
      />
      <Avatar
        src="https://randomuser.me/api/portraits/men/66.jpg"
        alt="Avatar"
      />
      <Avatar
        src="https://randomuser.me/api/portraits/men/66.jpg"
        alt="Avatar"
      />
    </AvatarGroups>
  ),
};
