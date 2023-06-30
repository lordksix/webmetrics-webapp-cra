import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { path: '/current', text: 'Current' },
    { path: '/forecast', text: 'Forecast' },
    { path: '/historical', text: 'Historical' },
  ];

  const navbar = (
    links.map((link) => (
      <li key={nanoid()}>
        <NavLink
          to={link.path}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {link.text}
        </NavLink>
      </li>
    ))
  );

  return (
    <>
      {navbar}
    </>
  );
};

export default NavBar;
