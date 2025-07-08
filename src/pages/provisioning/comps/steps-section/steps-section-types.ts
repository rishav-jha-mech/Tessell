import type { AppIconKeys } from "../../../../assets/icons";

export interface StepsSectionProps {
  button: {
    icon: AppIconKeys;
    label: string;
    isLoading: boolean;
    onClick: () => void;
  };
}
