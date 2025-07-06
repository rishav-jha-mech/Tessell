import type { Meta, StoryObj } from "@storybook/react-vite";
import Separator from "../../components/separator/separator";
import FlexView from "../../components/flex-view/flex-view";
import { Text } from "../../components/text/text";

const meta: Meta<typeof Separator> = {
  title: "Layout/Separator",
  component: Separator,
  args: {
    $width: 300,
    $height: 300,
    $background: "opacity-success",
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const CustomSizes: Story = {
  render: () => (
    <>
      <Text $renderAs="headingLg">Separator</Text>
      <Separator $height={20} />
      <FlexView $gap={30}>
        <Separator $width={200} $height={200} $background="opacity-primary" />
        <Separator $width={100} $height={100} $background="opacity-warning" />
        <Separator $width={50} $height={50} $background="opacity-danger" />
        <Separator $width={100} $height={100} $background="opacity-success" />
      </FlexView>
    </>
  ),
};
