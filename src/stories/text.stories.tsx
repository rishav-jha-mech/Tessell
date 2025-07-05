import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "../components/text/text";

const meta = {
  title: "Theme/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
  args: {
    $renderAs: "headingLg",
    children:
      "This is an example text, change the renderAs, Text and Colors to see the changes",
  },
};
