import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDelete }) => {

  return (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
