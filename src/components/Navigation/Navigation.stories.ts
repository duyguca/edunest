import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";

const meta = {
  title: "Example/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        label: "Home",
      },
      {
        label: "About Us",
      },
      {
        label: "Cources",
      },
      {
        label: "Contact",
      },
    ],
  },
};
