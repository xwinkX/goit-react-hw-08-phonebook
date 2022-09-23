import { useSelector, useDispatch } from 'react-redux';
import { getMail } from 'redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const { email } = useSelector(getMail);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <span>{email}</span> |
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
