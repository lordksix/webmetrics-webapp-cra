import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'routes/Home';
import NotMatch from 'routes/NotMatch';
import CurrentAirPollution from 'routes/CurrentAirPollution';
import ForecastAirPollution from 'routes/ForecastAirPollution';
import HistoricalAirPollution from 'routes/HistoricalAirPollution';
import Layout from 'componets/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="current" element={<CurrentAirPollution />} />
          <Route path="forecast" element={<ForecastAirPollution />} />
          <Route path="historical" element={<HistoricalAirPollution />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
