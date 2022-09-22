import { NavLink } from 'react-router-dom';

const AuthMenu = ({getClassName}) => {
  return (
    <div>
      <NavLink to="/register" className={getClassName}>
        Register
      </NavLink>
      |
      <NavLink to="/login" className={getClassName}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;