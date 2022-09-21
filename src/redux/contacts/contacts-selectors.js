export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return result;
};
