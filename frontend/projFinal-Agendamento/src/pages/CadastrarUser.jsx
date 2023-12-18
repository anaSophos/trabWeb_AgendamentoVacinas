import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormComponent from '../components/Forms/FormCadastrarUser/index.jsx';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const CadastrarUser = () => {
  const navegacao = useNavigate();
  const handleSubmit = async(email, name, cpf, rg, phoneNum, birth, password) =>{
    try{
      const response = await axios.post('http://localhost:3001/user/create', {
        email,
        name,
        cpf,
        rg,
        phoneNum,
        birth,
        password,
      })
      console.log(response.data)
      if (response.status === 201) {
        alert('Usuário criado com sucesso!');
        navegacao('/login')
      }
    } catch (error){
      alert('Erro ao criar novo usuário. Verifique suas informações e tente novamente. Detalhe: ' + error.response?.data.message)
    }
  }
  return (
    <>
    <Cabecalho/>
    <TituloPrincipal children={"Criar Conta"}/>
    <div className='pb-[5%]'>
      <FormComponent onSubmit={handleSubmit}/>
    </div>
    <Rodape />
    </>
  )
}

export default CadastrarUser
