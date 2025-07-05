import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "../../components/text/text";
import { useTheme } from "styled-components";

const meta = {
  title: "Theme/Text",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => {
    const theme = useTheme();
    const variants = Object.keys(theme.typography) as Array<
      keyof typeof theme.typography
    >;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {variants.map((variant) => (
          <Text key={variant} $renderAs={variant}>
            {variant} — Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatum?
          </Text>
        ))}
      </div>
    );
  },
};
