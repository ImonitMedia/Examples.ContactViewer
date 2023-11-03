import { addContact, getAllContacts } from 'api';
import { ContactCard, ContactForm, SearchBox } from 'components';
import { useEffect, useState } from 'react';
import type { Contact, LoadContactAction, ManageContact } from 'types';
import { keys } from 'utils';

import {
  StyledActionBar,
  StyledColumn,
  StyledColumnBorder,
  StyledColumns,
  StyledError,
  StyledHeader,
  StyledLayout,
} from './styled';

export const Layout = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [adding, setAdding] = useState<boolean>(false);

  function setToExpanded(id: string) {
    setAdding(false);
    setActiveId(id === activeId ? null : id);
  }

  async function handleLoadContacts(action: LoadContactAction) {
    const response = await getAllContacts();

    if (response) {
      const { data, status } = response;

      if (action === 'delete') setActiveId(null);

      setContacts([]);

      if (status === 200) {
        setError(null);
        setContacts(data);
        setFilteredContacts(data);
      } else {
        setError(`Error: ${status} - ${data}`);
      }
    }
  }

  async function handleAddContact(payload: ManageContact) {
    const response = await addContact(payload);
    if (response) {
      handleLoadContacts('add');
      setAdding(false);
    }
  }

  function handleAddContactForm() {
    setActiveId(null);
    setAdding(true);
  }

  useEffect(() => {
    (async () => handleLoadContacts('initial'))();
  }, []);

  return (
    <StyledLayout aria-label='layout'>
      <StyledHeader>
        <h1>Current contacts</h1>
      </StyledHeader>

      {error && <StyledError>{error}</StyledError>}
      {contacts.length > 0 && (
        <>
          <StyledActionBar>
            <SearchBox
              contacts={contacts}
              onSearch={(filterResults: Contact[]) => setFilteredContacts(filterResults)}
            />
            <button
              aria-label='add-new-contact-btn'
              onClick={handleAddContactForm}
              disabled={adding}
            >
              Add a new contact
            </button>
          </StyledActionBar>
          <StyledColumns>
            {filteredContacts.map((contact: Contact, index: number) => (
              <StyledColumn aria-label='styled-column' key={keys(`${contact.id}-${index}`)}>
                <StyledColumnBorder>
                  <ContactCard
                    contact={contact}
                    expanded={contact.id === activeId}
                    onHandleLoadContacts={handleLoadContacts}
                    setToExpanded={setToExpanded}
                  />
                </StyledColumnBorder>
              </StyledColumn>
            ))}
            {adding && (
              <StyledColumn>
                <StyledColumnBorder>
                  <ContactForm
                    action='add'
                    onCancel={() => setAdding(false)}
                    onSubmit={handleAddContact}
                  />
                </StyledColumnBorder>
              </StyledColumn>
            )}
          </StyledColumns>
        </>
      )}
    </StyledLayout>
  );
};
