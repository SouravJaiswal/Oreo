import React from "react";
interface Col {
    className?: string;
    children: React.ReactNode;
    span?: number;
    total?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
export declare const Col: (props: Col) => JSX.Element;
export {};
