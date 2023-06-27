import { configureStore } from '@reduxjs/toolkit';
import airDataReducer from 'features/AirPollution/airDataSlice';

const store = configureStore({
  reducer: {
    airdata: airDataReducer,
  },
});

export default store;
