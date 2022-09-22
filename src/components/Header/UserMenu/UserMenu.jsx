import { useSelector } from 'react-redux';
import { getMail } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getMail);
  return (
    <div>
      <span>{email}</span> |<button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
