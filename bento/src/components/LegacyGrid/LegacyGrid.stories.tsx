import React from "react";
import { Col } from "./Col";
import { Row } from "./Row";
import { ExampleBlock } from "../ExampleBlock";

export default {
  title: "LegacyGrid",
};

export const Default = () => (
  <Row isContainer>
    <Col>
      <ExampleBlock />
    </Col>
    <Col span={6}>
      <ExampleBlock />
    </Col>
    <Col span={6}>
      <ExampleBlock />
    </Col>
  </Row>
);

export const Responsive = () => (
  <Row isContainer>
    <Col span={[6, 4, 3]}>
      <ExampleBlock />
    </Col>
    <Col span={[6, 4, 3]}>
      <ExampleBlock />
    </Col>
    <Col span={[6, 4, 3]}>
      <ExampleBlock />
    </Col>
    <Col span={[6, 12, 3]}>
      <ExampleBlock />
    </Col>
  </Row>
);

export const Nested = () => (
  <>
    <Row isContainer>
      <Col span={[12, 12, 6]}>
        <Row>
          <Col span={[12, 12, 4]}>
            <ExampleBlock />
          </Col>
          <Col span={[12, 12, 4]}>
            <ExampleBlock />
          </Col>
          <Col span={[12, 12, 4]}>
            <ExampleBlock />
          </Col>
        </Row>
      </Col>
      <Col span={[12, 12, 6]}>
        <ExampleBlock />
      </Col>
    </Row>
  </>
);
