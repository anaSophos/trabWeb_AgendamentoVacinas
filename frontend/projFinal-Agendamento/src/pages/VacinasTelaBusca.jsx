import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import Input from '../components/Cards/InputPesquisa/index.jsx';
import Button from '../components/Button/index.jsx';

const VacinasBusca = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Vacinas"}/>
    <Input type={'text'} placeholder={"Pesquise a vacina que você deseja encontrar"}/>
    
    <Rodape />
    </>
  )
}

export default VacinasBusca
