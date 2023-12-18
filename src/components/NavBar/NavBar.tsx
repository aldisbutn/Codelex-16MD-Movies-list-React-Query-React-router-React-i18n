import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Style from './NavBar.module.css';

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav className={Style.navBarWrapper}>
      <NavLink
        to='/'
        className={({ isActive }) => {
          return `${Style.navBarHeading} ${isActive ? Style.active : ''}`;
        }}
      >
        <h4>{t('navBar:headings:project')}</h4>
      </NavLink>
      <NavLink
        to='/movieslist'
        className={({ isActive }) => {
          return `${Style.navBarHeading} ${isActive ? Style.active : ''}`;
        }}
      >
        <h4>{t('navBar:headings:movies')}</h4>
      </NavLink>
      <NavLink
        to='/author'
        className={({ isActive }) => {
          return `${Style.navBarHeading} ${isActive ? Style.active : ''}`;
        }}
      >
        <h4>{t('navBar:headings:author')}</h4>
      </NavLink>
    </nav>
  );
};

export default NavBar;
