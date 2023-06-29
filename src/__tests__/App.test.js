import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import store from 'features/store';
import { serverAir, serverLocation } from 'mocks/server';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);

describe('test current air quality', () => {
  beforeAll(() => serverAir.listen());
  afterAll(() => serverAir.close());
  afterEach(() => serverAir.resetHandlers());
  beforeAll(() => serverLocation.listen());
  afterAll(() => serverLocation.close());
  afterEach(() => serverLocation.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/latest refresh/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/current air quality/i));
    expect(screen.getByText(/CURRENT POLLUTANT CONCENTRATION IN UG/i)).toBeInTheDocument();
  });
});

describe('test forecast air quality', () => {
  beforeAll(() => serverAir.listen());
  afterAll(() => serverAir.close());
  afterEach(() => serverAir.resetHandlers());
  beforeAll(() => serverLocation.listen());
  afterAll(() => serverLocation.close());
  afterEach(() => serverLocation.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/Welcome to lordksix's Air Quality App/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/forecast air quality/i));
    expect(screen.getAllByText(/FORECAST AIR QUALITY: NEXT 8 HOURS/i).length).toBeGreaterThan(0);
  });
});

describe('test historical air quality', () => {
  beforeAll(() => serverAir.listen());
  afterAll(() => serverAir.close());
  afterEach(() => serverAir.resetHandlers());
  beforeAll(() => serverLocation.listen());
  afterAll(() => serverLocation.close());
  afterEach(() => serverLocation.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/Welcome to lordksix's Air Quality App/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/forecast air quality/i));
    expect(screen.getByText(/HISTORICAL AIR QUALITY: PREVIOUS 8 HOURS/i)).toBeInTheDocument();
  });
});
