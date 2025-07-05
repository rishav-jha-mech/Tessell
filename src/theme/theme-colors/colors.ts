import { DangerColors } from "./danger-colors";
import { DarkColors } from "./dark-colors";
import { OpacityColors } from "./opacity-colors";
import { PrimaryColors } from "./primary-colors";
import { SecondaryColors } from "./secondary-colors";
import { SuccessColors } from "./success-colors";
import { SurfaceColors } from "./surface-colors";
import { TextColors } from "./text-colors";
import { WarningColors } from "./warning-colors";

export const ThemeColors = {
  ...DangerColors,
  ...DarkColors,
  ...OpacityColors,
  ...PrimaryColors,
  ...SecondaryColors,
  ...SuccessColors,
  ...SurfaceColors,
  ...TextColors,
  ...WarningColors,
};

export type ColorKeys = keyof typeof ThemeColors;
