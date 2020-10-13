import "./table.scss";
export declare const Table: ({ headings, values, className, }: {
    headings: Array<string>;
    values: Array<Array<{
        value: string | object;
        render?: Function;
    }>>;
    className?: string;
}) => JSX.Element;
