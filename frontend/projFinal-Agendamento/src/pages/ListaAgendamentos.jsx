import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape/index.jsx';

const ListaAgendamentos = () => {
  return (
    <>
    <Cabecalho inicio={"Menu"} urlInicio={"/home-operator"} nav1={"Cadastrar Operador"} urlNav1={"/cadastrar-operator"} nav2={"Cadastrar Vacina"} urlNav2={"/cadastrar-vacina"}/>
    
    <Rodape />
    </>
  )
}

export default ListaAgendamentos
