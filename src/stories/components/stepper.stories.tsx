import type { Meta, StoryObj } from "@storybook/react-vite";
import Stepper from "../../components/stepper/stepper";
import FlexView from "../../components/flex-view/flex-view";
import { Text } from "../../components/text/text";
import { AppIcons } from "../../assets/icons";
import Separator from "../../components/separator/separator";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    currentStepIndex: { control: { type: "number", min: 0 } },
    onStepChange: { action: "stepChanged" },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    currentStepIndex: 1,
    steps: [
      {
        label: "Service Details",
        isCompleted: true,
        children: (
          <FlexView $direction="row" $align="center" $wrap="wrap" $gap={6}>
            <FlexView $gap={6}>
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                Oracle_service
              </Text>
              <AppIcons.OracleLogo />
            </FlexView>
            <Separator $height={10} $width={1} $background="surface-300" />
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              oracle_para_profile
            </Text>
          </FlexView>
        ),
      },
      {
        label: "Additional Setting",
        isCompleted: false,
        children: (
          <FlexView $direction="row" $align="center" $wrap="wrap" $gap={6}>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              No Preference
            </Text>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              Enabled minor version update
            </Text>
            <Separator $height={10} $width={1} $background="surface-300" />
            <FlexView $gap={6}>
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                7-day PITR
              </Text>
              <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
                01:00 snapshot time
              </Text>
            </FlexView>
            <Separator $height={10} $width={1} $background="surface-300" />
          </FlexView>
        ),
      },
      {
        label: "Review & Submit",
        isCompleted: false,
        children: (
          <FlexView $direction="row" $align="center" $wrap="wrap" $gap={6}>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              Time for review, submit and deploy 🚀
            </Text>
          </FlexView>
        ),
      },
    ],
  },
  render: (args) => (
    <FlexView $direction="column" $gap={16} style={{ width: "380px" }}>
      <Text $renderAs="headingLg" $color="primary">
        Stepper Example
      </Text>
      <Stepper {...args} />
    </FlexView>
  ),
};
