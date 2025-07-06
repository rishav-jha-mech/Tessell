import type { AlertThemeMappingType } from "./alert-types";

export const AlertThemeMapping: AlertThemeMappingType = {
  info: {
    icon: "InfoIcon",
    iconColor: "primary-300",
    backgroundColor: "secondary-0",
  },
  success: {
    icon: "CheckboxCheck",
    iconColor: "success-300",
    backgroundColor: "success-0",
  },
  error: {
    icon: "CmdE",
    iconColor: "danger-300",
    backgroundColor: "danger-0",
  },
  warning: {
    icon: "Announcement",
    iconColor: "warning-300",
    backgroundColor: "warning-0",
  },
};
