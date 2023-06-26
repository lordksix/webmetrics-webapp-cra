import { nanoid } from '@reduxjs/toolkit';
import { fetchPlace } from 'lib/fetchMapboxAPI';
import { useState } from 'react';

const SearchBox = () => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);

    if (!autocompleteCities.includes(e.target.value)) {
      if (res.features) setAutocompleteCities(res.features.map((place) => place.place_name));
    }

    if (res.error) setAutocompleteErr(res.error);
    else setAutocompleteErr('');
  };

  return (
    <form>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">
            Your city
            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join('|')}
            autoComplete="off"
          />
          <datalist id="places">
            {autocompleteCities.map((city) => (
              <option key={nanoid()}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint">
            *start typing and choose your city from the given options
          </span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
