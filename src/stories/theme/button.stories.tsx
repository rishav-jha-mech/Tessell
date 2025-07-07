import { useTheme } from "styled-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../components/button/button";
import FlexView from "../../components/flex-view/flex-view";
import { Text } from "../../components/text/text";
import Separator from "../../components/separator/separator";

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
    $icon: "Add",
    children: "Button CTA",
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
      <FlexView $gap={20} $direction="column" style={{ width: "60%" }}>
        {variants.map((variant) => (
          <div key={variant}>
            <Text $renderAs="headingLg">{variant.toUpperCase()}</Text>
            <Separator $height={20} />
            <FlexView $gap={20}>
              {sizes.map((size) => (
                <Button key={size} $type={variant} $size={size} $icon="Add">
                  {`${variant} ${size}`}
                </Button>
              ))}

              <Button
                $type={variant}
                $size="regular"
                $icon="Add"
                $isSelected={true}
              >
                Selected
              </Button>

              <Button $type={variant} $size="regular" $icon="Add" disabled>
                Disabled
              </Button>

              <Button $type={variant} $size="regular" $icon="Add" $isLoading>
                Loading
              </Button>
            </FlexView>
            <Separator $height={20} />
            <Text $renderAs="headingLg">Full Width</Text>
            <Separator $height={20} />
            <FlexView $gap={20} $direction="column">
              {sizes.map((size) => (
                <Button
                  key={size}
                  $type={variant}
                  $size={size}
                  $icon="Add"
                  $isFullWidth
                >
                  {`${variant} ${size}`}
                </Button>
              ))}
              <Button
                $type={variant}
                $size="regular"
                $icon="Add"
                disabled
                $isFullWidth
              >
                Disabled
              </Button>

              <Button
                $type={variant}
                $size="regular"
                $icon="Add"
                $isLoading
                $isFullWidth
              >
                Loading
              </Button>
            </FlexView>

            <Separator $height={20} />
            <Text $renderAs="headingLg">Icon Only</Text>
            <Separator $height={20} />
            <FlexView $gap={20}>
              {sizes.map((size) => (
                <Button
                  key={size}
                  $type={variant}
                  $size={size}
                  $icon="Add"
                  $iconOnly
                />
              ))}
              <Button
                $type={variant}
                $size={"large"}
                $icon="Add"
                $iconOnly
                disabled
              />
              <Button
                $type={variant}
                $size={"large"}
                $icon="Add"
                $iconOnly
                $isLoading
              />
            </FlexView>
            <Separator $height={20} />
            <Separator $height={2} $background="primary" $width={"100%"} />
          </div>
        ))}
      </FlexView>
    );
  },
};
