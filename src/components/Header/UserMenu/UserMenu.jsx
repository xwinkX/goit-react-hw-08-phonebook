import { useSelector, useDispatch } from 'react-redux';
import { getMail } from 'redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserMenu = () => {
  const { email } = useSelector(getMail);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
        {email}
      </Typography>
      <Button variant="contained" onClick={onLogout}>
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
