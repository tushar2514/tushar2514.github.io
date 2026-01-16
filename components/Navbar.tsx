import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="text-emerald-500 font-mono font-bold text-xl tracking-tighter border-2 border-emerald-500 rounded px-2 py-1 hover:bg-emerald-500/10 transition-colors">
            TR
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-emerald-400 text-sm font-mono transition-colors"
            >
              <span className="text-emerald-500 mr-1">0{idx + 1}.</span>
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" className="px-4 py-1.5 border border-emerald-500 text-emerald-500 text-sm font-mono rounded hover:bg-emerald-500/10 transition-colors">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-emerald-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-b border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 rounded font-mono text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-emerald-500 mr-2">0{idx + 1}.</span>
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" className="block mt-4 text-center px-3 py-3 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500/10 transition-colors font-mono">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};