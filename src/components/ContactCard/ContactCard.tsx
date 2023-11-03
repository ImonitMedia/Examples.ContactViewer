import { deleteContact, editContact } from 'api';
import { ContactForm } from 'components';
import moment from 'moment';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import { contactDate } from 'settings';
import type { ManageContact } from 'types';

import {
  StyledActions,
  StyledContactCard,
  StyledContent,
  StyledIntro,
  StyledMessage,
} from './styled';
import type { Props } from './types';

export const ContactCard = ({ contact, expanded, onHandleLoadContacts, setToExpanded }: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);

  const { avatar, birthday, createdAt, email, id, name, phone } = contact;

  async function handleDeleteContact(e: MouseEvent<HTMLElement>) {
    e.preventDefault();

    // Progressive work would replace this with a modal popup
    // eslint-disable-next-line no-alert
    const confirmDelete = window.confirm('Are you sure? This action cannot be undone');
    if (confirmDelete) {
      const response = await deleteContact(id);
      if (response) onHandleLoadContacts('delete');
    }
  }

  async function handleEditContact(payload: ManageContact) {
    const response = await editContact(id, payload);
    if (response) {
      onHandleLoadContacts('edit');
      setEditing(false);
      setMessage(`${name} has been updated`);
      setTimeout(() => setMessage(null), 3000);
    }
  }

  function handleEnableEditing(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    setEditing(true);
  }

  return (
    <StyledContactCard aria-label='contact-card'>
      {editing ? (
        <ContactForm
          action='edit'
          contact={contact}
          onCancel={() => setEditing(false)}
          onSubmit={handleEditContact}
        />
      ) : (
        <>
          <StyledIntro
            aria-label='contact-card-intro'
            $expanded={expanded}
            onClick={() => setToExpanded(id)}
          >
            <img src={avatar} alt={`${name} profile`} />
            <h2>{name}</h2>
          </StyledIntro>
          {expanded && (
            <>
              <StyledContent>
                {message && <StyledMessage>{message}</StyledMessage>}
                <dl>
                  <dt>Birthday: </dt>
                  <dd>{moment(birthday).format(contactDate.short)}</dd>
                  <dt>Contact added on: </dt>
                  <dd>{moment(createdAt).format(contactDate.long)}</dd>
                  <dt>Email: </dt>
                  <dd>
                    <a href={email} target='_blank' rel='noreferrer'>
                      {email}
                    </a>
                  </dd>
                  <dt>Phone: </dt>
                  <dd>
                    <a href={phone} target='_blank' rel='noreferrer'>
                      {phone}
                    </a>
                  </dd>
                </dl>
              </StyledContent>
              <StyledActions>
                <button aria-label='contact-card-edit-btn' onClick={handleEnableEditing}>
                  Edit
                </button>
                <button aria-label='contact-card-delete-btn' onClick={handleDeleteContact}>
                  Delete
                </button>
              </StyledActions>
            </>
          )}
        </>
      )}
    </StyledContactCard>
  );
};
