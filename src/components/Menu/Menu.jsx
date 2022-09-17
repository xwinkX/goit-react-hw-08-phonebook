import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  return (
    <div>
      <NavLink to="/register" className={getClassName}>
        Register
      </NavLink>
      |
      <NavLink to="/login" className={getClassName}>
        Login
      </NavLink>
      <NavLink to="/contacts" className={getClassName}>
        Contacts
      </NavLink>
    </div>
  );
};

export default Menu;
