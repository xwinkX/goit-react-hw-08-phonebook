import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.li}>
      <Typography variant="h6" component="span" sx={{ flexGrow: 1, mr: 2 }}>
        {name}
      </Typography>
      <Typography variant="h6" component="span" sx={{ flexGrow: 1, mr: 2 }}>
        {number}
      </Typography>
      <Button variant="contained" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
