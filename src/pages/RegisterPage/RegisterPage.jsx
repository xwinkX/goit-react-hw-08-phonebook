import { useSelector, useDispatch } from 'react-redux';
import Register from 'components/Register/Register';
import { signup } from '../../redux/auth/auth-operations';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h2>Register Page</h2>
      <Register onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};
export default RegisterPage;
