import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//páginas
import Home from '../pages/Home.jsx'
import VacinasBusca from '../pages/VacinasTelaBusca.jsx';
import MyAgendamentos from '../pages/MyAgendamentos.jsx';
import CancelamentoAgendamento from '../pages/CancelarAgendamento.jsx';
import SucessoAgendamento from '../pages/SucessoAgendamento.jsx';
import CadastrarUser from '../pages/CadastrarUser.jsx';
import Login from '../pages/Login.jsx';
import CadastrarOperator from '../pages/CadastrarOperator.jsx';
import CadastrarVacina from '../pages/CadastrarVacina.jsx';
import HomeTelaOperator from '../pages/HomeTelaOperator.jsx';
import {Navigate} from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext.jsx';
import AcessoNegado from '../pages/AcessoNegado.jsx'
import ConfirmeAgendamento from '../pages/ConfirmeAgendamento.jsx';
import ListaAgendamentos from '../pages/ListaAgendamentos.jsx';

const RotaProtegida = ({ element, isPrivate, allowedUserType }) => {
    const { usuario } = useAuthContext();
  
    if (isPrivate && (!usuario || (usuario.userType !== allowedUserType))) {
      return <Navigate to="/access-negado" />;
    }
  
    return element;
  };

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vacinas",
        element: <RotaProtegida element={<VacinasBusca />} isPrivate allowedUserType="user" />
      },
    {
        path: "/meus-agendamentos",
        element: <RotaProtegida element={<MyAgendamentos />} isPrivate allowedUserType="user" />
    },
    {
        path: "/meus-agendamentos/cancelado",
        element: <CancelamentoAgendamento />,
    },
    {
        path: "/sucesso",
        element: <RotaProtegida element={<SucessoAgendamento />} isPrivate allowedUserType="user" />,
    },
    {
        path: "/cadastrar-user",
        element: <CadastrarUser />,
    },
    {
        path: "/cadastrar-operator",
        element: <RotaProtegida element={<CadastrarOperator />} isPrivate allowedUserType="operator" />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastrar-vacina",
        element: <RotaProtegida element={<CadastrarVacina />} isPrivate allowedUserType="operator" />,
    },
    {
        path: "/home-operator",
        element: <RotaProtegida element={<HomeTelaOperator />} isPrivate allowedUserType="operator" />,
    },
    {
        path: "/access-negado",
        element: <AcessoNegado />,
    },
    {
        path: "/confirmar/:idUser/:idVac/:VacName/:hospitalName",
        element: <RotaProtegida element={<ConfirmeAgendamento />} isPrivate allowedUserType="user" />,
    },
    {
        path: "/listar-agendamentos/",
        element: <RotaProtegida element={<ListaAgendamentos />} isPrivate allowedUserType="operator" />,
    },
]);
