import css from './Login.module.css';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const Login = ({ onSubmit }) => {
  const initialState = {
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

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Email:
        </label>
        <TextField
          size="small"
          value={email}
          name="email"
          onChange={handleChange}
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
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div className={css.group}>
        <Button type="submit" variant="contained">
          Logout
        </Button>
      </div>
    </form>
  );
};
export default Login;

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
