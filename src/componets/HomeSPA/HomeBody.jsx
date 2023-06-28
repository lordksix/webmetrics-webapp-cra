import LocationBtn from 'componets/CommomComponents/LocationBtn';
import SearchBox from 'componets/CommomComponents/SearchBox';
import { selectAirData } from 'features/AirPollution/airDataSlice';
import { useSelector } from 'react-redux';

import 'styles/HomeBody.css';

const HomeBody = () => {
  const airData = useSelector(selectAirData);
  const loadMessage = <span>Loading</span>;
  const errorMessage = <span className="error">Error</span>;

  return (
    <div className="HomeSec">
      <SearchBox handleSearchBtn={() => false} />
      <div className="locationSec">
        <LocationBtn />
        <div className={`statusMsg${airData.isLoading || airData.error ? ' modalMsgActiv' : ''}`}>
          {airData.isLoading && loadMessage}
          {airData.error && errorMessage}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
