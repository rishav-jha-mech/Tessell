import { useTheme } from "styled-components";
import { AppIcons } from "../../../../assets/icons";
import Separator from "../../../../components/separator/separator";
import TextInput from "../../../../components/text-input/text-input";
import { Text } from "../../../../components/text/text";
import FlexView from "../../../../components/flex-view/flex-view";
import { Dropdown } from "../../../../components/dropdown/dropdown";
import { Checkbox } from "../../../../components/checkbox/checkbox";
import TextinputTag from "../../../../components/textinput-tag/textinput-tag";

const ServiceDetailsSection = () => {
  const { colors } = useTheme();

  return (
    <section>
      <Text $renderAs="heading/primary">Service Details</Text>
      <Separator height={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Service Name, Service Description, Software Release
      </Text>
      <Separator heightX={2} />
      <TextInput
        $label="Service Name"
        name="serviceName"
        placeholder="Enter service name"
        $trailingItem={<AppIcons.Check color={colors.primary} />}
        $maxWidth={"360px"}
        $marginBottomX={1.5}
      />
      <TextInput
        $label="Description (Optional)"
        name="serviceDescription"
        placeholder="Enter service description"
        $maxWidth={"83.6%"}
        $multiline={true}
        $marginBottomX={1.5}
      />
      <TextinputTag
        label="Tags"
        name="tags"
        placeholder="Key                              : Value"
        maxWidth={"300px"}
        marginBottomX={2}
      />
      <Text $renderAs="Heading/3">Engine Configuration</Text>
      <Separator height={2} />
      <Text $renderAs="Text-body/primary/primary" $color="subtler">
        Adjustable parameters, performance optimization, &nbsp;fine-tuning
        options
      </Text>
      <Separator heightX={1.5} />
      <FlexView $gapX={1} $marginBottomX={2} $wrap="wrap">
        <FlexView $flex={1}>
          <Dropdown
            $label="Software Release"
            $size="default"
            $options={[]}
            $value={""}
            $placeholder="Oracle 21c"
            onChange={() => {}}
          />
        </FlexView>
        <FlexView $flex={1}>
          <Dropdown
            $label="Version"
            $size="default"
            $options={[]}
            $value={""}
            $placeholder="21.0.0.0.0"
            onChange={() => {}}
          />
        </FlexView>
      </FlexView>
      <Checkbox $label="Create as a Container Database" />
    </section>
  );
};

export default ServiceDetailsSection;
