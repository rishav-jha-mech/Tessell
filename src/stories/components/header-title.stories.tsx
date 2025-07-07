import type { Meta, StoryObj } from "@storybook/react-vite";
import HeaderTitle from "../../components/header-title/header-title";

const meta: Meta<typeof HeaderTitle> = {
  title: "Components/HeaderTitle",
  component: HeaderTitle,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HeaderTitle>;

export const Default: Story = {
  args: {
    title: "Create New Oracle Database Service",
    onDismiss: () => console.log("Dismiss clicked"),
    trailingItem: <span>Trailing Component</span>,
  },
};
