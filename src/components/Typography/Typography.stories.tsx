import type { Meta, StoryObj } from "@storybook/react";
import Typography, { TypographyProps } from "./Typography";

// Define metadata for the stories
const meta: Meta = {
  title: "Example/Typography", // Title of the storybook section
  component: Typography, // Component being showcased
  parameters: {
    layout: "centered", // Center the component in the story
  },
  tags: ["autodocs"], // Tags for the story
  argTypes: {
    // Optional argument types configuration
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Typography>;
export default meta;

// Define a type alias for the story
type Story = StoryObj<typeof meta>;

// Define individual stories for different variants of the Typography component
export const Default = (args: TypographyProps) => <Typography {...args} />;
Default.args = {
  children: "Your team management is now simplified.",
  as: "p",
};

export const Heading1 = (args: TypographyProps) => <Typography {...args} />;
Heading1.args = {
  variant: "h1",
  children: "Heading 1 Typography",
};

export const Heading2 = (args: TypographyProps) => <Typography {...args} />;
Heading2.args = {
  variant: "h2",
  children: "Heading 2 Typography",
};

export const Heading3 = (args: TypographyProps) => <Typography {...args} />;
Heading3.args = {
  variant: "h3",
  children: "Heading 3 Typography",
};

export const Heading4 = (args: TypographyProps) => <Typography {...args} />;
Heading4.args = {
  variant: "h4",
  children: "Heading 4 Typography",
};

export const Heading5 = (args: TypographyProps) => <Typography {...args} />;
Heading5.args = {
  variant: "h5",
  children: "Heading 5 Typography",
};

export const ParagraphL = (args: TypographyProps) => <Typography {...args} />;
ParagraphL.args = {
  variant: "pL",
  children: "ParagraphL Typography",
};

export const ParagraphM = (args: TypographyProps) => <Typography {...args} />;
ParagraphM.args = {
  variant: "pM",
  children: "ParagraphM Typography",
};

export const ParagraphS = (args: TypographyProps) => <Typography {...args} />;
ParagraphS.args = {
  variant: "pS",
  children: "ParagraphS Typography",
};

export const Label = (args: TypographyProps) => <Typography {...args} />;
Label.args = {
  variant: "label",
  children: "Label Typography",
};
