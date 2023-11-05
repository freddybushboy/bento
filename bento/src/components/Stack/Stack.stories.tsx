import React from "react";
import { Stack } from "./Stack";
import styled from "styled-components";
import { Box } from "../Box";

export default {
  title: "Stack",
};

const Block = styled(Box)`
  background: black;
`;

export const Basic = () => (
  <Stack spaceBetween={2}>
    <Block all={2} />
    <Block all={2} />
  </Stack>
);

export const Responsive = () => (
  <Stack spaceBetween={[2, 4, 6]}>
    <Block all={2} />
    <Block all={2} />
  </Stack>
);
