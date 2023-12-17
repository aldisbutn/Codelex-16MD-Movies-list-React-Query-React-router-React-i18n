import { NavLink } from 'react-router-dom';

import Style from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={Style.navBarWrapper}>
      <NavLink to='/' className={({ isActive }) => {
        return `${Style.navBarHeading} ${isActive ? Style.active : ''}` 
      }}>
        <h4>About the project</h4>
      </NavLink>
      <NavLink to='/movieslist' className={({ isActive }) => {
        return `${Style.navBarHeading} ${isActive ? Style.active : ''}` 
      }}>
        <h4>Movies</h4>
      </NavLink>
      <NavLink to='/author' className={({ isActive }) => {
        return `${Style.navBarHeading} ${isActive ? Style.active : ''}` 
      }}>
        <h4>About the author</h4>
      </NavLink>
    </nav>
  );
};

export default NavBar;
