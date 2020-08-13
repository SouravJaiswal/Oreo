import React from 'react';

export const Card = (props: {
  children: React.ReactNode;
  type: string;
  className?: string;
}) => {
  return (
    <div {...props} className={`card card--${props.type} ${props.className}`}>
      {props.children}
    </div>
  );
};
