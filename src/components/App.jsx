import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu/Menu';

// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPages = lazy(() =>
  import('../pages/ContactsPages/ContactsPages')
);

export default function App() {
  const contacts = useSelector(state => state.contact.items);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Menu />
      <Suspense fallback={<p>....Loading</p>}>
        <Routes>
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/contacts" element={<ContactsPages />} />
        </Routes>
      </Suspense>
    </>
  );
}
