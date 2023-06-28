import { nanoid } from '@reduxjs/toolkit';
import LocationBtn from 'componets/CommomComponents/LocationBtn';
import SearchBox from 'componets/CommomComponents/SearchBox';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logoAir from 'images/pollution.png';

import 'styles/HomeBody.css';
import qualityMsg from 'lib/aqiString';

const HomeBody = () => {
  const airData = useSelector(selectAirData);
  const loadMessage = <span>Loading</span>;
  const errorMessage = <span className="error">Error retrieving data</span>;
  const currLocation = (
    <span>
      Information about:&nbsp;
      {airData?.locationData?.name || ''}
    </span>
  );
  const links = [
    { path: '/current', text: 'Current Air Quality' },
    { path: '/forecast', text: 'Forecast Air Quality' },
    { path: '/historical', text: 'Historical Air Quality' },
  ];

  const navbar = (
    links.map((link, i) => {
      if (i === 0) {
        return (
          <div key={nanoid()} className="catItem">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <img
                src={logoAir}
                alt="Air Icon"
                style={{
                  height: '90px',
                  width: 'auto',
                }}
              />
              <div>
                <p>{link.text}</p>
                <p>
                  Air Quality Index:&nbsp;
                  {qualityMsg(airData?.current[0]?.main?.aqi)}
                </p>
                <p>
                  Click for more information
                </p>
              </div>
            </NavLink>
          </div>
        );
      }
      return (
        <div key={nanoid()} className="catItem">
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <img
              src={logoAir}
              alt="Air Icon"
              style={{
                height: '90px',
                width: 'auto',
              }}
            />
            <div>
              <p>{link.text}</p>
              <p>
                Click for more information
              </p>
            </div>
          </NavLink>
        </div>
      );
    })
  );

  return (
    <div className="HomeSec">
      <SearchBox handleSearchBtn={() => false} />
      <div className="locationSec">
        <LocationBtn />
        <div className={`statusMsg${airData.isLoading || airData.error ? ' modalMsgActiv' : ''}`}>
          {airData.isLoading && loadMessage}
          {airData.error && errorMessage}
          {!airData.error && !airData.isLoading && currLocation}
        </div>
      </div>
      {navbar}
    </div>
  );
};

export default HomeBody;
