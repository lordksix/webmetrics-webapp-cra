// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const data0 = {
  main: { aqi: 1 },
  dt: 1688016874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data1 = {
  main: { aqi: 2 },
  dt: 1688026874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data2 = {
  main: { aqi: 3 },
  dt: 1688036874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data3 = {
  main: { aqi: 4 },
  dt: 1688046874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data4 = {
  main: { aqi: 1 },
  dt: 1688056874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data5 = {
  main: { aqi: 2 },
  dt: 1688066874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data6 = {
  main: { aqi: 3 },
  dt: 1688076874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data7 = {
  main: { aqi: 4 },
  dt: 1688086874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const data8 = {
  main: { aqi: 1 },
  dt: 1688096874,
  components: {
    co: 201.94, no: 0, no2: 0, o3: 43.63, so2: 0, nh3: 0, pm2_5: 0.5,
  },
};

const location = {
  name: 'Test City, Test State, Test Country',
  center: [50, 50],
};

const current = [data0];
const forecast = [data1, data2, data3, data4, data5, data6, data7, data8];
const historical = [data1, data2, data3, data4, data5, data6, data7, data8];

export const handlersAir = [
  rest.get('https://api.openweathermap.org/data/2.5/air_pollution', (req, res, ctx) => res(
    ctx.json(current),
  )),
  rest.get('https://api.openweathermap.org/data/2.5/air_pollution/forecast', (req, res, ctx) => res(
    ctx.json(forecast),
  )),
  rest.get('https://api.openweathermap.org/data/2.5/air_pollution/history', (req, res, ctx) => res(
    ctx.json(historical),
  )),
];

export const handlersLocation = rest.get('https://api.mapbox.com/geocoding/v5/mapbox.places/', (req, res, ctx) => res(
  ctx.json(location),
));
