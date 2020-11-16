/// <reference types="react" />
export interface SliderProps {
    className?: string;
    data: Array<{
        img: JSX.Element;
        desc: string;
        heading: string;
    }>;
}
