import React from "react";
import { Container } from "./Container";
import { ExampleBlock } from "../ExampleBlock";
import styled from "styled-components";
import { Stack } from "../Stack";

export default {
  title: "Container",
};

const Example = styled(Stack)`
  ${ExampleBlock} {
    background: red;

    @container (min-width: 500px) {
      background: green;
    }
  }
`;

export const Basic = () => (
  <Stack spaceBetween={8}>
    <Container>
      <Example spaceBetween={4}>
        <ExampleBlock />
        <ExampleBlock />
        <ExampleBlock />
      </Example>
    </Container>
    <Container style={{ maxWidth: 300 }}>
      <Example spaceBetween={4}>
        <ExampleBlock />
        <ExampleBlock />
        <ExampleBlock />
      </Example>
    </Container>
  </Stack>
);
