import qualityMsg from 'lib/aqiString';
import PropTypes from 'prop-types';
import { WiBarometer } from 'react-icons/wi';

const AirQuality = (props) => {
  const { aqi } = props;

  const airQuality = qualityMsg(aqi);

  let msgColor;
  switch (airQuality) {
    case 'Good':
      msgColor = 'var(--bg-container-green)';
      break;
    case 'Fair':
      msgColor = 'var(--bg-container-green-light)';
      break;
    case 'Moderate':
      msgColor = 'var(--bg-container-yellow)';
      break;
    case 'Poor':
      msgColor = 'var(--bg-container-orange)';
      break;
    case 'Very Poor':
      msgColor = 'var(--bg-container-pink)';
      break;
    default:
      msgColor = 'var(--font-color)';
      break;
  }

  return (
    <div className="airQlyWrapper">
      <WiBarometer
        style={{
          height: '50%',
          width: 'auto',
          color: 'white',
        }}
      />
      <p>Snapshot Air Quality Index</p>
      <p style={{ backgroundColor: msgColor }}>{airQuality}</p>
    </div>
  );
};

AirQuality.propTypes = {
  aqi: PropTypes.number.isRequired,
};

export default AirQuality;
