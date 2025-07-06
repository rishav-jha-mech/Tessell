import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppIcons } from "../../../assets/icons";
import FlexView from "../../../components/flex-view/flex-view";
import TextInput from "../../../components/text-input/text-input";
import { Text } from "../../../components/text/text";
import Separator from "../../../components/separator/separator";
import { useTheme } from "styled-components";

const meta: Meta<typeof TextInput> = {
  title: "Components/Form/TextInput",
  component: TextInput,
  args: {
    placeholder: "Enter text...",
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

const AllTextInputsComp = () => {
  const { textInput } = useTheme();
  return (
    <FlexView $gap={20}>
      {Object.keys(textInput.sizes).map((size) => (
        <FlexView $direction="column" style={{ width: "300px" }}>
          <Text $renderAs="headingLg">{size.toLocaleUpperCase()} Input</Text>
          <Separator $height={20} />
          <TextInput
            $label="Input with help text"
            placeholder="Default input"
            $size={size as keyof typeof textInput.sizes}
          />

          <TextInput
            placeholder="Leading & trailing items"
            $label="Input with leading and trailing items"
            $leadingItem={<AppIcons.TessellLogo />}
            $trailingItem={<AppIcons.Close />}
            $size={size as keyof typeof textInput.sizes}
          />

          <TextInput
            placeholder="Help text"
            $label="Input with help text"
            $helpText={{
              message: "This is a help message.",
              color: "danger-400",
            }}
            $size={size as keyof typeof textInput.sizes}
          />

          <TextInput
            $label="Input with help text"
            placeholder="Selected input"
            $isSelected
            $size={size as keyof typeof textInput.sizes}
          />

          <TextInput
            $label="Disabled input"
            placeholder="Disabled input"
            $isDisabled
            $size={size as keyof typeof textInput.sizes}
          />
        </FlexView>
      ))}
    </FlexView>
  );
};

export const AllStates: Story = {
  render: () => <AllTextInputsComp />,
};
