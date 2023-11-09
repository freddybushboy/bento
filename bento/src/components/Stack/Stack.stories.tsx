import React from "react";
import { Stack } from "./Stack";
import { ExampleBlock } from "../ExampleBlock";

export default {
  title: "Stack",
};

export const Basic = () => (
  <Stack spaceBetween={2}>
    <ExampleBlock />
    <ExampleBlock />
  </Stack>
);

export const Responsive = () => (
  <Stack spaceBetween={[2, 4, 6]}>
    <ExampleBlock />
    <ExampleBlock />
  </Stack>
);

export const DirectionRow = () => (
  <Stack spaceBetween={[2, 4, 6]} direction="row">
    <ExampleBlock style={{ width: 60 }} />
    <ExampleBlock style={{ width: 60 }} />
  </Stack>
);
