import { Outlet } from 'react-router-dom';
import AuthMenu from './Authmenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import Menu from './Menu/Menu';
import useAuth from 'hooks/useAuth';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  const islogin = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 5 }}>
          <Toolbar>
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
      <Outlet />
    </>
  );
};

export default Header;
