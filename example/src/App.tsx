import React from "react";
import { ThemeProvider } from "styled-components";
import { CTA } from "./design-system";
import { theme } from "./theme";
import { Stack } from "bento";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spaceBetween="form">
        <div>
          <CTA>Example</CTA>
        </div>
        <div>
          <CTA variant="mission">Example</CTA>
        </div>
        <div>
          <CTA elevation="raised">Example</CTA>
        </div>
      </Stack>
    </ThemeProvider>
  );
};

export { App };
