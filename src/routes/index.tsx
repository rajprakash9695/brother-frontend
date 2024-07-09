import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/about';
import Services from '../pages/service';
import Contacts from '../pages/contact';
import Page404 from '../pages/page404';

export default function Routes() {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/service', element: <Services /> },
        { path: '/contact', element: <Contacts /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
