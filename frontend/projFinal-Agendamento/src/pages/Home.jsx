import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Banner from '../components/Banner';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import CardMenuOperator from '../components/Cards/CardMenuOperator/index.jsx';

const Home = () => {
  return (
    <>
    <Cabecalho inicio={"Inicio"} urlInicio={"/"} nav1={"Login"} urlNav1={"/login"} nav2={"Cadastro"} urlNav2={"/cadastrar-user"}/>
    <Banner/>
    <div className='w-[70%] mx-auto'>
    <TituloPrincipal children={"“A importância da vacinação não está somente na proteção individual, mas porque ela evita a propagação em massa de doenças que podem levar à morte ou a sequelas graves” (José Augusto Alves de Britto, IFF/ Fiocruz)"}/>
    </div>
    <div className='w-[100%] py-[5%] flex flex-wrap flex-row'>
      <CardMenuOperator urlImagem={"/Imagens/icon1.png"} childrenButton={"LOGIN"} redirec={"/login"}/>
      <CardMenuOperator urlImagem={"/Imagens/icon2.png"} childrenButton={"CADASTRO"} redirec={"/cadastrar-user"}/>
    </div>
    <Rodape />
    </>
  )
}

export default Home
