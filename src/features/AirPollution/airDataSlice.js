import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const queryParam = (lat, lon) => ({
  params: {
    appid: process.env.REACT_APP_API_WEATHER,
    lat,
    lon,
  },
});

const queryParamHistorical = (lat, lon) => ({
  params: {
    appid: process.env.REACT_APP_API_WEATHER,
    lat,
    lon,
    start: 0,
    end: Date.now(),
  },
});

const initialState = {
  locationData: {},
  current: [],
  forecast: [],
  historical: [],
  isLoading: false,
  error: undefined,
};

const ENDPOINTS = [
  'http://api.openweathermap.org/data/2.5/air_pollution?',
  'http://api.openweathermap.org/data/2.5/air_pollution/forecast?',
  'http://api.openweathermap.org/data/2.5/air_pollution/history?',
];

export const getAirData = createAsyncThunk('airdata/getAirData', async (gps, thunkAPI) => {
  try {
    const [current, forecast, historical] = await Promise.all(ENDPOINTS.map((endpoint, i) => {
      if (i !== 2) return axios.get(endpoint, queryParam(gps[0], gps[1]));
      return axios.get(endpoint, queryParamHistorical(gps[0], gps[1]));
    }));
    return [current.data.list, forecast.data.list, historical.data.list];
  } catch (error) {
    return thunkAPI.rejectWithValue('Error fetching air data');
  }
});

const airDataSlice = createSlice({
  name: 'airdata',
  initialState,
  reducers: {
    addLocation: {
      reducer(state, action) {
        state.locationData = action.payload;
      },
      prepare(payload) {
        return { payload };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAirData.pending, (state) => ({
        ...state,
        isLoading: true,
        error: undefined,
      }))
      .addCase(getAirData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getAirData.fulfilled, (state, action) => ({
        ...state,
        current: action.payload[0],
        forecast: action.payload[1],
        historical: action.payload[2],
        isLoading: false,
        error: undefined,
      }));
  },
});

export const { addLocation } = airDataSlice.actions;

export const selectAirData = (state) => state.airdata;

export default airDataSlice.reducer;
