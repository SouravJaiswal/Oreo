import React from 'react';

export const Paragraph = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p {...props} className={`paragraph ${props.className}`}>
      {props.children}
    </p>
  );
};
