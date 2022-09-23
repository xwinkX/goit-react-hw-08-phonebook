import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Login onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
