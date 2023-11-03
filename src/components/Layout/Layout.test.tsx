import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('ContactCard component', () => {
  test('Check element renders', () => {
    render(<Layout />);
    expect(screen.getByLabelText('layout')).toBeTruthy();
  });

  test('Check if header has loaded', () => {
    render(<Layout />);
    expect(screen.getByText('Current contacts')).toBeTruthy();
  });
});
