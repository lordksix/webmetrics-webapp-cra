import PropTypes from 'prop-types';

const LocationComp = (props) => {
  const { location, dateLocale } = props;

  return (
    <div className="locationWrapper">
      <p>{location}</p>
      <p>{dateLocale}</p>
    </div>
  );
};

LocationComp.propTypes = {
  location: PropTypes.string.isRequired,
  dateLocale: PropTypes.string.isRequired,
};

export default LocationComp;
