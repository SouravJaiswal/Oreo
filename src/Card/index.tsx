import React from 'react';

export const Card = (props: {
  children: React.ReactNode;
  /** Border,  */
  type: 'border' | 'shadow' | 'default';
  className?: string;
}) => {
  return (
    <div {...props} className={`card card--${props.type} ${props.className}`}>
      {props.children}
    </div>
  );
};
