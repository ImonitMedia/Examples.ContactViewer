import axios from 'axios';
import type { ManageContact } from 'types';

const baseUrl = 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts';

async function getAllContacts() {
  return axios
    .get(baseUrl)
    .then(({ data, status }) => ({ data, status }))
    .catch(({ response: { data, status } }) => ({ data, status }));
}

async function addContact(payload: ManageContact) {
  return axios.post(baseUrl, payload);
}

async function editContact(id: string, payload: ManageContact) {
  return axios.put(`${baseUrl}/${id}`, payload);
}

async function deleteContact(id: string) {
  return axios.delete(`${baseUrl}/${id}`);
}

export { addContact, deleteContact, editContact, getAllContacts };
