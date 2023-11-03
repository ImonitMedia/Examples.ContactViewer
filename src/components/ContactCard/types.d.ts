import type { Contact, LoadContactAction } from 'types';

interface Props {
  contact: Contact;
  expanded: boolean;
  onHandleLoadContacts: (action: LoadContactAction) => void;
  setToExpanded: (id: string) => void;
}

export { Props };
