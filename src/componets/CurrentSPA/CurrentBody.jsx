import AirQuality from 'componets/CommomComponents/AirQuality';
import DataComponent from 'componets/CommomComponents/DataComponent';
import LocationComp from 'componets/CommomComponents/LocationComp';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import dataString from 'lib/dtSting';
import { useSelector } from 'react-redux';
import 'styles/CurrentBody.css';

const CurrentBody = () => {
  const airData = useSelector(selectAirData);
  const { aqi } = airData?.current[0]?.main || { aqi: -1 };
  const {
    co, no, no2, o3,
    so2, pm10, nh3,
  } = airData?.current[0]?.components || {
    co: -1,
    no: -1,
    no2: -1,
    o3: -1,
    so2: -1,
    pm10: -1,
    nh3: -1,
  };
  const pm25 = airData?.current[0]?.components?.pm2_5 || -1;
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
          POLLUTANT CONCENTRATION IN UG/M3
        </p>
      </div>
      <div className="secBody">
        <DataComponent dataName="CO" dataInfo={co} />
        <DataComponent dataName="NO" dataInfo={no} />
        <DataComponent dataName="NO2" dataInfo={no2} />
        <DataComponent dataName="O3" dataInfo={o3} />
        <DataComponent dataName="SO2" dataInfo={so2} />
        <DataComponent dataName="PM2.5" dataInfo={pm25} />
        <DataComponent dataName="PM10" dataInfo={pm10} />
        <DataComponent dataName="NH3" dataInfo={nh3} />
      </div>
    </div>
  );
};

export default CurrentBody;
