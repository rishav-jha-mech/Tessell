import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "../../components/text/text";
import { useTheme } from "styled-components";

const meta = {
  title: "Theme/Colors",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ColorPallterComp = () => {
  const { colors } = useTheme();

  return (
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
        {Object.entries(colors).map(([name, value]) => (
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
  );
};

export const ColorsPalette: Story = {
  render: () => <ColorPallterComp />,
};
