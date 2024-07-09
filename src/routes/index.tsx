import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/about';
import Services from '../pages/service';

export default function Routes() {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/service', element: <Services /> },
      ],
    },
  ]);
}
