import { Outlet } from 'react-router-dom';
import AuthMenu from './Authmenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import css from '../Header/Header.module.css';
import Menu from './Menu/Menu';
import useAuth from 'hooks/useAuth';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  //   const getClassName = ({ isActive }) => {
  //     const className = isActive ? `${css.link} ${css.active}` : css.link;
  //     return className;
  //   };

  const islogin = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 5 }}>
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
            {/* <MenuIcon /> */}
            {/* </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mr: 2 }}
            >
              Phone Books
            </Typography>
            {islogin && <Menu />}
            {islogin ? <UserMenu /> : <AuthMenu />}
          </Toolbar>
        </AppBar>
      </Box>
      {/* ); */}
      {/* <h1>Phonebook</h1> */}
      {/* <div className={css.div}> */}
      {/* <AppBar>
        <Toolbar>
          {islogin && <Menu getClassName={getClassName} />}
          {islogin ? <UserMenu /> : <AuthMenu getClassName={getClassName} />}
        </Toolbar>
      </AppBar> */}
      {/* </div> */}
      <Outlet />
    </>
  );
};

export default Header;
