import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";
import FlexView from "../../components/flex-view/flex-view";
import { ThemeColors } from "../../theme/theme-colors/theme-colors";
import Separator from "../../components/separator/separator";
import { Text } from "../../components/text/text";

const meta: Meta<typeof FlexView> = {
  title: "Layout/FlexView",
  component: FlexView,
  args: {
    $direction: "row",
    $gap: 20,
    $justify: "flex-start",
    $align: "center",
    $wrap: "nowrap",
  },
  argTypes: {
    $direction: {
      control: "radio",
      options: ["row", "column"],
    },
    $justify: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    $align: {
      control: "select",
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
    },
    $wrap: {
      control: "radio",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    $gap: {
      control: "number",
    },
    $background: {
      control: "select",
      options: Object.keys(ThemeColors),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = styled.div`
  background: #2684ff;
  color: white;
  padding: 1rem;
  border-radius: 4px;
`;

export const Playground: Story = {
  render: (args) => (
    <>
      <Text $renderAs="headingLg">Flexview</Text>
      <Separator $height={20} />
      <FlexView {...args}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </FlexView>
    </>
  ),
};
