import React from "react";
import "./button.scss";
export declare const Button: ({ type, htmlType, onClick, children, disabled, className, loading, }: {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    /**
  state could be 'default', 'primary',
  'success', 'danger', 'grey', 'text', 'bordered'
  **/
    type: "primary" | "success" | "danger" | "grey" | "text" | "bordered";
    htmlType?: "submit" | "reset" | "button";
    onClick?: Function;
    loading?: boolean;
}) => JSX.Element;
