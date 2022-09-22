import { Outlet } from 'react-router-dom';
import AuthMenu from './Authmenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import css from '../Header/Header.module.css';
import Menu from './Menu/Menu';
const Header = () => {
  const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
  };
  return (
    <>
      <h1>Phonebook</h1>
      <div className={css.div}>
        <AuthMenu getClassName={getClassName} />
        <Menu getClassName={getClassName} />
        <UserMenu />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
