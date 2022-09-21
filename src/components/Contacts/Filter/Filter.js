import css from './Filter.module.css';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { filterContacts } from 'redux/contacts/contact';

const Filter = ({OnSetFilter, filter}) => {
  // const dispatch = useDispatch();
  return (
    <>
      <h2 className={css.h2}>Find contacts by name</h2>
      <label>
        <input
          type="text"
          onChange={OnSetFilter}
          value={filter}
          name="filter"
        />
      </label>
    </>
  );
};
export default Filter;
