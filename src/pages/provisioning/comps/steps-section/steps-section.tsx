import { useTheme } from "styled-components";
import { Button } from "../../../../components/button/button";
import FlexView from "../../../../components/flex-view/flex-view";
import Separator from "../../../../components/separator/separator";
import Stepper from "../../../../components/stepper/stepper";
import { Text } from "../../../../components/text/text";
import type { StepsSectionProps } from "./steps-section-types";
import * as S from "./steps-section.styled";

const StepsSection: React.FC<StepsSectionProps> = ({
  currentStepIndex,
  steps,
}) => {
  const {
    spacing: { GUTTER },
  } = useTheme();

  const { button } = steps[currentStepIndex] || {};

  return (
    <FlexView $direction="column">
      <S.Container>
        <Stepper currentStepIndex={currentStepIndex} steps={steps} />
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
              as={"a"}
              href="/"
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
        {button && (
          <Button
            $icon={button.icon}
            $size="large"
            $type="primary"
            $isFullWidth
            onClick={button.onClick}
            $isLoading={button.isLoading}
          >
            <Text $renderAs="button/large" $color="surface-0">
              {button.label}
            </Text>
          </Button>
        )}
      </FlexView>
      <Separator heightX={0.5} />
    </FlexView>
  );
};

export default StepsSection;
