import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useCreateContactMutation } from '../../../redux/contact/contactSlice';

const ContactForm = ({ contacts }) => {
  const [createContact] = useCreateContactMutation();
  const formSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    const dataContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const repeatContacts = contacts.find(
      elem => elem.name === dataContact.name
    );

    if (repeatContacts) {
      alert(`${repeatContacts.name} is already in contacts`);
    } else {
      createContact(dataContact);
    }
    form.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={formSubmit}>
      <h2>Name</h2>
      <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <h2>Number</h2>
      <label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
