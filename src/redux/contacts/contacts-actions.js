export const addContact = obj => ({
  type: 'contacts/Save',
  payload: obj,
});

export const deleteContact = contactId => ({
  type: 'contacts/Delete',
  payload: contactId,
});

export const addFilterValue = value => ({
  type: 'contacts/Filter',
  payload: value,
});
