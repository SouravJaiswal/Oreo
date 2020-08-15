import React from 'react';

interface Nav {
  logo: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: string;
}

export const Nav = ({ logo, children, className, type = 'side' }: Nav) => {
  return (
    <div className={`nav nav--${type} ${className}`}>
      <div className="nav__logo ">{logo}</div>
      {children}
    </div>
  );
};
