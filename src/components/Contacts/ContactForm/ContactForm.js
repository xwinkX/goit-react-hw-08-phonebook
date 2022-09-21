import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useCreateContactMutation } from '../../../redux/contacts/contactSlice';

const ContactForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    number: '',
  };
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form className={css.contactForm} action="" onSubmit={handleSubmit}>
      <h2>Name</h2>
      <label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <h2>Number</h2>
      <label>
        <input
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
