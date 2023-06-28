import PropTypes from 'prop-types';

const LocationComp = (props) => {
  const { location } = props;

  return (
    <div className="locationWrapper">
      <p>{location}</p>
    </div>
  );
};

LocationComp.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LocationComp;
