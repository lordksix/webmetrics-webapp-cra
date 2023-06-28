import qualityMsg from 'lib/aqiString';
import PropTypes from 'prop-types';

const AirQuality = (props) => {
  const { aqi } = props;

  return (
    <div className="airQlyWrapper">
      <p>Air Quality Index</p>
      <p>{qualityMsg(aqi)}</p>
    </div>
  );
};

AirQuality.propTypes = {
  aqi: PropTypes.number.isRequired,
};

export default AirQuality;
