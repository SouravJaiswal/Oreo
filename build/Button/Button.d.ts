import React from 'react';
import './button.scss';
export declare const Button: ({ type, onClick, children, disabled, className, loading, }: {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    /**
    state could be 'default', 'primary',
    'success', 'danger', 'grey', 'text'
    **/
    type: string;
    onClick?: Function;
    loading?: boolean;
}) => JSX.Element;
