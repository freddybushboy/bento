import React from "react";
import { ThemeProvider } from "styled-components";
import { CTA } from "../design-system";
import { theme } from "../theme";

const Home = () => (
  <ThemeProvider theme={theme}>
    <main>
      <CTA>Example</CTA>
    </main>
  </ThemeProvider>
);

export default Home;
