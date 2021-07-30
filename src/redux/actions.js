export const saveContact = value => {
  return {
    type: 'contacts/save',
    payload: value,
  };
};
