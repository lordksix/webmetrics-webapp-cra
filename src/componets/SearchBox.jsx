import { nanoid } from '@reduxjs/toolkit';
import { fetchPlace } from 'lib/fetchMapboxAPI';
import { useState } from 'react';
import { RxEnter } from 'react-icons/rx';
import 'styles/SearchBox.css';

const SearchBox = () => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');
  const idInput = nanoid();
  const idLabel = nanoid();

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);

    if (!autocompleteCities.includes(e.target.value)) {
      if (res.features) {
        setAutocompleteCities(res.features.map((place) => ({
          name: place.place_name,
          center: place.center,
        })));
      }
    }

    if (res.error) setAutocompleteErr(res.error);
    else setAutocompleteErr('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = autocompleteCities.filter((tempcity) => tempcity.name === city);
    console.log(temp);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor={idLabel} className="label">
            City:
            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
            list={idInput}
            type="text"
            id={idLabel}
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.map((city) => `(${city.name})`).join('|')}
            autoComplete="off"
            className="searchBar-input"
          />
          <datalist id={idInput}>
            {autocompleteCities.map((city) => (
              <option key={nanoid()}>{city.name}</option>
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
