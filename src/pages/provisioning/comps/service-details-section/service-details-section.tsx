import { useTheme } from "styled-components";
import { AppIcons } from "../../../../assets/icons";
import Separator from "../../../../components/separator/separator";
import TextInput from "../../../../components/text-input/text-input";
import { Text } from "../../../../components/text/text";

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
      />
    </section>
  );
};

export default ServiceDetailsSection;
