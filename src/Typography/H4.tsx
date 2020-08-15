import React from 'react';

export const H4 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h4 {...props} className={`heading heading--regular ${props.className}`}>
      {props.children}
    </h4>
  );
};
