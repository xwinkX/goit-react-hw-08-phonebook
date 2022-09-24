import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import Typography from '@mui/material/Typography';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Typography variant="h5" component="h5" sx={{ flexGrow: 1, mb: 1 }}>
        Login Page
      </Typography>
      <Login onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
