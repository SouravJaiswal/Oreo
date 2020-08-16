import React from 'react';
interface Nav {
    logo: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    type?: string;
}
export declare const Nav: ({ logo, children, className, type }: Nav) => JSX.Element;
export {};
