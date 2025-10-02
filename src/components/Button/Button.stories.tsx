import type { Meta, StoryObj } from "@storybook/react";
import {Button} from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "large",
  },
};

export const Playground: Story = {
  args: {
    children: "Play with controls",
    variant: "primary",
    size: "medium",
  },
};
