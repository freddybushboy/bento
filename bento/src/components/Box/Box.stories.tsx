import React from "react";
import { Box } from "./Box";

export default {
  title: "Box",
};

export const Basic = () => (
  <Box all={[4, 8, 12]}>
    <div>hello</div>
  </Box>
);
