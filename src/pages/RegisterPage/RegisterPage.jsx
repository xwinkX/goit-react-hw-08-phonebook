import { useSelector, useDispatch } from 'react-redux';
import Register from 'components/Register/Register';
import { signup } from '../../redux/auth/auth-operations';
import { getAuthError } from 'redux/auth/auth-selectors';
import Typography from '@mui/material/Typography';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
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
        Register Page
      </Typography>
      <Register onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};
export default RegisterPage;
