/// <reference types="node" />
import React from "react";
import { SliderProps } from "./Slider.types";
import "./slider.scss";
interface SliderState {
    sliding: boolean;
    timer: NodeJS.Timeout;
    data: SliderProps["data"];
}
export declare class Slider extends React.Component<SliderProps, SliderState> {
    constructor(props: any);
    componentDidMount(): void;
    onTransitionEnd: (direction: any) => void;
    slide: (direction: any) => void;
    onHover: () => void;
    onLeave: () => void;
    render(): JSX.Element;
}
export {};
