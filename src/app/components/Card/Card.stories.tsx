import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    children: { control: "text" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa dolore, tempora vero unde illo molestiae natus eveniet quod et voluptates nemo quaerat eius alias dolor beatae. Recusandae, a debitis!",
    title: "Card Title",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa dolore, tempora vero unde illo molestiae natus eveniet quod et voluptates nemo quaerat eius alias dolor beatae. Recusandae, a debitis!",
    title: "Card Title",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa dolore, tempora vero unde illo molestiae natus eveniet quod et voluptates nemo quaerat eius alias dolor beatae. Recusandae, a debitis!",
    title: "Card Title",
    variant: "outline",
  },
};

export const Playground: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa dolore, tempora vero unde illo molestiae natus eveniet quod et voluptates nemo quaerat eius alias dolor beatae. Recusandae, a debitis!",
    title: "Card Title",
    variant: "primary",
  },
};
