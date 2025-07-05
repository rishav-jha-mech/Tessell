import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTheme } from "styled-components";
import { AppIcons } from "../../assets/icons";
import { IconButton } from "../../components/icon-button/icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    $ariaLabel: "Icon Button",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IntenseRegular: Story = {
  args: {
    $variant: "intense",
    $size: "regular",
    children: <AppIcons.TessellLogo />,
  },
};

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
            <h3>{variant.toUpperCase()}</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {sizes.map((size) => (
                <IconButton
                  $iconName="TessellLogo"
                  key={size}
                  $variant={variant}
                  $size={size}
                  $ariaLabel={`${variant} ${size}`}
                />
              ))}

              <IconButton
                $iconName="TessellLogo"
                $variant={variant}
                $size="regular"
                $isDisabled
                $ariaLabel={`${variant} disabled`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
