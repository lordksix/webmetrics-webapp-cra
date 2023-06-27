import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { GiCancel } from 'react-icons/gi';
import logo from 'images/lordksix-logos_transparent.png';
import SearchBox from './SearchBox';
import 'styles/MenuModal.css';
import LocationBtn from './LocationBtn';

const MenuModal = () => {
  const modalRef = useRef();
  const location = useLocation();
  const airData = useSelector(selectAirData);

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  const links = [
    { path: '/current', text: 'Current' },
    { path: '/forecast', text: 'Forecast' },
    { path: '/historical', text: 'Historical' },
    { path: '/', text: 'Home' },
  ];

  const navbar = (
    links.map((link) => (
      <li
        key={nanoid()}
        className={`sqMenu${(location?.state?.previousLocation?.pathname === link.path) ? ' modalActive' : ''}`}
      >
        <NavLink
          to={link.path}
          className="sqAnchor"
        >
          <span className={`${(location?.state?.previousLocation?.pathname === link.path) ? 'active' : undefined}`}>{link.text}</span>
        </NavLink>
      </li>
    ))
  );

  const mobileBtn = (
    <Link
      to={location?.state?.previousLocation?.pathname || '/'}
      className="navbarBtn"
    >
      <button type="button" className="flex-align">
        <GiCancel />
      </button>
    </Link>
  );

  const loadMessage = <span>Loading</span>;
  const errorMessage = <span className="error">Error</span>;

  return (
    <section className="modalMenuWrapper" ref={modalRef}>
      <div className="modalMenu">
        <div className="modalTitle">
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
        </div>
        <div className="modalBody">
          <SearchBox />
          <LocationBtn />
          <nav aria-label="mobile" className="modalNavbar">
            <ul>
              {navbar}
            </ul>
          </nav>
          <div className={`modalMsg${airData.isLoading || airData.error ? ' modalMsgActiv' : ''}`}>
            {airData.isLoading && loadMessage}
            {airData.error && errorMessage}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuModal;
