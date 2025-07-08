import type { Meta } from "@storybook/react-vite";
import React, { useState } from "react";
import { Checkbox } from "../../../components/checkbox/checkbox";
import FlexView from "../../../components/flex-view/flex-view";
import { Text } from "../../../components/text/text";

export const CheckboxAllVariants: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [unchecked, setUnchecked] = useState(false);
  const [intermediate, setIntermediate] = useState(false);

  return (
    <FlexView $gap={40}>
      <FlexView $gap={12} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Default Size</Text>

        <Checkbox
          $label="Unchecked"
          $checked={unchecked}
          onChange={() => setUnchecked(!unchecked)}
        />

        <Checkbox
          $label="Checked"
          $checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <Checkbox
          $label="Intermediate"
          $checked={false}
          $indeterminate={true}
          onChange={() => setIntermediate(!intermediate)}
        />

        <Checkbox $label="Disabled Unchecked" $checked={false} $disabled />

        <Checkbox $label="Disabled Checked" $checked={true} $disabled />

        <Checkbox
          $label="Disabled Intermediate"
          $checked={false}
          $indeterminate={true}
          $disabled
        />
      </FlexView>

      {/* Large size */}
      <FlexView $gap={12} $direction="column" style={{ width: "300px" }}>
        <Text $renderAs="headingLg">Large Size</Text>

        <Checkbox
          $label="Unchecked"
          $size="large"
          $checked={unchecked}
          onChange={() => setUnchecked(!unchecked)}
        />

        <Checkbox
          $label="Checked"
          $size="large"
          $checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <Checkbox
          $label="Intermediate"
          $size="large"
          $checked={false}
          $indeterminate={true}
          onChange={() => setIntermediate(!intermediate)}
        />

        <Checkbox
          $label="Disabled Unchecked"
          $size="large"
          $checked={false}
          $disabled
        />

        <Checkbox
          $label="Disabled Checked"
          $size="large"
          $checked={true}
          $disabled
        />

        <Checkbox
          $label="Disabled Intermediate"
          $size="large"
          $checked={false}
          $indeterminate={true}
          $disabled
        />
      </FlexView>
    </FlexView>
  );
};

const meta: Meta<typeof CheckboxAllVariants> = {
  title: "Components/Form/Checkbox",
  component: CheckboxAllVariants,
};

export default meta;
