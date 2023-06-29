import PropTypes from 'prop-types';

const DataComponent = (props) => {
  const { dataName, dataInfo } = props;
  const result = dataInfo < 0 ? 'No data' : dataInfo;

  return (
    <div className="dataWrapper">
      <p className="dataTitle">{dataName}</p>
      <p className="dataInfo">{result}</p>
    </div>
  );
};

DataComponent.propTypes = {
  dataName: PropTypes.string.isRequired,
  dataInfo: PropTypes.string.isRequired,
};

export default DataComponent;
