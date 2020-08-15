import React from 'react';
import { MenuProps } from './Menu.types';

export const MenuContext = React.createContext('');

export const Menu = ({ children, active, title }: MenuProps) => {
  return (
    <MenuContext.Provider value={active}>
      <div className="sidemenu">{children}</div>
    </MenuContext.Provider>
  );
};
