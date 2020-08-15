import React from 'react';

export const HeadingJumbo = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 {...props} className={`heading heading--jumbo ${props.className}`}>
      {props.children}
    </h1>
  );
};
