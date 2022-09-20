// import css from '../Register/Register.module.css';
import { useState } from 'react';

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
      <div>
        <label htmlFor="">Имя:</label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          //   className={css.input}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          //   className={css.input}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div>
        <label htmlFor="">Пароль:</label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          //   className={css.input}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div>
        <button type="submit">Регистрация</button>
      </div>
    </form>
  );
};
export default Register;
