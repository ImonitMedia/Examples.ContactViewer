interface ManageContact {
  birthday: string;
  email: string;
  name: string;
  phone: string;
}

interface Contact extends ManageContact {
  avatar: string;
  birthday: string;
  createdAt: string;
  id: string;
}

type LoadContactAction = 'add' | 'delete' | 'edit' | 'initial';

export { Contact, LoadContactAction, ManageContact };
