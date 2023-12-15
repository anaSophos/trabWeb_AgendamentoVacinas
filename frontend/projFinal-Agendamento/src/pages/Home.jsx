import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Banner from '../components/Banner';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';

const Home = () => {
  return (
    <>
    <Cabecalho/>
    <Banner/>
    <TituloPrincipal children={"titulo"}/>
      <Rodape />
    </>
  )
}

export default Home
