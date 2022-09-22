// import { useEffect } from 'react';
import UserRoutes from './UserRoutes';
// import Header from './Header/Header';
// import { useSelector } from 'react-redux';
// import Menu from './Menu/Menu';

export default function App() {
  // const contacts = useSelector(state => state.contact.items);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      {/* <Header /> */}
      <UserRoutes />
    </div>
  );
}
