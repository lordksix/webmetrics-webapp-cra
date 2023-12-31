import { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FaChevronLeft, FaHome } from 'react-icons/fa';
import LocationComp from 'componets/CommomComponents/LocationComp';
import AirQuality from 'componets/CommomComponents/AirQuality';
import DataComponent from 'componets/CommomComponents/DataComponent';
import dataString from 'lib/dtSting';
import 'styles/RelativeModal.css';

const RelativeAQModal = () => {
  const location = useLocation();
  const { title } = useParams();
  const { airData, nameLocale } = location?.state || '';
  const { aqi } = airData?.main || { aqi: -1 };
  const {
    co, no, no2, o3,
    so2, pm10, nh3,
  } = airData?.components || {
    co: -1,
    no: -1,
    no2: -1,
    o3: -1,
    so2: -1,
    pm10: -1,
    nh3: -1,
  };
  const pm25 = airData?.components?.pm2_5 || -1;
  const dt = dataString(airData?.dt || -1);
  const modalRef = useRef();

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  const homeBtn = (
    <Link
      to="/"
      className="flex-align navbarBtn"
    >
      <FaHome />
    </Link>
  );

  const returnBtn = (
    <Link
      to={location?.state?.previousLocation?.pathname || '/'}
      className="navbarBtn"
    >
      <button type="button" className="flex-align">
        <FaChevronLeft />
      </button>
    </Link>
  );

  return (
    <section className="forecastModalWrapper" ref={modalRef}>
      <div className="forecastModal">
        <div className="forecastModalTitle">
          {returnBtn}
          <div className="formodalTitle">
            {title}
            &nbsp;air quality
          </div>
          {homeBtn}
        </div>
        <div className="secTitle">
          <AirQuality aqi={aqi} />
          <LocationComp
            location={nameLocale}
            dateLocale={dt}
          />
        </div>
        <div className="sepSec">
          <p>
            Pollutant Concentration in microgram/m3
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
    </section>
  );
};

export default RelativeAQModal;
