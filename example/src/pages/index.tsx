import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { CTA } from "../design-system";
import { theme } from "../theme";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Helmet title="Bento - Example" />
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

export default Home;
