import React from 'react';
import './button.scss';
export declare const Button: (props: {
    children: React.ReactNode;
    className?: string;
    /**
    state could be 'default', 'primary',
    'success', 'danger', 'grey', 'text'
    **/
    state: string;
    onClick?: Function;
}) => JSX.Element;
