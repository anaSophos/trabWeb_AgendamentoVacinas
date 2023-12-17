import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormLogin from '../components/Forms/FormLogin/index.jsx';

const Login = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Login no Sistema"}/>
    <div className='pb-[5%]'><FormLogin/></div>
      <Rodape />
    </>
  )
}

export default Login
