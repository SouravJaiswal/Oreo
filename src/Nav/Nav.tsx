import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

interface Nav {
  logo: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: string;
}

export const NavContext = React.createContext(false);

export const Nav = ({ logo, children, className, type = 'side' }: Nav) => {
  let [menu, toggleMenu] = useState(false);

  const menuClassName = menu ? 'nav__open' : 'nav__close';

  return (
    <NavContext.Provider value={menu}>
      <div
        className={`nav nav--${type} ${className} ${menuClassName}`}
        onClick={() => toggleMenu(false)}>
        <div className="nav__logo">{logo}</div>
        {children}
        <div className="nav__icon">
          {menu ? (
            <AiOutlineClose
              onClick={(e) => {
                e.stopPropagation();
                return toggleMenu(false);
              }}
            />
          ) : (
            <FiMenu
              onClick={(e) => {
                e.stopPropagation();
                return toggleMenu(true);
              }}
            />
          )}
        </div>
      </div>
    </NavContext.Provider>
  );
};
