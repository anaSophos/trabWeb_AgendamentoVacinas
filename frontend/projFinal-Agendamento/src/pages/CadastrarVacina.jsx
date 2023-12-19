import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadatrarVacina from '../components/Forms/FormCadastrarVacina/index.jsx';

const CadastrarVacina = () => {
  return (
    <>
    <Cabecalho nav1={"Login"} urlNav1={"/login"} nav2={"Cadastro"} urlNav2={"/cadastrar-user"}/>
    <TituloPrincipal children={"Cadastrar Vacina"}/>
    <div className='pb-[5%]'><FormCadatrarVacina/></div>
      <Rodape />
    </>
  )
}

export default CadastrarVacina
