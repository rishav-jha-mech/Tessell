import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { AppIcons } from "../../../assets/icons";
import { Dropdown } from "../../../components/dropdown/dropdown";
import type { DropdownItemProps } from "../../../components/dropdown/dropdown-types";
import FlexView from "../../../components/flex-view/flex-view";
import { Text } from "../../../components/text/text";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Form/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const DropdownStory = () => {
  const [selected, setSelected] = useState<string | number>("");

  const options: DropdownItemProps[] = [
    {
      value: "grape",
      label: "Grape",
      $leadingItem: <AppIcons.TessellLogo width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
    {
      value: "apple",
      label: "Apple",
      $leadingItem: <AppIcons.CirclePlus width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
    {
      value: "orange",
      label: "Orange",
      $leadingItem: <AppIcons.Cloud width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
    {
      value: "banana",
      label: "Banana",
      $leadingItem: <AppIcons.Chart width={16} />,
      $trailingItem: <AppIcons.CmdE />,
    },
  ];

  return (
    <FlexView style={{ width: "300px" }} $direction="column" $gap={16}>
      <Text $renderAs="headingLg">DropDown</Text>
      <Dropdown
        $label="Select Fruit"
        $placeholder="Choose one"
        $options={options}
        $value={selected}
        $helpText={{
          message: "Select your favorite fruit",
          color: "subtlest",
        }}
        onChange={(val) => setSelected(val)}
      />
    </FlexView>
  );
};

export const Basic: Story = {
  render: () => <DropdownStory />,
};
