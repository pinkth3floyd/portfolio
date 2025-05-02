
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CyberBackground } from './CyberBackground';

const Layout: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/admin');
  const isLoginRoute = location.pathname.includes('/login');
  const hideNavFooter = isAdminRoute || isLoginRoute;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {!hideNavFooter && <Navigation />}
        <main className="flex-grow">
          <Outlet />
        </main>
        {!hideNavFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
