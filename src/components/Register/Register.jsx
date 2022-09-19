import css from './Register.module.css';
import { useState } from 'react';

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.elements.name.value,
      number: form.elements.email.value,
      password: form.elements.password.value,
    };
    // onSubmit({ ...state });
    setState({ ...data });
  };

  //   const { state, handleChange, handleSubmit } = useForm({
  //     initialState,
  //     onSubmit,
  //   });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Имя:
        </label>
        <input
          value={name}
          name="name"
          //   onChange={handleChange}
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
        <input
          value={email}
          name="email"
          //   onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          Пароль:
        </label>
        <input
          value={password}
          name="password"
          //   onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div className={css.group}>
        <button type="submit">Регистрация</button>
      </div>
    </form>
  );
};
export default Register;
