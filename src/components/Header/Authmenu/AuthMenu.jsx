import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
  };
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        <NavLink to="/register" className={getClassName}>
          Register
        </NavLink>
      </Button>
      <Button variant="contained">
        <NavLink underline="none" to="/login" className={getClassName}>
          Login
        </NavLink>
      </Button>
    </Stack>
  );
};

export default AuthMenu;
