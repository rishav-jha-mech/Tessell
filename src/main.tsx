import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./app.tsx";
import { DrawerProvider } from "./context/drawer-context/drawer-context.tsx";
import "./index.css";
import { AppDefaultTheme } from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={AppDefaultTheme}>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ThemeProvider>
  </StrictMode>
);
