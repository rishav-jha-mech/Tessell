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
        <Checkbox
          $label="Default"
          $checked={checkbox1}
          onChange={() => setCheckbox1(!checkbox1)}
        />
        <Checkbox
          $label="False by default"
          $checked={checkbox2}
          onChange={() => setCheckbox2(!checkbox2)}
        />
        <Checkbox $label="Disabled" $disabled />
      </FlexView>
      <FlexView $gap={20} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Large Checkboxes</Text>
        <Checkbox
          $label="Default"
          $size="large"
          $checked={checkbox1}
          onChange={() => setCheckbox1(!checkbox1)}
        />
        <Checkbox
          $label="False by default"
          $size="large"
          $checked={checkbox2}
          onChange={() => setCheckbox2(!checkbox2)}
        />
        <Checkbox $size="large" $label="Disabled" $disabled />
      </FlexView>
    </FlexView>
  );
};

const meta: Meta<typeof CheckboxAllVariants> = {
  title: "Components/Form/Checkbox",
  component: CheckboxAllVariants,
};

export default meta;
