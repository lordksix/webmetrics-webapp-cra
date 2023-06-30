import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { handlersLocation } from 'mocks/handlers';
import server from 'mocks/server';
import renderWithProviders from 'utils/test-utils';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('test render home', () => {
  test('test render latest update', async () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/latest refresh/i)).toBeInTheDocument();
  });

  test('test render get current location', async () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/get current/i)).toBeInTheDocument();
  });

  test('test render forecast air quality', async () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/forecast air quality/i)).toBeInTheDocument();
  });

  test('test render historical air quality', async () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/historical air quality/i)).toBeInTheDocument();
  });

  test('test render current air quality', async () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/current air quality/i)).toBeInTheDocument();
  });
});

describe('test store', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  test('test nativation to current air quality page', async () => {
    server.use(handlersLocation);
    renderWithProviders(<App />);
    const user = userEvent.setup();
    // verify page content for expected route after navigating
    const temp = screen.getByText(/Get Current Location:/i);
    await user.click(temp);
    expect(screen.getByText(/unable/i)).toBeInTheDocument();
  });
});

describe('test interaction historical', () => {
  test('test nativation to current air quality page', async () => {
    renderWithProviders(<App />);
    const user = userEvent.setup();

    const temp = screen.getByText(/Historical Air Quality/i).closest('a');
    await user.click(temp);
    await waitFor(() => expect(screen.getByText(/previous/i)).toBeInTheDocument());
  });
});

describe('test interaction forecast', () => {
  test('test nativation to current air quality page', async () => {
    renderWithProviders(<App />);
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByTitle('home'));
    await user.click(screen.getByText(/forecast air quality/i).closest('a'));
    await waitFor(() => expect(screen.getByText(/next/i)).toBeInTheDocument());
  });
});
