import { css } from "styled-components";
import { ThemeBreakpoints, type BreakpointDevices } from "../theme/theme-breakpoints/theme-breakpoints";

type RespondTo = {
  [key in BreakpointDevices]: (...args: Parameters<typeof css>) => ReturnType<typeof css>;
};

export const respondTo = Object.keys(ThemeBreakpoints).reduce((acc, label) => {
  acc[label as BreakpointDevices] = (...args: Parameters<typeof css>) => css`
    @media (min-width: ${ThemeBreakpoints[label as keyof typeof ThemeBreakpoints]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as RespondTo);
