import React from "react";
import { Margin } from "./Margin";
import { Box } from "../Box";
import styled from "styled-components";
import { ExampleBlock } from "../ExampleBlock";

const Card = styled(Box)`
  border: 1px solid black;
`;

export default {
  title: "Margin",
};

export const Basic = () => (
  <>
    <ExampleBlock />
    <Margin top={4}>
      <ExampleBlock />
    </Margin>
  </>
);

export const Negative = () => (
  <Card all={[4, 8]}>
    <Margin horizontal={[4, 8]} negative>
      <ExampleBlock />
    </Margin>
  </Card>
);
