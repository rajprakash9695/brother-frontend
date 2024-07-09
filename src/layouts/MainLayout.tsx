import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isPageNotFound = pathname.includes('404');
  return (
    <div>
      {!isPageNotFound && <Navbar />}
      <Outlet />
      {!isPageNotFound && <Footer />}
    </div>
  );
}
