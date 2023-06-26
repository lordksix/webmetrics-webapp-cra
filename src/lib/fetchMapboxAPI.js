import { handleGETAPI } from './GetAPI';

const key = {
  name: 'X-Api-Key',
  value: process.env.REACT_APP_API_MAPBOX,
};

const fetchData = async (text, key, signal, controller, cb) => {
  const queryParam = new URLSearchParams({
    access_token: process.env.REACT_APP_API_MAPBOX,
    autocomplete: true,
    types: 'place',
    cachebuster: 1625641871908,
  });
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?${queryParam}`;
  const res = await handleGETAPI(url, key, signal);
  cb(res);
  return () => {
    controller.abort();
  };
};

export { fetchData, key };
