import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Profil', href: '#about' },
  { label: 'Program', href: '#features' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Erapor', href: 'https://erapor.spentimas.my.id' },
  { label: 'Kontak', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExternalLink = (href: string) => href.startsWith('http');

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/50 py-3' 
        : 'bg-transparent py-6 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className={`p-2 rounded-xl transition-all duration-500 ${
              scrolled 
                ? 'bg-school-primary text-white shadow-lg shadow-school-primary/30' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
            }`}>
               <GraduationCap size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-school-accent' : 'text-white'
            }`}>
              SMP N 3 MAOS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={isExternalLink(item.href) ? "_blank" : undefined}
                rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-school-primary hover:bg-school-primary/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
         <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner ${
           scrolled ? 'bg-white border-t border-gray-100' : 'bg-school-accent/95 backdrop-blur-xl'
         }`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={isExternalLink(item.href) ? "_blank" : undefined}
              rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-school-primary hover:bg-school-primary/5' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;