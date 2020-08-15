import React from 'react';

export const Li = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <li {...props} className={`li u-margin-bottom-nano ${props.className}`}>
      {props.children}
    </li>
  );
};
