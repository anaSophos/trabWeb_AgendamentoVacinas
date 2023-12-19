import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormCadastrarOperator from '../components/Forms/FormCadastrarOperator/index.jsx';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const CadastrarOperator = () => {
  const navegacao = useNavigate();
  const handleSubmit = async(email, name, password, hospital) =>{
    try{
      const response = await axios.post('http://localhost:3001/operator/create', {
        email,
        name,
        password,
        hospital
      })
      console.log(response.data)
      if (response.status === 201) {
        alert('Usuário Operador criado com sucesso!');
        navegacao('/login')
      } else {
        alert('Erro ao criar novo usuário Operador. Verifique suas informações e tente novamente.');
      }
    } catch (error) {
      alert('Erro ao criar novo usuário Operador. Verifique suas informações e tente novamente. Detalhe: ' + error.response?.data.message);
    }
  }
  return (
    <>
    <Cabecalho inicio={"Menu"} urlInicio={"/home-operator"} nav1={"Cadastrar Operador"} urlNav1={"/cadastrar-operator"} nav2={"Cadastrar Vacina"} urlNav2={"/cadastrar-vacina"}/>
    <TituloPrincipal children={"Criar Conta de Operador"}/>
    <div className='pb-[5%]'>
      <FormCadastrarOperator onSubmit={handleSubmit}/>
    </div>
    <Rodape />
    </>
  )
}

export default CadastrarOperator
