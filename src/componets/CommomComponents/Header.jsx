import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from 'images/lordksix-logos_transparent.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearchLocation, FaChevronLeft } from 'react-icons/fa';
import SearchBox from 'componets/CommomComponents/SearchBox';
import 'styles/Header.css';
import LocationBtn from 'componets/CommomComponents/LocationBtn';
import NavBar from './NavBar';

const Header = () => {
  const location = useLocation();
  const [searchLocation, setSearchLocation] = useState(false);

  const returnBtn = (
    <Link
      to="/"
      className="navbarBtn"
      title="home"
    >
      <button type="button" className="flex-align">
        <FaChevronLeft />
      </button>
    </Link>
  );

  const mobileBtn = (
    <Link
      to="/modal"
      state={{ previousLocation: location }}
      className="flex-align navbarBtn"
      title="modal"
    >
      <GiHamburgerMenu />
    </Link>
  );

  const searchBtn = (
    <button type="button" onClick={() => setSearchLocation(true)} className="flex-align">
      <FaSearchLocation />
    </button>
  );

  return (
    <header className="stickyHeader">
      <div className="headerLogo">
        {(location.pathname !== '/') && returnBtn}
        <img
          src={logo}
          alt="Air Quality App"
          style={{
            height: '25px',
            width: 'auto',
          }}
          className={`${searchLocation ? 'toggleImg' : ''}`}
        />
        <h1 className="h1">Air Quality</h1>
      </div>
      {mobileBtn}
      <div className="full-header">
        {searchLocation ? <SearchBox handleSearchBtn={setSearchLocation} /> : searchBtn}
        <LocationBtn descrip="Get Location: " />
        <nav aria-label="main">
          <ul className="full-navbar">
            <NavBar />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
