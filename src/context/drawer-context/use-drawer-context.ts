import { createContext, useContext } from "react";
import type { DrawerContextType } from "./drawer-context-types";

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};
