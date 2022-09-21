import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-oparations';
// import { getContacts } from 'redux/contacts/contacts-selectors';
import { setFilter } from '../../redux/filter/filter-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selector';

// import { addContact, removeContact } from 'api/contacts';
// import {
//   useDeleteContactMutation,
//   useFetchContactsQuery,
// } from '../../redux/contacts/contactSlice';

const Contacts = () => {
  //   const { data, isFetching } = useFetchContactsQuery();
  //   const [deleteContact] = useDeleteContactMutation();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };
  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter onSetFilter={onSetFilter} filter={filter} />
      {/* {isFetching && <p>...loading</p>} */}
      <ContactList contacts={contacts} onDelete={onRemoveContact} />
    </div>
  );
};

export default Contacts;
