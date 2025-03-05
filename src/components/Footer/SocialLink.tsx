import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface SocialLinkProps {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter';
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform, href }) => {
  const getIcon = () => {
    switch (platform) {
      case 'facebook':
        return <FaFacebook className="h-6 w-6" />;
      case 'instagram':
        return <FaInstagram className="h-6 w-6" />;
      case 'linkedin':
        return <FaLinkedin className="h-6 w-6" />;
      case 'twitter':
        return <FaTwitter className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href} 
      className="text-gray-300 hover:text-[#76B0DE] transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
      {getIcon()}
    </a>
  );
};

export default SocialLink;