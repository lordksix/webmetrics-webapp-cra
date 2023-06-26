import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import logo from 'images/lordksix-logos_transparent.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const links = [
  { path: 'current', text: 'Current' },
  { path: 'forecast', text: 'Forecast' },
  { path: 'Historical', text: 'Historical' },
  { path: '/', text: 'Home' },
];

const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState({});
  const [showLogoTitleBox, setShowLogoTitleBox] = useState({ display: 'flex' });
  return (
    <nav className="navbar">
      <div className="logo-title-box" style={showLogoTitleBox}>
        <img
          src={logo}
          alt="lordksix's Air Quality"
          style={{
            height: '60px',
            width: 'auto',
          }}
        />
        <h1>lordksix&lsquo;s Air Quality</h1>
      </div>
      <div className="btn-box">
        {toggleMobileMenu.display ? (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({});
              setShowLogoTitleBox({ display: 'flex' });
            }}
          >
            <GrClose />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({ display: 'flex' });
              setShowLogoTitleBox({ display: 'none' });
            }}
          >
            <GiHamburgerMenu />
          </button>
        ) }
      </div>
      <ul className="nav-list" style={toggleMobileMenu}>
        {links.map((link) => (
          <li key={nanoid()}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
