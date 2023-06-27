import { fetchPlace } from 'lib/fetchMapboxAPI';
import { FaLocationArrow } from 'react-icons/fa';

const LocationBtn = () => {
  const currentLocError = () => {
    console.error('Unable to retrieve your location');
  };

  const currentLocSucess = async (pos) => {
    const { latitude, longitude } = pos.coords;
    const res = await fetchPlace(`${longitude},${latitude}`);
    const city = {
      name: res.features[0].place_name,
      center: res.features[0].center,
    };
    console.log(city);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentLocSucess, currentLocError);
    } else {
      console.error('Geolocation not supported');
    }
  };
  const locationBtn = (
    <button
      type="button"
      onClick={() => handleLocation()}
      className="locationBtn"
    >
      Current Location:&nbsp;
      <FaLocationArrow />
    </button>
  );
  return (
    <>
      {locationBtn}
    </>
  );
};

export default LocationBtn;
