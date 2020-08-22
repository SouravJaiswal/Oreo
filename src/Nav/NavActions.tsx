import React, { useContext } from 'react';
import { NavContext } from './Nav';

export const NavActions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const menu = useContext(NavContext);
  const menuClassName = menu ? 'nav__open' : 'nav__close';
  return (
    <div className={`nav__actions ${menuClassName} ${className}`}>
      {children}
    </div>
  );
};
