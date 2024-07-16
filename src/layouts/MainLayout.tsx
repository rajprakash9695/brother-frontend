import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useAuth from '../hooks/useAuth';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isPageNotFound = pathname.includes('404');
  const auth = useAuth();

  if (
    !auth?.user?.name &&
    !['/login', '/register', '/404'].includes(pathname)
  ) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {!isPageNotFound && <Navbar />}
      <Outlet />
      {!isPageNotFound && <Footer />}
    </div>
  );
}
