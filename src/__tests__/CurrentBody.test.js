import { screen } from '@testing-library/react';
import CurrentBody from 'componets/CurrentSPA/CurrentBody';
import renderWithProviders from 'utils/test-utils';

describe('test current air quality', () => {
  test('full app rendering/navigating', async () => {
    renderWithProviders(<CurrentBody />);

    expect(screen.getByText(/no location/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    renderWithProviders(<CurrentBody />);

    expect(screen.getByText(/snapshot/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    renderWithProviders(<CurrentBody />);

    expect(screen.getAllByTitle(/concentration/i).length).toBe(8);
  });
});
