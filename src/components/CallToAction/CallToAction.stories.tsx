import type { Meta, StoryObj } from "@storybook/react";
import CallToAction from "./CallToAction";
import Badge from "../Badge/Badge";
import Typography from "../Typography";
import Button from "../Button/Button";

const meta: Meta = {
  title: "Example/CallToAction",
  component: CallToAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <CallToAction>
      <Badge label="Members" variant="gray" />
      <Typography
        as="h3"
        variant="h3"
        className="text-white text-center px-20 max-w-[800px]"
      >
        Launch your own online learning platform
      </Typography>
      <Button variant="primary" label="Get Started" />
    </CallToAction>
  ),
};
