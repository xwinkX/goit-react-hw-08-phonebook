import { Outlet } from 'react-router-dom';
import AuthMenu from './Authmenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import css from '../Header/Header.module.css';
import Menu from './Menu/Menu';
import useAuth from 'hooks/useAuth';
const Header = () => {
  const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
  };

  const islogin = useAuth();
  return (
    <>
      <h1>Phonebook</h1>
      <div className={css.div}>
        {islogin && <Menu getClassName={getClassName} />}
        {islogin ? <UserMenu /> : <AuthMenu getClassName={getClassName} />}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
