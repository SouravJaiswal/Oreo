import React from 'react';

export const NavMenu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`nav__menu ${className}`}>{children}</div>;
};
