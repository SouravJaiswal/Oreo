import React from 'react';

export const H2 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 {...props} className={`heading heading--secondary ${props.className}`}>
      {props.children}
    </h2>
  );
};
