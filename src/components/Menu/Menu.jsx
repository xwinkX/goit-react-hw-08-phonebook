import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';
import { Outlet } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
    return (
      <>
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
          <h1>Phonebook</h1>
        </div>
        <Outlet />
      </>
    );
};

export default Menu;
