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

const RotaProtegida = ({ element, isPrivate }) => {
    const { usuario } = useAuthContext();
  
    if (isPrivate && !usuario) {
      return <Navigate to="/access-negado" />;
    }
  
    return element;
  };
  export const Rota = ({ isPrivate, ...props }) => (
    <Route
      element={<RotaProtegida {...props} isPrivate={isPrivate} />}
      {...props}
    />
  );

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vacinas",
        element: <RotaProtegida element={<VacinasBusca />} isPrivate/>,
      },
    {
        path: "/meus-agendamentos",
        element: <RotaProtegida element={<MyAgendamentos />} isPrivate/>,
    },
    {
        path: "/meus-agendamentos/cancelado",
        element: <RotaProtegida element={<CancelamentoAgendamento />} isPrivate/>,
    },
    {
        path: "/sucesso",
        element: <RotaProtegida element={<SucessoAgendamento />} isPrivate/>,
    },
    {
        path: "/cadastrar-user",
        element: <CadastrarUser />,
    },
    {
        path: "/cadastrar-operator",
        element: <RotaProtegida element={<CadastrarOperator />} isPrivate/>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastrar-vacina",
        element: <RotaProtegida element={<CadastrarVacina />} isPrivate/>,
    },
    {
        path: "/home-operator",
        element: <RotaProtegida element={ <HomeTelaOperator />} isPrivate/>,
    },
    {
        path: "/access-negado",
        element: <AcessoNegado />,
    },
    {
        path: "/confirmar/:userId/:idVac/:VacName/:hospitalName",
        element: <RotaProtegida element={<ConfirmeAgendamento />} isPrivate />,
    },
    {
        path: "/listar-agendamentos/",
        element: <ListaAgendamentos />,
    },
]);
