import type { Meta, StoryObj } from "@storybook/react-vite";
import Loader from "../../components/loader/loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    $size: 40,
  },
};
