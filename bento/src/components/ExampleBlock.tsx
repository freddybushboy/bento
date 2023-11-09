import React from "react";
import styled from "styled-components";
import { Box } from "./Box";

type Props = { inline?: boolean };

export const StyledExampleBlock = styled(Box)<Props>(
  ({ inline }) => `
    display: ${inline ? "inline-block" : "block"};
    background: black;
    color: white;
  `
);

export const ExampleBlock = (props: JSX.IntrinsicElements["div"] & Props) => {
  return <StyledExampleBlock all={2} {...props} />;
};
