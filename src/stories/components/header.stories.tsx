import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "../../components/header/header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    credits: 777,
    userAvatarSrc:
      "https://i.pinimg.com/236x/8c/52/14/8c5214d30329d77c9564ab31fd9d0579.jpg",
    breadcrumbs: [
      { label: "Provisioning" },
      { label: "Relational Databases" },
      { label: "Oracle Server" },
    ],
  },
};
