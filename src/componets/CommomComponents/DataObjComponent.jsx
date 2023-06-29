import PropTypes from 'prop-types';
import AirQuality from './AirQuality';

const DataObjComponent = (props) => {
  const { aqi, dateLocale } = props;

  return (
    <div className="dataWrapper">
      <AirQuality aqi={aqi} />
      <p>
        Date time:&nbsp;
        {dateLocale}
      </p>
    </div>
  );
};

DataObjComponent.propTypes = {
  aqi: PropTypes.number.isRequired,
  dateLocale: PropTypes.string.isRequired,
};

export default DataObjComponent;
