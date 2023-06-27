import { addLocation, getAirData } from 'features/AirPollution/airDataSlice';
import { fetchPlace } from 'lib/fetchMapboxAPI';
import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const LocationBtn = () => {
  const dispatch = useDispatch();
  const [currentLocationErr, setCurrentLocationErr] = useState(false);

  const currentLocError = () => {
    setCurrentLocationErr(true);
  };

  const currentLocSucess = async (pos) => {
    const { latitude, longitude } = pos.coords;
    const res = await fetchPlace(`${longitude},${latitude}`);
    const city = {
      name: res.features[0].place_name,
      center: res.features[0].center,
    };
    dispatch(addLocation(city));
    console.log(city);
    dispatch(getAirData(city.center));
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      setCurrentLocationErr(false);
      navigator.geolocation.getCurrentPosition(currentLocSucess, currentLocError);
    } else {
      setCurrentLocationErr(true);
    }
  };
  const errorSpan = (
    <span style={{ color: 'red' }}>Unable to retrieve your location</span>
  );
  const locationBtn = (
    <button
      type="button"
      onClick={() => handleLocation()}
      className="locationBtn"
    >
      Current Location:&nbsp;
      <FaLocationArrow />
      {currentLocationErr && errorSpan}
    </button>
  );
  return (
    <>
      {locationBtn}
    </>
  );
};

export default LocationBtn;
