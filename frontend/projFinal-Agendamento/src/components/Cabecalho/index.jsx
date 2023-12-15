import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import CabecalhoNav from '../CabecalhoNav'
import logo from '../../assets/estadoPara.png'
import IconUser from '../../assets/IconUser.svg'


function Cabecalho({}){
  return (
   <header className={styles.cabecalho}>
         <Link to={'/estado'} className={styles.logo}>
          <img src={logo} alt="Estado do Pará"></img>
        </Link>
        <nav className={styles.nav}>
          <CabecalhoNav url={'/'}>
            Inicio
          </CabecalhoNav>
          <CabecalhoNav url={'/Consultar'}>
            Consultar Vacina
          </CabecalhoNav>
          <CabecalhoNav url={'/Agendamentos'}>
            Meus Agendamentos
          </CabecalhoNav>
        </nav>
        <Link to={'/'} className={styles.perfil}>
          <img src={IconUser} alt="Perfil"></img>
  </Link>
  </header>
  )
}

export default Cabecalho
