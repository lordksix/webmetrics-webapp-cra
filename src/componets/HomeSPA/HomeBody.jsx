import { nanoid } from '@reduxjs/toolkit';
import LocationBtn from 'componets/CommomComponents/LocationBtn';
import SearchBox from 'componets/CommomComponents/SearchBox';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import 'styles/HomeBody.css';

const HomeBody = () => {
  const airData = useSelector(selectAirData);
  const loadMessage = <span>Loading</span>;
  const errorMessage = <span className="error">Error</span>;
  const currLocation = (
    <span>
      Information about:&nbsp;
      {airData?.locationData?.name || ''}
    </span>
  );
  console.log(airData.current);
  const links = [
    { path: '/current', text: 'Current Air Quality' },
    { path: '/forecast', text: 'Forecast Air Quality' },
    { path: '/historical', text: 'Historical Air Quality' },
  ];

  const navbar = (
    links.map((link, i) => {
      if (i === 0) {
        return (
          <li key={nanoid()} className="catItem">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <p>{link.text}</p>
              <p>
                Air Quality Index:&nbsp;
                {airData?.current[0]?.main?.aqi || ''}
              </p>
              <p>
                Click for more information
              </p>
            </NavLink>
          </li>
        );
      }
      return (
        <li key={nanoid()} className="catItem">
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <p>{link.text}</p>
            <p>
              Click for more information
            </p>
          </NavLink>
        </li>
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
      <ul className="listCat">
        {navbar}
      </ul>
    </div>
  );
};

export default HomeBody;
