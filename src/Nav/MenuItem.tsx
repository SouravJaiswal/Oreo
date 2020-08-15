import React, { useContext } from 'react';
import { MenuItemProps } from './MenuItem.types';
import { MenuContext } from './Menu';

export const MenuItem = ({
  children,
  value,
  className = '',
}: MenuItemProps) => {
  const active = useContext(MenuContext);
  const activeClass =
    !!value && value === active ? 'sidemenu__item--active' : '';
  return (
    <span className={`sidemenu__item ${activeClass} ${className}`}>
      {children}
    </span>
  );
};
