import type { Meta, StoryObj } from "@storybook/react-vite";
import Drawer from "../../components/drawer/drawer";
import { DrawerProvider } from "../../context/drawer-context/drawer-context";
import { Text } from "../../components/text/text";
import FlexView from "../../components/flex-view/flex-view";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <DrawerProvider>
      <FlexView
        $paddingHorizontal={20}
        $paddingVertical={20}
        $direction="column"
      >
        <Text $renderAs="heading/Titles">Content Area</Text>
        <Text $renderAs="bodyPrimary" $color="subtler">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in
          corrupti magnam, ipsa illum sed illo architecto eveniet explicabo
          dolorum, corporis similique officiis laudantium, tempore velit impedit
          aut consequatur tenetur.
        </Text>
      </FlexView>
    </DrawerProvider>
  ),
};
