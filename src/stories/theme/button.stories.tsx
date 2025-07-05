import { useTheme } from "styled-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../components/button/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryRegular: Story = {
  args: {
    $type: "primary",
    $size: "regular",
  },
};

export const AllButtons: Story = {
  render: () => {
    const theme = useTheme();
    const variants = Object.keys(theme.buttons.variants) as Array<
      keyof typeof theme.buttons.variants
    >;
    const sizes = Object.keys(theme.buttons.sizes) as Array<
      keyof typeof theme.buttons.sizes
    >;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {variants.map((variant) => (
          <div key={variant}>
            <h3>{variant.toUpperCase()}</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {sizes.map((size) => (
                <Button key={size} $type={variant} $size={size}>
                  {`${variant} ${size}`}
                </Button>
              ))}

              <Button $type={variant} $size="regular" disabled>
                Disabled
              </Button>

              <Button $type={variant} $size="regular" $isLoading>
                Loading
              </Button>

              <Button $type={variant} $size="regular" $ifFullWidth>
                Full Width
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
