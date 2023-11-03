import { render, screen } from '@testing-library/react';
import { contact } from 'mocks';
import moment from 'moment';
import { contactDate } from 'settings';

import { ContactCard } from './ContactCard';
import type { Props } from './types';

const collapsedProps: Props = {
  contact,
  expanded: false,
  onHandleLoadContacts: jest.fn(),
  setToExpanded: jest.fn(),
};

const expandedProps: Props = {
  contact,
  expanded: true,
  onHandleLoadContacts: jest.fn(),
  setToExpanded: jest.fn(),
};

describe('ContactCard component', () => {
  test('Check element renders', () => {
    render(<ContactCard {...collapsedProps} />);
    expect(screen.getByLabelText('contact-card')).toBeTruthy();
  });

  test('Check if contact name has loaded', () => {
    render(<ContactCard {...collapsedProps} />);
    expect(screen.getByText(contact.name)).toBeTruthy();
  });

  test('Check contact details when expanded', () => {
    render(<ContactCard {...expandedProps} />);

    expect(screen.getByText(moment(contact.birthday).format(contactDate.short))).toBeTruthy();
    expect(screen.getByText(moment(contact.createdAt).format(contactDate.long))).toBeTruthy();
    expect(screen.getByText(contact.email)).toBeTruthy();
    expect(screen.getByText(contact.phone)).toBeTruthy();
  });
});
