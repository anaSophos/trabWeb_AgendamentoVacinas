import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadatrarVacina from '../components/Forms/FormCadastrarVacina/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const CadastrarVacina = () => {
  const navegate = useNavigate();
  const handleSubmit = async(name, description, qty, hospital) => {
      console.log("vacina criada:", {name, description, qty, hospital})
      alert("Vacina criada com sucesso!");
      navegate('/cadastrar-vacina')
  };

  return (
    <>
    <Cabecalho inicio={"Menu"} urlInicio={"/home-operator"} nav1={"Cadastrar Operador"} urlNav1={"/cadastrar-operator"} nav2={"Cadastrar Vacina"} urlNav2={"/cadastrar-vacina"}/>
    <TituloPrincipal children={"Cadastrar Vacina"}/>
    <div className='pb-[5%]'>
      <FormCadatrarVacina onSubmit={handleSubmit}/>
    </div>
      <Rodape />
    </>
  )
}

export default CadastrarVacina
