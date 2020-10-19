import { Row, Col } from "./index";
import React from "react";

export default {
  title: "Grid",
};

export const RowGrid = () => {
  return (
    <Row>
      <Col span={1} total={3}>
        <div styles={{ height: "100px", width: "100px" }}>Hello World</div>
      </Col>
      <Col span={1} total={3}>
        <div styles={{ height: "100px", width: "100px" }}>Hello World</div>
      </Col>
      <Col span={1} total={3}>
        <div styles={{ height: "100px", width: "100px" }}>Hello World</div>
      </Col>
      <Col span={1} total={3}>
        <div styles={{ height: "100px", width: "100px" }}>Hello World</div>
      </Col>
      <Col span={1} total={3}>
        <div styles={{ height: "100px", width: "100px" }}>Hello World</div>
      </Col>
    </Row>
  );
};
