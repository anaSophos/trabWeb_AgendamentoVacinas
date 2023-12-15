import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//páginas
import Home from '../pages/Home.jsx'
import VacinasBusca from '../pages/VacinasTelaBusca.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vacinas",
        element: <VacinasBusca />,
    },
]);
