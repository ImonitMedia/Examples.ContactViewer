import type { Contact, ManageContact } from 'types';

interface Props {
  action: 'add' | 'edit';
  contact?: Contact;
  onCancel: () => void;
  onSubmit: (payload: ManageContact) => void;
}

export { Props };
