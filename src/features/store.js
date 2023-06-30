import { combineReducers, configureStore } from '@reduxjs/toolkit';
import airDataReducer from 'features/AirPollution/airDataSlice';

const rootReducer = combineReducers({
  airdata: airDataReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
const store = configureStore({
  reducer: {
    airdata: airDataReducer,
  },
});

export default store;
