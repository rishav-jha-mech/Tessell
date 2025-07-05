import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "../../components/text/text";
import { Colors } from "../../tokens/colors/colors";

const meta = {
  title: "Theme/Colors",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorsPalette: Story = {
  render: () => (
    <>
      <Text $renderAs="headingLg" $displayAs="block">
        Colors Palette
      </Text>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {Object.entries(Colors).map(([name, value]) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: value,
                border: "1px solid #202020",
                borderRadius: "4px",
              }}
            />
            <code style={{ marginTop: "8px", fontSize: "12px" }}>{name}</code>
            <span style={{ fontSize: "10px", color: "#202020" }}>{value}</span>
          </div>
        ))}
      </div>
    </>
  ),
};
