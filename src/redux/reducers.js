import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actons from './actons';

const contacts = createReducer([], {
  [actons.addContact]: (state, action) => [...state, action.payload],
  [actons.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  [actons.filterContacts]: (_, action) => action.payload,
});

const rootReducer = combineReducers({ contacts, filter });

export default rootReducer;
