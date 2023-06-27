import { nanoid } from '@reduxjs/toolkit';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from 'images/lordksix-logos_transparent.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBox from './SearchBox';
import 'styles/Header.css';

const links = [
  { path: '/current', text: 'Current' },
  { path: '/forecast', text: 'Forecast' },
  { path: '/historical', text: 'Historical' },
  { path: '/', text: 'Home' },
];

const Header = () => {
  const location = useLocation();

  const mobileBtn = (
    <Link
      to="/modal"
      state={{ previousLocation: location }}
      className="navbarBtn"
    >
      <GiHamburgerMenu />
    </Link>
  );

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
    <header className="stickyHeader">
      <div className="headerLogo">
        <img
          src={logo}
          alt="Air Quality App"
          style={{
            height: '25px',
            width: 'auto',
          }}
        />
        <h1 className="h1">Air Quality</h1>
      </div>
      {mobileBtn}
      <div className="full-header">
        <SearchBox />
        <nav aria-label="main">
          <ul className="full-navbar">
            {navbar}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
