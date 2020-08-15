import React from 'react';

interface Col {
  className?: string;
  children: React.ReactNode;
  span: number;
  total: number;
}

export const Col = (props: Col) => {
  return (
    <div
      {...props}
      className={`col col-${props.span}-of-${props.total} ${props.className}`}>
      {props.children}
    </div>
  );
};
