export interface StepperItem {
  label: string;
  isCompleted: boolean;
  children?: React.ReactNode;
}

export interface StepperProps {
  currentStepIndex: number;
  steps: StepperItem[];
  onStepChange: (index: number) => void;
}
