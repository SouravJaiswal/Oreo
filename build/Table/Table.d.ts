/// <reference types="react" />
import "./table.scss";
export declare const Table: ({ headings, values, className, }: {
    headings: Array<string>;
    values: Array<Array<{
        value: any;
        render?: Function;
        isHeading?: boolean;
    }>>;
    className?: string;
}) => JSX.Element;
