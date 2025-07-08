import type { AppIconKeys } from "../../assets/icons";

export interface StepperItem {
  label: string;
  children?: React.ReactNode;
  button?: {
    icon: AppIconKeys;
    label: string;
    isLoading: boolean;
    onClick: () => void;
  };
}

export interface StepperProps {
  currentStepIndex: number;
  steps: StepperItem[];
  onStepChange?: (index: number) => void;
}
