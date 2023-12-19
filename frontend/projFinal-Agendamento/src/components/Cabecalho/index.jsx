import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import CabecalhoNav from '../CabecalhoNav';
import logo from '../../assets/estadoPara.png';
import IconUser from '../../assets/IconUser.svg';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

function Cabecalho({inicio, urlInicio, nav1, urlNav1, nav2, urlNav2}) {
  const { realizarLogout } = useAuthContext();
  const [acordeonAberto, setAcordeonAberto] = useState(false);

  const toggleAcordeon = () => {
    setAcordeonAberto(!acordeonAberto);
  };

  const handleLogout = () => {
    realizarLogout();
    // Redirecionar para a página de início após o logout
    window.location.href = '/';
  };

  return (
    <header className={styles.cabecalho}>
      <Link className={styles.logo}>
        <img src={logo} alt="Estado do Pará"></img>
      </Link>
      <nav className={styles.nav}>
        <CabecalhoNav url={urlInicio}>
          {inicio}
        </CabecalhoNav>
        <CabecalhoNav url={urlNav1}>
          {nav1}
        </CabecalhoNav>
        <CabecalhoNav url={urlNav2}>
          {nav2}
        </CabecalhoNav>
      </nav>
      <div className={styles.perfil} onClick={toggleAcordeon}>
        <img src={IconUser} alt="Perfil"></img>
        {acordeonAberto && (
          <div className={styles.acordeon}>
            <button onClick={handleLogout}>Sair</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Cabecalho;