import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadastrarOperator from '../components/Forms/FormCadastrarOperator/index.jsx';

const CadastrarOperator = () => {
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Criar Conta de Operador"}/>
    <div className='pb-[5%]'><FormCadastrarOperator/></div>
      <Rodape />
    </>
  )
}

export default CadastrarOperator
