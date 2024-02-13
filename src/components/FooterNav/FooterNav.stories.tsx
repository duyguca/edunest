import type { Meta, StoryObj } from "@storybook/react";
import FooterNav from "./FooterNav";

const meta = {
  title: "Example/FooterNav",
  component: FooterNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FooterNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Product",
    items: [
      {
        label: "Lorem Ipsum",
      },
      {
        label: "Lorem Ipsum",
      },
      {
        label: "Lorem Ipsum",
      },
      {
        label: "Lorem Ipsum",
      },
    ],
  },
};
