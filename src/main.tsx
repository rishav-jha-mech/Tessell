import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { ThemeProvider } from "styled-components";
import { AppDefaultTheme } from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={AppDefaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
