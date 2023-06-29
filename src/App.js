import { Route, Routes, useLocation } from 'react-router-dom';
import 'styles/App.css';
import Home from 'routes/Home';
import NotMatch from 'routes/NotMatch';
import CurrentAirPollution from 'routes/CurrentAirPollution';
import ForecastAirPollution from 'routes/ForecastAirPollution';
import HistoricalAirPollution from 'routes/HistoricalAirPollution';
import Layout from 'componets/CommomComponents/Layout';
import MenuModal from 'componets/ModalMenu/MenuModal';
import RelativeAQModal from 'componets/RelativeAQModal/RelativeAQModal';

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <div className="App">
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="current" element={<CurrentAirPollution />} />
          <Route path="forecast" element={<ForecastAirPollution />} />
          <Route path="historical" element={<HistoricalAirPollution />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>

      {previousLocation && (
        <Routes>
          <Route path="/modal" element={<MenuModal />} />
          <Route path="/relativemodal" element={<RelativeAQModal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
