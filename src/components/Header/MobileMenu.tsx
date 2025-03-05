import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#255484]">
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b border-[#76B0DE]/20">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Menú</h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-[#76B0DE] hover:text-white"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-base font-medium text-white hover:bg-[#4B9CD3]/20 rounded-md transition-colors duration-200"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="px-4 py-6 border-t border-[#76B0DE]/20">
            <div className="grid grid-cols-1 gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#255484] bg-[#76B0DE] rounded-md hover:bg-[#4B9CD3] transition-colors duration-200"
                onClick={onClose}
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;