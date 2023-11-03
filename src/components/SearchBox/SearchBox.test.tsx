import { fireEvent, render, screen } from '@testing-library/react';
import { contacts } from 'mocks';

import { SearchBox } from './SearchBox';

function handleOnSearch() {
  jest.fn();
}

describe('ContactCard component', () => {
  test('Check element renders', () => {
    render(<SearchBox contacts={contacts} onSearch={handleOnSearch} />);
    expect(screen.getByLabelText('search-box')).toBeTruthy();
  });

  test('Add input values', () => {
    render(<SearchBox contacts={contacts} onSearch={handleOnSearch} />);

    const input: HTMLInputElement = screen.getByLabelText('search-box-input');
    fireEvent.change(input, { target: { value: 'Testing' } });

    expect(input.value).toBe('Testing');
  });

  test('Test the clear button', async () => {
    render(<SearchBox contacts={contacts} onSearch={handleOnSearch} />);

    const input: HTMLInputElement = screen.getByLabelText('search-box-input');

    fireEvent.change(input, { target: { value: 'Testing' } });
    expect(input.value).toBe('Testing');

    const reset: HTMLButtonElement = screen.getByLabelText('search-box-reset');

    await fireEvent.click(reset);
    expect(input.value).toBe('');
  });
});
