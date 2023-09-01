import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import { UserContext } from '../../UserContext';
import useMedia from '../../Hooks/useMedia';

import styles from './UserHeaderNav.module.css';

import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/stats.svg';
import { ReactComponent as AddPhoto } from '../../Assets/addPhoto.svg';
import { ReactComponent as Exit } from '../../Assets/exit.svg';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 767px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/Dogs/login');
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/Dogs/conta" end className={styles.navLink}>
          <Feed />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/Dogs/conta/estatisticas" className={styles.navLink}>
          <Stats />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/Dogs/conta/postar" className={styles.navLink}>
          <AddPhoto />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={handleLogout} className={styles.navLink}>
          <Exit />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
