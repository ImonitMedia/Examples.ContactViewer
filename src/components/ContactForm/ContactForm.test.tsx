import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { contact } from 'mocks';

import { ContactForm } from './ContactForm';
import type { Props } from './types';

const addProps: Props = {
  action: 'add',
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

const editProps: Props = {
  action: 'edit',
  contact,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

describe('ContactCard component', () => {
  test('Check element renders', () => {
    render(<ContactForm {...addProps} />);
    expect(screen.getByLabelText('contact-form')).toBeTruthy();
  });

  test('Check title for adding a new contact', () => {
    render(<ContactForm {...addProps} />);
    expect(screen.getByText('Add new contact')).toBeTruthy();
  });

  test('Check title for editing an existing contact', () => {
    render(<ContactForm {...editProps} />);
    expect(screen.getByText(`Edit ${contact.name}`)).toBeTruthy();
  });

  test('Check field values for editing an existing contact', () => {
    render(<ContactForm {...editProps} />);

    // Get all input fields
    const inputName: HTMLInputElement = screen.getByLabelText('contact-form-input-name');
    const inputBirthday: HTMLInputElement = screen.getByLabelText('contact-form-input-birthday');
    const inputEmail: HTMLInputElement = screen.getByLabelText('contact-form-input-email');
    const inputPhone: HTMLInputElement = screen.getByLabelText('contact-form-input-phone');

    expect(inputName.value).toBe(contact.name);
    expect(inputBirthday.value).toBe(contact.birthday);
    expect(inputEmail.value).toBe(contact.email);
    expect(inputPhone.value).toBe(contact.phone);
  });

  test('Submit empty fields and check errors', async () => {
    render(<ContactForm {...addProps} />);

    const submit: HTMLButtonElement = screen.getByLabelText('contact-form-submit-btn');
    fireEvent.click(submit);

    // Check for error messages to show
    await waitFor(() => expect(screen.getByLabelText('contact-form-error-name')).toBeTruthy());
    await waitFor(() => expect(screen.getByLabelText('contact-form-error-birthday')).toBeTruthy());
    await waitFor(() => expect(screen.getByLabelText('contact-form-error-email')).toBeTruthy());
    await waitFor(() => expect(screen.getByLabelText('contact-form-error-phone')).toBeTruthy());
  });
});
