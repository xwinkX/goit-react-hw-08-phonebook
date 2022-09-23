import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPages = lazy(() => import('../pages/ContactsPages/ContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Loading</p>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPages />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
