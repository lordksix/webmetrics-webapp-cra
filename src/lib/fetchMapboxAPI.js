import { fetchDataJSON } from './GetAPI';

const key = {
  name: 'X-Api-Key',
  value: process.env.REACT_APP_API_MAPBOX,
};

const fetchPlace = async (text, key, signal, controller, cb) => {
  const queryParam = new URLSearchParams({
    access_token: process.env.REACT_APP_API_MAPBOX,
    autocomplete: true,
    types: 'place',
    cachebuster: 1625641871908,
  });
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?${queryParam}`;
  try {
    const res = await fetchDataJSON(url, key, signal);
    if (cb) {
      cb(res);
      return () => {
        controller.abort();
      };
    }
    return res;
  } catch (err) {
    return { error: 'Unable to retrieve places' };
  }
};

export { fetchPlace, key };
