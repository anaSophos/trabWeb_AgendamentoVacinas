import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormComponent from '../components/Forms/FormCadastrarUser/index.jsx';

const CadastrarUser = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Criar Conta"}/>
    <FormComponent/>
      <Rodape />
    </>
  )
}

export default CadastrarUser
