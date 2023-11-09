import React from "react";
import { Cluster, ClusterItem } from "./Cluster";
import { ExampleBlock } from "../ExampleBlock";

export default {
  title: "Cluster",
};

export const Basic = () => (
  <Cluster spaceBetween={2}>
    <ClusterItem>
      <ExampleBlock inline>Item John</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item Paul</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item George</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item Ringo</ExampleBlock>
    </ClusterItem>
  </Cluster>
);

export const Responsive = () => (
  <Cluster spaceBetween={[2, 4, 6]}>
    <ClusterItem>
      <ExampleBlock inline>Item John</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item Paul</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item George</ExampleBlock>
    </ClusterItem>
    <ClusterItem>
      <ExampleBlock inline>Item Ringo</ExampleBlock>
    </ClusterItem>
  </Cluster>
);
