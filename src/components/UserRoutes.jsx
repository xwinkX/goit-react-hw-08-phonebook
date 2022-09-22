import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPages = lazy(() => import('../pages/ContactsPages/ContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Loading</p>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPages />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
