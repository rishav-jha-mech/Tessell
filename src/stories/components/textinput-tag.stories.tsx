import type { Meta, StoryObj } from "@storybook/react-vite";
import TextinputTag from "../../components/textinput-tag/textinput-tag";

const meta: Meta<typeof TextinputTag> = {
  title: "Components/TextinputTag",
  component: TextinputTag,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextinputTag>;

export const Default: Story = {
  args: {
    label: "Tags",
    name: "tags",
    placeholder: "Key:Value",
    maxWidth: "300px",
  },
};
