import React from 'react';

export const Button = (props: {
  children: React.ReactNode;
  className?: string;
  state: string;
}) => {
  return (
    <button
      {...props}
      className={`button button--${props.state} ${props.className}`}>
      {props.children}
    </button>
  );
};
