import React, { useEffect, useRef, useState } from "react";
import * as S from "./stepper.styled";
import type { StepperProps, StepperItem } from "./stepper.types";
import { Text } from "../text/text";
import Separator from "../separator/separator";

const Stepper: React.FC<StepperProps> = ({ onStepChange, steps }) => {
  const [heights, setHeights] = useState<number[]>([]);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = refs.current.map((ref) => ref?.offsetHeight || 0);
    setHeights(newHeights);
  }, [steps]);

  return (
    <S.StepperContainer>
      {steps.map((step: StepperItem, index: number) => {
        const isLast = index === steps.length - 1;
        const contentHeight = heights[index] || 0;

        return (
          <div
            key={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            <S.StepItem
              isClickable={!!onStepChange}
              onClick={() => onStepChange(index)}
            >
              <S.Dot
                $isCompleted={step.isCompleted}
                $isFirst={index === 0}
                $isLast={isLast}
                $lineHeight={isLast ? 0 : contentHeight}
              />
              <Text
                $renderAs="bodySecondary"
                $color={step.isCompleted ? "primary-200" : "primary"}
              >
                {step.label}
              </Text>
            </S.StepItem>
            {step.children && <S.StepContent>{step.children}</S.StepContent>}
            <Separator height={16} />
          </div>
        );
      })}
    </S.StepperContainer>
  );
};

export default Stepper;
