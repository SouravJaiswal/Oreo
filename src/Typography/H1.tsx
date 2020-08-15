import React from 'react';

export const H1 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 {...props} className={`heading heading--primary ${props.className}`}>
      {props.children}
    </h1>
  );
};
