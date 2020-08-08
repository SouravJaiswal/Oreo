import React from 'react';

// All interface
interface Row {
  className?: string;
  children: React.ReactNode;
}

interface Col {
  className?: string;
  children: React.ReactNode;
  span: number;
  total: number;
}

export const Row = (props: Row) => {
  return (
    <div {...props} className={`row ${props.className}`}>
      {props.children}
    </div>
  );
};

export const Col = (props: Col) => {
  return (
    <div
      {...props}
      className={`col col-${props.span}-of-${props.total} ${props.className}`}>
      {props.children}
    </div>
  );
};
