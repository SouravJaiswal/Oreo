import React from 'react';

export const H3 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 {...props} className={`heading heading--tertiary ${props.className}`}>
      {props.children}
    </h3>
  );
};
