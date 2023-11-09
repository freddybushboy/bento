import React from "react";
import { Switcher } from "./Switcher";
import { ExampleBlock } from "../ExampleBlock";

export default {
  title: "Switcher",
};

export const Basic = () => (
  <Switcher spaceBetween={2} threshold="300px">
    <ExampleBlock />
    <ExampleBlock />
  </Switcher>
);

export const Responsive = () => (
  <Switcher spaceBetween={[2, 4, 6]} threshold="300px">
    <ExampleBlock />
    <ExampleBlock />
  </Switcher>
);
