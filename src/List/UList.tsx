import React from 'react';

export const UList = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ul {...props} className={`ulist ${props.className}`}>
      {props.children}
    </ul>
  );
};
