import { nanoid } from '@reduxjs/toolkit';
import { fetchPlace } from 'lib/fetchMapboxAPI';
import { useState } from 'react';
import { RxEnter } from 'react-icons/rx';
import 'styles/SearchBox.css';

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
            City:
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
            className="searchBar-input"
          />
          <datalist id="places">
            {autocompleteCities.map((city) => (
              <option key={nanoid()}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint">
            *start typing and choose your city from the given options
          </span>
        </div>
        <button type="submit" className="flex-align">
          <RxEnter />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
