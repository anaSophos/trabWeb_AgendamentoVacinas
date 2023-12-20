import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho/index.jsx';
import Rodape from '../components/Rodape';
import TituloPrincipal from '../components/Titulo/tituloPrincipal.jsx';
import FormLogin from '../components/Forms/FormLogin/index.jsx';
import http from '../http/index.js';
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext.jsx';

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
  
      const allUser = await buscarTodosUsuariosOuOperadores(userType)
      const specificUser = allUser.find((user) => user.email === email);
      if (response.data) {
        if (userType === 'user') {
          realizarLogin({ ...response.data, idUser: specificUser._id, userType: userType });
          navegacao('/vacinas');
        } else {
          realizarLogin({ ...response.data, idUser: specificUser._id, userType: userType, hospital: specificUser.hospital});
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