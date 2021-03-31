import { Row, Col } from "./index";
import React from "react";
import "./grid.stories.scss";

export default {
    title: "Grid",
};

export const RowGrid = () => {
    return (
        <Row>
            <Col span={1} total={5}>
                <div styles={{ height: "100px", width: "100px" }}>
                    Hello World
                </div>
            </Col>
            <Col span={1} total={5}>
                <div styles={{ height: "100px", width: "100px" }}>
                    Hello World
                </div>
            </Col>
            <Col span={1} total={5}>
                <div styles={{ height: "100px", width: "100px" }}>
                    Hello World
                </div>
            </Col>
            <Col span={1} total={5}>
                <div styles={{ height: "100px", width: "100px" }}>
                    Hello World
                </div>
            </Col>
            <Col span={1} total={5}>
                <div styles={{ height: "100px", width: "100px" }}>
                    Hello World
                </div>
            </Col>
        </Row>
    );
};

export const Grid12Layout = () => {
    return (
        <Row>
            <Col xs={3}>
                <div className="item">Hello World</div>
            </Col>
            <Col xs={3}>
                <div className="item">Hello World</div>
            </Col>
            <Col xs={3}>
                <div className="item">Hello World</div>
            </Col>
            <Col xs={3}>
                <div className="item">Hello World</div>
            </Col>
        </Row>
    );
};
