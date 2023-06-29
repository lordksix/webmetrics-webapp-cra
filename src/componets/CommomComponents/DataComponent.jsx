import PropTypes from 'prop-types';
import { WiCloudy } from 'react-icons/wi';

const DataComponent = (props) => {
  const { dataName, dataInfo } = props;
  const result = dataInfo < 0 ? 'No data' : dataInfo;

  return (
    <div className="dataWrapper">
      <div className="dataWrapperLeft">
        <WiCloudy
          style={{
            height: '60%',
            width: 'auto',
            color: 'white',
          }}
        />
        <p className="dataTitle">{dataName}</p>
      </div>
      <p className="dataInfo">{result}</p>
    </div>
  );
};

DataComponent.propTypes = {
  dataName: PropTypes.string.isRequired,
  dataInfo: PropTypes.number.isRequired,
};

export default DataComponent;
