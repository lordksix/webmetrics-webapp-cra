import { screen } from '@testing-library/react';
import HistoricalBody from 'componets/HIstoricalSPA/HistoricalBody';
import renderWithProviders, { initialState } from 'utils/test-utils';

describe('test forecast air quality', () => {
  test('find initial no location', async () => {
    renderWithProviders(<HistoricalBody />);

    expect(screen.getByText(/no location/i)).toBeInTheDocument();
  });

  test('render snaphot of air quality', async () => {
    renderWithProviders(<HistoricalBody />);

    expect(screen.getByText(/snapshot/i)).toBeInTheDocument();
  });

  test('render no initial concentration component', async () => {
    renderWithProviders(<HistoricalBody />);

    expect(screen.queryByTitle(/concentration/i)).not.toBeInTheDocument();
  });

  test('render no initial snapshot component', async () => {
    renderWithProviders(<HistoricalBody />);

    expect(screen.queryByTitle(/snapshot/i)).not.toBeInTheDocument();
  });

  test('render preloatad snapshot component', async () => {
    renderWithProviders(<HistoricalBody />, { preloadedState: { airdata: initialState } });

    expect(screen.getAllByTitle(/snapshot/i).length).toBe(8);
  });
});
