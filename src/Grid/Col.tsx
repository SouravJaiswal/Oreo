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

export const Col = (props: Col) => {
    const { xs, sm, md, lg, xl } = props;

    if (props.span && props.total) {
        return (
            <div
                {...props}
                className={`col col-${props.span}-of-${props.total} ${props.className}`}
            >
                {props.children}
            </div>
        );
    } else {
        let layoutClasses = `col-12-layout `;
        if (xs) {
            layoutClasses += `col-xs-${xs} `;
        }
        if (sm) {
            layoutClasses += `col-sm-${sm} `;
        }
        if (md) {
            layoutClasses += `col-md-${md} `;
        }
        if (lg) {
            layoutClasses += `col-lg-${lg} `;
        }
        if (md) {
            layoutClasses += `col-xl-${xl}`;
        }
        return (
            <div {...props} className={`${layoutClasses} ${props.className}`}>
                {props.children}
            </div>
        );
    }
};
