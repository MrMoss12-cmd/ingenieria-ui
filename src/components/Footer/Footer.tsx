import React from 'react';
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';

const Footer: React.FC = () => {
  const navigation = {
    main: [
      { name: 'Inicio', href: '/' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Proyectos', href: '/proyectos' },
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Contacto', href: '/contacto' }
    ],
    services: [
      { name: 'Diseño Estructural', href: '/servicios/diseno-estructural' },
      { name: 'Supervisión de Obra', href: '/servicios/supervision' },
      { name: 'Estudios de Suelo', href: '/servicios/estudios-suelo' },
      { name: 'Consultoría', href: '/servicios/consultoria' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Términos de Servicio', href: '/terminos' },
      { name: 'Aviso Legal', href: '/aviso-legal' }
    ]
  };

  return (
    <footer className="bg-[#255484]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="https://i.ibb.co/twP6nvXV/logo.jpg"
              alt="H&H Ingeniería Logo"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Soluciones innovadoras en ingeniería civil para proyectos que transforman el futuro.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#76B0DE] text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-[#76B0DE] text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

    
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#76B0DE]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} H&H Ingeniería. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="mt-6 md:mt-0 flex space-x-6">
              <SocialLink platform="facebook" href="#" />
              <SocialLink platform="instagram" href="#" />
              <SocialLink platform="linkedin" href="#" />
              <SocialLink platform="twitter" href="#" />
            </div>

            {/* Legal Links */}
            <div className="mt-6 md:mt-0">
              <ul className="flex space-x-6">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-[#76B0DE] text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;