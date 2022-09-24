import { useState } from 'react';
import css from './Register.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const Register = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
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

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Имя:
        </label>
        <TextField
          size="small"
          value={name}
          name="name"
          onChange={handleChange}
          className={css.input}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Email:
        </label>
        <TextField
          size="small"
          value={email}
          name="email"
          onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Пароль:
        </label>
        <TextField
          size="small"
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div className={css.group}>
        <Button type="submit" variant="contained">
          Registration
        </Button>
      </div>
    </form>
  );
};
export default Register;

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
