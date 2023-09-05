import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          to="/"
          aria-label="Feed | Dogs"
          title="Ir para o Feed"
        >
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/entrar">
            Entrar | Criar conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
