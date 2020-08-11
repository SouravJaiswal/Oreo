import React from 'react';

export const Button = (props: {
  children: React.ReactNode;
  className?: string;
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
