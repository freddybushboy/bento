import React from "react";
import { Grid } from "./Grid";
import { ExampleBlock } from "../ExampleBlock";

export default {
  title: "Grid",
};

export const Basic = () => (
  <Grid spaceBetween={2} min="300px">
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
  </Grid>
);

export const Responsive = () => (
  <Grid spaceBetween={[2, 4, 6]} min="300px">
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
    <ExampleBlock />
  </Grid>
);
