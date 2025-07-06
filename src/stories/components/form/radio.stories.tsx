import type { Meta } from "@storybook/react-vite";
import React, { useState } from "react";
import { Radio } from "../../../components/radio/radio";
import FlexView from "../../../components/flex-view/flex-view";
import { Text } from "../../../components/text/text";

export const RadioAllVariants: React.FC = () => {
  const [radioValue, setRadioValue] = useState<"option1" | "option2" | null>(
    null
  );
  const [largeRadioValue, setLargeRadioValue] = useState<
    "option1" | "option2" | null
  >(null);

  return (
    <FlexView $gap={40}>
      {/* Regular radios */}
      <FlexView $gap={20} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Regular Radios</Text>

        <FlexView $gap={10}>
          <Radio
            name="regular-group"
            $checked={radioValue === "option1"}
            onChange={() => setRadioValue("option1")}
          />
          <Text $renderAs="bodyPrimary">Option 1</Text>
        </FlexView>

        <FlexView $gap={10}>
          <Radio
            name="regular-group"
            $checked={radioValue === "option2"}
            onChange={() => setRadioValue("option2")}
          />
          <Text $renderAs="bodyPrimary">Option 2</Text>
        </FlexView>

        <FlexView $gap={10}>
          <Radio disabled />
          <Text $renderAs="bodyPrimary">Disabled</Text>
        </FlexView>
      </FlexView>

      {/* Large radios */}
      <FlexView $gap={20} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Large Radios</Text>

        <FlexView $gap={10}>
          <Radio
            name="large-group"
            $size="large"
            $checked={largeRadioValue === "option1"}
            onChange={() => setLargeRadioValue("option1")}
          />
          <Text $renderAs="bodyPrimary">Option 1</Text>
        </FlexView>

        <FlexView $gap={10}>
          <Radio
            name="large-group"
            $size="large"
            $checked={largeRadioValue === "option2"}
            onChange={() => setLargeRadioValue("option2")}
          />
          <Text $renderAs="bodyPrimary">Option 2</Text>
        </FlexView>

        <FlexView $gap={10}>
          <Radio $size="large" disabled />
          <Text $renderAs="bodyPrimary">Disabled</Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

const meta: Meta<typeof RadioAllVariants> = {
  title: "Components/Form/Radio",
  component: RadioAllVariants,
};

export default meta;
