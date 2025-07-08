import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTheme } from "styled-components";
import { IconButton } from "../../components/icon-button/icon-button";
import { Text } from "../../components/text/text";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    $ariaLabel: "Icon Button",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllIconButtons: Story = {
  render: () => {
    const theme = useTheme();
    const variants = Object.keys(theme.iconButton.variants) as Array<
      keyof typeof theme.iconButton.variants
    >;
    const sizes = Object.keys(theme.iconButton.sizes) as Array<
      keyof typeof theme.iconButton.sizes
    >;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {variants.map((variant) => (
          <div key={variant}>
            <Text $renderAs="headingLg">{variant.toUpperCase()}</Text>
            <br />
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {sizes.map((size) => (
                <React.Fragment key={size}>
                  <IconButton
                    $iconName="Close"
                    key={size}
                    $variant={variant}
                    $size={size}
                    $ariaLabel={`${variant} ${size}`}
                  />
                  <Text $renderAs="bodyPrimary" $displayAs="block">
                    {size}
                  </Text>
                </React.Fragment>
              ))}

              <IconButton
                $iconName="Close"
                $variant={variant}
                $size="regular"
                $ariaLabel={`${variant} disabled`}
                disabled
              />

              <Text
                $renderAs="bodyPrimary"
                $displayAs="block"
                $color="danger-300"
              >
                Disabled
              </Text>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
