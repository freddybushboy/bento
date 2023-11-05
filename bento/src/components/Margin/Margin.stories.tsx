import React from "react";
import { Margin } from "./Margin";
import { Box } from "../Box";
import styled from "styled-components";

const Block = styled(Box)`
  background: black;
`;

const Card = styled(Box)`
  border: 1px solid black;
`;

export default {
  title: "Margin",
};

export const Basic = () => (
  <>
    <Block all={2} />
    <Margin top={4}>
      <Block all={2} />
    </Margin>
  </>
);

export const Negative = () => (
  <Card all={[4, 8]}>
    <Margin horizontal={[4, 8]} negative>
      <Block all={[4, 8]} />
    </Margin>
  </Card>
);
