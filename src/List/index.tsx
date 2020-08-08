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
