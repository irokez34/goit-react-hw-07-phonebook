import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.phoneBook.items;
export const selectError = state => state.contacts.phoneBook.error;
export const selectIsLoading = state => state.contacts.phoneBook.isLoading;
export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
