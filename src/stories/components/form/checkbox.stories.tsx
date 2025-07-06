import type { Meta } from "@storybook/react-vite";
import React, { useState } from "react";
import { Checkbox } from "../../../components/checkbox/checkbox";
import FlexView from "../../../components/flex-view/flex-view";
import { Text } from "../../../components/text/text";

export const CheckboxAllVariants: React.FC = () => {
  const [checkbox1, setCheckbox1] = useState<boolean>();
  const [checkbox2, setCheckbox2] = useState<boolean>();

  return (
    <FlexView>
      <FlexView $gap={20} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Regular Checkboxes</Text>
        <FlexView $gap={10}>
          <Checkbox
            $checked={checkbox1}
            onChange={() => setCheckbox1(!checkbox1)}
          />
          <Text $renderAs="bodyPrimary">Default</Text>
        </FlexView>
        <FlexView $gap={10}>
          <Checkbox
            $checked={checkbox2}
            onChange={() => setCheckbox2(!checkbox2)}
          />
          <Text $renderAs="bodyPrimary">False by default</Text>
        </FlexView>
        <FlexView $gap={10}>
          <Checkbox $disabled />
          <Text $renderAs="bodyPrimary">Disabled</Text>
        </FlexView>
      </FlexView>
      <FlexView $gap={20} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Large Checkboxes</Text>
        <FlexView $gap={10}>
          <Checkbox
            $checked={checkbox1}
            $size="large"
            onChange={() => setCheckbox1(!checkbox1)}
          />
          <Text $renderAs="bodyPrimary">Default</Text>
        </FlexView>
        <FlexView $gap={10}>
          <Checkbox
            $checked={checkbox2}
            $size="large"
            onChange={() => setCheckbox2(!checkbox2)}
          />
          <Text $renderAs="bodyPrimary">False by default</Text>
        </FlexView>
        <FlexView $gap={10}>
          <Checkbox $size="large" $disabled />
          <Text $renderAs="bodyPrimary">Disabled</Text>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

const meta: Meta<typeof CheckboxAllVariants> = {
  title: "Components/Form/Checkbox",
  component: CheckboxAllVariants,
};

export default meta;
