import type { Colors } from "../tokens/colors/colors";
import type { Typography } from "../tokens/text/typography";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: typeof Typography;
    colors: typeof Colors;
  }
}
