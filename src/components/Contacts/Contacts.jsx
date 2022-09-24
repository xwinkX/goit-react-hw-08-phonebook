import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-oparations';
import { setFilter } from '../../redux/filter/filter-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selector';

const Contacts = () => {
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
      <Typography
        variant="h4"
        component="h3"
        sx={{ flexGrow: 1, mb: 1, mt: 2 }}
      >
        Contacts
      </Typography>
      <Filter onSetFilter={onSetFilter} filter={filter} />
      <ContactList contacts={contacts} onDelete={onRemoveContact} />
    </div>
  );
};

export default Contacts;
