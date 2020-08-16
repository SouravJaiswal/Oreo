import React from 'react';
import './button.scss';

export const Button = (props: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  /**
  state could be 'default', 'primary', 
  'success', 'danger', 'grey', 'text'
  **/
  state: string;
  onClick?: Function;
}) => {
  // Call the onClick from the parent
  const onClick = () => {
    !!props.onClick && props.onClick();
  };

  return (
    <button
      {...props}
      onClick={onClick}
      className={`button button--${props.state} ${props.className}`}>
      {props.children}
    </button>
  );
};
