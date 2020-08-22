import React from 'react';

export const NavActions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`nav__actions ${className}`}>{children}</div>;
};
