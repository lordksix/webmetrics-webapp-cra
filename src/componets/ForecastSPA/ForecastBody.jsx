import { nanoid } from '@reduxjs/toolkit';
import AirQuality from 'componets/CommomComponents/AirQuality';
import DataObjComponent from 'componets/CommomComponents/DataObjComponent';
import LocationComp from 'componets/CommomComponents/LocationComp';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import dataString from 'lib/dtSting';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import 'styles/RelativeBody.css';

const ForecastBody = () => {
  const airData = useSelector(selectAirData);
  const location = useLocation();
  const { aqi } = airData?.current[0]?.main || { aqi: -1 };

  const eightHours = airData.forecast.filter((element, index) => index < 8);
  const links = eightHours.map((element) => (
    <Link
      key={nanoid()}
      to="/relativemodal/forecast"
      state={{
        previousLocation: location,
        airData: element,
        nameLocale: airData?.locationData?.name || 'No location',
      }}
    >
      <DataObjComponent
        aqi={element?.main?.aqi || -1}
        dateLocale={dataString(element?.dt || -1)}
      />
    </Link>
  ));
  return (
    <div className="currentAQI">
      <div className="secTitle">
        <AirQuality aqi={aqi} />
        <LocationComp
          location={airData?.locationData?.name || 'No location'}
          dateLocale={dataString(airData?.current[0]?.dt || -1)}
        />
      </div>
      <div className="sepSec">
        <p>
          FORECAST AIR QUALITY: NEXT 8 HOURS
        </p>
      </div>
      <div className="forecastBody">
        {links}
      </div>
    </div>
  );
};

export default ForecastBody;
