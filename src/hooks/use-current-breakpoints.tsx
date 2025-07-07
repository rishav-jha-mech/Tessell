import { useState, useEffect } from "react";
import { BreakpointDevices } from "../theme/constants/breakpoints-devices";

export const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("mobile");

  const getBreakpoint = (width: number) => {
    if (width >= BreakpointDevices.widescreen) return "widescreen";
    if (width >= BreakpointDevices.desktop) return "desktop";
    if (width >= BreakpointDevices.tablet) return "tablet";
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
