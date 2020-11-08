import React from "react";
import "./button.scss";
import { Loading } from "../Loading";

export const Button = ({
  type,
  onClick,
  children,
  disabled,
  className,
  loading = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  /**
  state could be 'default', 'primary', 
  'success', 'danger', 'grey', 'text', 'bordered'
  **/
  type: "primary" | "success" | "danger" | "grey" | "text" | "bordered";
  onClick?: Function;
  loading?: boolean;
}) => {
  // Call the onClick from the parent
  const onButtonClick = () => {
    // do not execute if the button is in loading state
    if (loading) return;

    !!onClick && onClick();
  };

  return (
    <button
      disabled={disabled}
      onClick={onButtonClick}
      className={`button button--${type} ${className}`}
    >
      {loading ? (
        <span className="button__animation">
          <Loading type="default" className="button__loading" />
        </span>
      ) : (
        <span className="button__text">{children}</span>
      )}
    </button>
  );
};
