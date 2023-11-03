import type { ChangeEvent } from 'react';
import type { Contact } from 'types';

import { StyledSearchBox } from './styled';

interface IProps {
  contacts: Contact[];
  onSearch: (filterResults: Contact[]) => void;
}

export const SearchBox = ({ contacts, onSearch }: IProps) => {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;

    const filteredResults =
      value !== ''
        ? contacts.filter((contact: Contact) =>
            contact.name.toLowerCase().includes(value.toLowerCase()),
          )
        : contacts;
    onSearch(filteredResults);
  }

  function handleReset() {
    onSearch(contacts);
  }

  return (
    <StyledSearchBox aria-label='search-box'>
      <form>
        <span>Filter contacts:</span>
        <input
          aria-label='search-box-input'
          type='text'
          name='name'
          id='contact-name'
          onChange={handleInputChange}
        />

        <button aria-label='search-box-reset' type='reset' onClick={handleReset}>
          Clear
        </button>
      </form>
    </StyledSearchBox>
  );
};
