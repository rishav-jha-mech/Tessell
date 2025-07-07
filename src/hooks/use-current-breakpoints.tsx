import { useState, useEffect } from "react";
import { ThemeBreakpoints } from "../theme/theme-breakpoints/theme-breakpoints";

export const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("mobile");

  const getBreakpoint = (width: number) => {
    if (width >= ThemeBreakpoints.widescreen) return "widescreen";
    if (width >= ThemeBreakpoints.desktop) return "desktop";
    if (width >= ThemeBreakpoints.tablet) return "tablet";
    return "mobile";
  };

  useEffect(() => {
    const update = () => setBreakpoint(getBreakpoint(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
};
