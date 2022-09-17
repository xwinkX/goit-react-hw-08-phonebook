import Contacts from 'components/Contacts/Contacts';
import css from './ContactsPages.module.css';

const ContactsPages = () => {
  return (
    <div className={css.container}>
      <Contacts />
    </div>
  );
};

export default ContactsPages;
