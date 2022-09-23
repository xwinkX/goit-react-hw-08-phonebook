import { useSelector, useDispatch } from 'react-redux';
import Register from 'components/Register/Register';
import { signup } from '../../redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Register Page</h2>
      <Register onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};
export default RegisterPage;
