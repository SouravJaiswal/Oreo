import React, { useContext } from 'react';
import { NavContext } from './Nav';

export const NavMenu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const menu = useContext(NavContext);

  return <div className={`nav__menu ${className}`}>{children}</div>;
};
