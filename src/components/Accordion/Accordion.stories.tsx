import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Some of the most frequently asked questions",
  },
};
