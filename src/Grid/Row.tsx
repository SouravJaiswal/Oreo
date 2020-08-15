import React from 'react';

interface Row {
  className?: string;
  children: React.ReactNode;
}

export const Row = (props: Row) => {
  return (
    <div {...props} className={`row ${props.className}`}>
      {props.children}
    </div>
  );
};
