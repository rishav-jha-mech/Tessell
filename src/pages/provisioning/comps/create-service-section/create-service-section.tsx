import { useTheme } from "styled-components";
import { AppIcons } from "../../../../assets/icons";
import FlexView from "../../../../components/flex-view/flex-view";
import Separator from "../../../../components/separator/separator";
import Stepper from "../../../../components/stepper/stepper";
import { Text } from "../../../../components/text/text";
import * as S from "./create-service-section.styled";
import { Button } from "../../../../components/button/button";

const CreateServiceSection = () => {
  const steps = [
    {
      label: "Service Details",
      isCompleted: true,
      children: (
        <FlexView $direction="row" $alignItems="center" $wrap="wrap" $gap={6}>
          <FlexView $gap={6}>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              Oracle_service
            </Text>
            <AppIcons.OracleLogo />
          </FlexView>
          <Separator height={10} width={1} background="surface-300" />
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
        <FlexView $direction="row" $alignItems="center" $wrap="wrap" $gap={6}>
          <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
            No Preference
          </Text>
          <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
            Enabled minor version update
          </Text>
          <Separator height={10} width={0.5} background="surface-300" />
          <FlexView $gap={6}>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              7-day PITR
            </Text>
            <Text $renderAs="Text-body/secondary/secondary" $color="subtler">
              01:00 snapshot time
            </Text>
          </FlexView>
          <Separator height={10} width={0.5} background="surface-300" />
        </FlexView>
      ),
    },
  ];

  const {
    spacing: { GUTTER },
  } = useTheme();

  return (
    <FlexView $direction="column">
      <S.Container>
        <Stepper currentStepIndex={1} steps={steps} onStepChange={() => {}} />
      </S.Container>
      <FlexView
        $direction="column"
        $paddingHorizontal={GUTTER}
        $paddingVertical={GUTTER}
        $borderTopWidth={1}
        $gap={16}
      >
        <FlexView $justifyContent="space-between" $alignItems="flex-start">
          <FlexView $direction="column">
            <Text $renderAs="Text-body/primary/primary" $color="text-100">
              Estimated Monthly Price*
            </Text>
            <Text
              $renderAs="Text-body/secondary/secondary"
              $color="primary-200"
            >
              View Details
            </Text>
          </FlexView>
          <Text $renderAs="Text-body/primary/primary" $color="primary">
            $99.99
          </Text>
        </FlexView>
        <Button $icon="Add" $size="large" $type="primary" $isFullWidth>
          <Text $renderAs="button/large" $color="surface-0">
            Create Service
          </Text>
        </Button>
      </FlexView>
      <Separator heightX={0.5} />
    </FlexView>
  );
};

export default CreateServiceSection;
