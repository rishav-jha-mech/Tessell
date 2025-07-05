import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { AppDefaultTheme } from "../src/theme/theme"; // 👉 adjust path

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={AppDefaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
