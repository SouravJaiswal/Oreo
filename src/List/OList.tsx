import React from 'react';

export const OList = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ol {...props} className={`olist ${props.className}`}>
      {props.children}
    </ol>
  );
};
