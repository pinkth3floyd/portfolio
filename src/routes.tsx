
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Index /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy', element: <Privacy /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <ProtectedRoute><Admin /></ProtectedRoute>
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
