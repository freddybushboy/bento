import React from "react";
import { ThemeProvider } from "styled-components";
import { CTA } from "./design-system";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <p>
          <CTA>Example</CTA>
        </p>
        <p>
          <CTA variant="mission">Example</CTA>
        </p>
        <p>
          <CTA elevation="raised">Example</CTA>
        </p>
      </main>
    </ThemeProvider>
  );
};

export { App };
