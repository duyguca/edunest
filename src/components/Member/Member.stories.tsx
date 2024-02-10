import type { Meta, StoryObj } from "@storybook/react";
import Member from "./Member";

const meta: Meta = {
  title: "Example/Member",
  component: Member,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Member>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    memberName: "Floyd Miles",
    imgPath: "https://duygukoksal.com/EduNest/member1.png",
    location: "Vancouver / Canada",
  },
};
