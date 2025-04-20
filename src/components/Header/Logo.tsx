import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img 
        src="https://i.ibb.co/twP6nvXV/logo.jpg" 
        alt="H&H Ingeniería Logo"
        className="w-17 h-17 object-contain"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-[#76B0DE]">H&H Ingeniería</span>
        <span className="text-sm text-[#76B0DE]">Soluciones en Ingeniería Civil</span>
      </div>
    </Link>
  );
};

export default Logo;