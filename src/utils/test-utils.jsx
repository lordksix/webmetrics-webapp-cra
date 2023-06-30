import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  location, current, forecast, historical,
} from 'mocks/handlers';
import { setupStore } from 'features/store';
import { BrowserRouter } from 'react-router-dom';

export const initialState = {
  locationData: location,
  current,
  forecast,
  historical,
  isLoading: false,
  error: undefined,
};

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  const Wrapper = ({ children }) => (
    <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
  );

  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
