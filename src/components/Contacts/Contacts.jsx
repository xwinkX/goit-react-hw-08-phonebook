import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from '../../redux/contact/contactSlice';

const Contacts = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

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
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter />
      {isFetching && <p>...loading</p>}
      {data && <ContactList contacts={data} onDelete={deleteContact} />}
    </div>
  );
};

export default Contacts;
