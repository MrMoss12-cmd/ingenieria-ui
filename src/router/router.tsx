import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
//import ServicesPage from './pages/ServicesPage';
//import ProjectsPage from './pages/ProjectsPage';
//import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage';
//import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
 /*
  {
    path: '/servicios',
    element: <MainLayout><ServicesPage /></MainLayout>,
  },
  {
    path: '/proyectos',
    element: <MainLayout><ProjectsPage /></MainLayout>,
  },
  {
    path: '/nosotros',
    element: <MainLayout><AboutPage /></MainLayout>,
  },
  {
    path: '/contacto',
    element: <MainLayout><ContactPage /></MainLayout>,
  },

  {
    path: '*',
    element: <MainLayout><NotFoundPage /></MainLayout>,
  },
    */
]);

export default router;