import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "../../components/avatar/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    $size: {
      control: { type: "select" },
      options: ["small", "regular", "large"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const staticProps = {
  src: "https://i.pinimg.com/236x/8c/52/14/8c5214d30329d77c9564ab31fd9d0579.jpg",
  alt: "Snowball Bunny",
};

export const Small: Story = {
  args: {
    ...staticProps,
    $size: "small",
  },
};

export const Regular: Story = {
  args: {
    ...staticProps,
    $size: "regular",
  },
};

export const Large: Story = {
  args: {
    ...staticProps,
    $size: "large",
  },
};
