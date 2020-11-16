import React from "react";
import { SliderProps } from "./Slider.types";
import "./slider.scss";
export declare class Slider extends React.Component {
    constructor(props: SliderProps);
    componentDidMount(): void;
    onTransitionEnd: (direction: any) => void;
    slide: (direction: any) => void;
    onHover: () => void;
    onLeave: () => void;
    render(): JSX.Element;
}
