import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h2>Login Page</h2>
      <Login onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
