/// <reference types="react" />
export interface RulesProps {
    errMsg: string;
    type: string;
    limiter?: string;
    min?: number;
    max?: number;
    maxSize?: number;
    fileType?: string;
}
export interface OptionsProps {
    label: string;
    value: string;
}
export interface InputProps {
    name: string;
    value: string | number | Array<string>;
    label: string;
    placeholder?: string;
    onChange: Function;
    min?: number;
    max?: number;
    type: string;
    className?: string;
    icon?: React.ReactNode;
    rules?: Array<RulesProps>;
    autoFocus?: boolean;
    options?: Array<OptionsProps>;
    initialValue?: string;
    accept?: string;
    full?: boolean;
}