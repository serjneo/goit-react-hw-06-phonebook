import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));
const deleteContact = createAction('contacts/deleteContact');
const filterContacts = createAction('contacts/filterContacts');

const actons = { addContact, deleteContact, filterContacts };
export default actons;
