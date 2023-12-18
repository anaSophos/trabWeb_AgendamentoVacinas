import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormLogin from '../components/Forms/FormLogin/index.jsx';
import http from '../http/index.js';
import axios from 'axios';

const Login = () => {
  const navegacao = useNavigate();

  const handleSubmit = async (email, password, userType) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
        userType,
      });

      // Aqui, você pode lidar com a resposta do backend, como salvar o token.
      if (response.data) {
        if (userType === 'user') {
          navegacao('/vacinas');
        } else {
          navegacao('/home-operator');
        }
      } else {
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente. Detalhe: Resposta do Backend sem corpo');
      }
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente. Detalhe: ' + error.response?.data.message);
    }
  };

  return (
    <>
      <Cabecalho />
      <TituloPrincipal children={'Login no Sistema'} />
      <div className='pb-[5%]'>
        <FormLogin onSubmit={handleSubmit} />
      </div>
      <Rodape />
    </>
  );
};

export default Login;