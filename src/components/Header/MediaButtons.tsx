import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

interface MediaButtonsProps {
  isScrolled?: boolean;
}

const MediaButtons: React.FC<MediaButtonsProps> = ({ isScrolled }) => {
  const socialMedia = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: <FaLinkedin className="h-5 w-5" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebook className="h-5 w-5" />
    },
    {
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram className="h-5 w-5" />
    }
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialMedia.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`${
            isScrolled 
              ? 'text-[#76B0DE] hover:text-[#4B9CD3]' 
              : 'text-black hover:text-[#76B0DE]'
          } transition-colors duration-300`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default MediaButtons;