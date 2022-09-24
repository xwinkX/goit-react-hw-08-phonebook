import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserRoutes from './UserRoutes';

import { current } from '../redux/auth/auth-operations';
import { getToken } from 'redux/auth/auth-selectors';
import { getIsFetchingCurrent } from 'redux/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return (
    !isFetchingCurrentUser && (
      <div
        // style={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 16,
        //   color: '#010101',
        // }}
      >
        <UserRoutes />
      </div>
    )
  );
}
