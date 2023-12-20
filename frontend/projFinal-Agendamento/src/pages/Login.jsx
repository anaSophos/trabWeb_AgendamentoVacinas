import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormLogin from '../components/Forms/FormLogin/index.jsx';
import http from '../http/index.js';
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext.jsx';

/*
const Login = () => {
  const navegacao = useNavigate();
  const { realizarLogin } = useAuthContext();

  const handleSubmit = async (email, password, userType) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
        userType,
      });

      if (response.data) {
        const { _id, userType } = response.data;

        // Buscar todos os usuários ou operadores
        const allUsers = await buscarTodosUsuariosOuOperadores(userType);

        // Encontrar o usuário específico pelo email
        const specificUser = allUsers.find((user) => user.email === email);

        if (specificUser) {
          realizarLogin({ ...response.data, _id: specificUser._id}); // Inclua o userType no objeto
          if (userType === 'user') {
            navegacao('/vacinas');
          } else {
            navegacao('/home-operator');
          }
        } else {
          alert('Usuário não encontrado.');
        }
      } else {
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente. Detalhe: ' + error.response?.data.message);
    }
  };

  const buscarTodosUsuariosOuOperadores = async (userType) => {
    try {
      if (userType === 'user') {
        // Buscar todos os usuários
        const users = await axios.get('http://localhost:3001/user');
        return users.data;
      } else if (userType === 'operator') {
        // Buscar todos os operadores
        const operators = await axios.get('http://localhost:3001/operator');
        return operators.data;
      } else {
        return []; // Caso userType seja inválido
      }
    } catch (error) {
      console.error('Erro ao buscar todos usuários ou operadores:', error);
      return [];
    }
  };

  return (
    <>
      <Cabecalho nav1={"Login"} urlNav1={"/login"} nav2={"Cadastro"} urlNav2={"/cadastrar-user"}/>
      <TituloPrincipal children={'Login no Sistema'} />
      <div className='pb-[5%]'>
        <FormLogin onSubmit={handleSubmit} />
      </div>
      <Rodape />
    </>
  );
};

export default Login;*/
const Login = () => {
  const navegacao = useNavigate();
  const { realizarLogin } = useAuthContext();

  const handleSubmit = async (email, password, userType) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
        userType,
      });
      console.log('response data', response.data._id)
  
      const allUser = await buscarTodosUsuariosOuOperadores(userType)
      const specificUser = allUser.find((user) => user.email === email);
      realizarLogin({ ...response.data, idUser: specificUser._id });
      if (response.data) {
        if (userType === 'user') {
          navegacao('/vacinas');
        } else {
          navegacao('/home-operator');
        }
        
      } else {
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente. Detalhe: ' + error.response?.data.message);
    }
  };

  const buscarTodosUsuariosOuOperadores = async (userType) => {
    try {
      if (userType === 'user') {
        const users = await axios.get('http://localhost:3001/user');
        return users.data;
      } else if (userType === 'operator') {
        const operators = await axios.get('http://localhost:3001/operator');
        return operators.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erro ao buscar todos usuários ou operadores:', error);
      return [];
    }
  };

  return (
    <>
      <Cabecalho inicio={"Inicio"} urlInicio={"/"} nav1={"Login"} urlNav1={"/login"} nav2={"Cadastro"} urlNav2={"/cadastrar-user"}/>
      <TituloPrincipal children={'Login no Sistema'} />
      <div className='pb-[5%]'>
        <FormLogin onSubmit={handleSubmit} />
      </div>
      <Rodape />
    </>
  );
};

export default Login;