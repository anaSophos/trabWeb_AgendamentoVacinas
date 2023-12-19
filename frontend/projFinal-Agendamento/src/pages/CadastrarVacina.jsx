import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadatrarVacina from '../components/Forms/FormCadastrarVacina/index.jsx';

const CadastrarVacina = () => {
  return (
    <>
    <Cabecalho inicio={"Menu"} urlInicio={"/home-operator"} nav1={"Cadastrar Operador"} urlNav1={"/cadastrar-operator"} nav2={"Cadastrar Vacina"} urlNav2={"/cadastrar-vacina"}/>
    <TituloPrincipal children={"Cadastrar Vacina"}/>
    <div className='pb-[5%]'><FormCadatrarVacina/></div>
      <Rodape />
    </>
  )
}

export default CadastrarVacina
