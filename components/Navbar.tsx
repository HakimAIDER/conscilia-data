import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Valeurs', href: '#values' },
    { name: 'Expertises', href: '#expertise' },
    { name: 'Emplois', href: '#jobs' },
    { name: 'Formations', href: '#training' },
    { name: 'Nos Clients', href: '#clients' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      // Offset accounts for navbar height and some buffer
      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveSection(href.substring(1));
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Animation */}
          <div className="flex-shrink-0 flex items-center cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => window.location.href = '#home'}>
            <img 
                src="https://i.postimg.cc/ZRv5wZn2/logo-consilia-data-removebg-preview.png" 
                alt="Consilia-Data Logo" 
                className="h-8 md:h-10 w-auto object-contain animate-pulse-slow drop-shadow-sm filter" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <div className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.href.substring(1))}
                    className={`text-sm font-medium transition-colors relative group py-1 ${isActive ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'}`}
                  >
                    {link.name}
                    <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-brand transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </a>
                );
              })}
            </div>
            
            <a 
                href="#contact" 
                className="bg-brand-dark text-white hover:bg-slate-800 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-dark/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
                Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-primary focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Line (only when not scrolled) */}
      {!scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
      )}

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl animate-fade-in-up lg:hidden h-screen">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block text-lg font-medium ${isActive ? 'text-brand-primary' : 'text-slate-800 hover:text-brand-primary'}`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 text-center rounded-xl text-base font-bold bg-brand-dark text-white shadow-lg mt-4"
            >
                Contactez-nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;