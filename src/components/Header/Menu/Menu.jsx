import { NavLink } from 'react-router-dom';


const Menu = ({getClassName}) => {
  return (
    <>
      <NavLink to="/contacts" className={getClassName}>
        Contacts
      </NavLink>
    </>
  );
};

export default Menu;
