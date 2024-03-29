// All the interfaces
export interface RulesProps {
    errMsg: string;
    type: string;
    limiter?: RegExp;
    min?: number;
    max?: number;
    maxSize?: number;
    fileType?: string;
    matchValue?: string;
}

export interface OptionsProps {
    label: string | JSX.Element;
    value: string;
    className?: string;
}

export interface InputProps {
    name: string;
    value: string | number | Array<string>;
    label: string;
    placeholder?: string;
    onChange: (params: onChangeParams) => void;
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
    disabled?: boolean;
}

export interface onChangeParams {
    value: string | Array<string> | File | number;
    isValid: boolean;
}
