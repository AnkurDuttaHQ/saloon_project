import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SalonIcon from './SalonIcon';
import { salonInfo } from '../data/salonData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft scroll to top on routing shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#D4AF37]/15 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 select-none group focus:outline-none"
          >
            <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-full transition-all duration-500 shadow-md shadow-[#D4AF37]/10 group-hover:bg-white group-hover:scale-105">
              <span className="text-[#0F0F0F] font-serif text-2xl font-bold italic">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest uppercase leading-none text-[#FAF8F5] group-hover:text-[#D4AF37] transition-all duration-300">
                Wavelength
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase opacity-70 text-[#D4AF37] group-hover:opacity-100 transition-opacity duration-300">
                Luxury Salon & Studio
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-sans text-xs uppercase tracking-widest transition-colors duration-300 relative py-1 focus:outline-none hover:translate-y-[-1px] ${
                    isActive ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37]/35' : 'text-[#FAF8F5]/80 hover:text-[#D4AF37]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Call & Mobile Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/appointment"
              className="hidden sm:inline-flex items-center space-x-2 bg-[#D4AF37] text-white px-7 py-3 rounded-full hover:bg-white hover:text-[#0F0F0F] text-[10px] uppercase tracking-widest font-bold transition-all duration-500 shadow-lg shadow-[#D4AF37]/20 focus:outline-none cursor-pointer"
            >
              <span>Book Appointment</span>
              <SalonIcon name="ArrowRight" size={12} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <SalonIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0F0F0F] flex flex-col pt-24 px-8 pb-12 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Backdrop lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-between px-12">
              <div className="w-[1px] h-full bg-white"></div>
              <div className="w-[1px] h-full bg-white"></div>
              <div className="w-[1px] h-full bg-white"></div>
            </div>

            <nav className="flex flex-col space-y-6 my-auto">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `font-sans text-xl uppercase tracking-widest transition-all duration-300 flex items-center space-x-4 focus:outline-none ${
                      isActive ? 'text-[#D4AF37]' : 'text-[#FAF8F5]/90 hover:text-[#D4AF37]'
                    }`
                  }
                >
                  <span className="text-[#D4AF37]/40 text-xs font-mono">0{i + 1}</span>
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </nav>

            {/* mobile CTA */}
            <motion.div
              className="mt-auto space-y-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 text-white/60 text-xs tracking-wider">
                <SalonIcon name="Phone" className="text-[#D4AF37]" size={14} />
                <span>{salonInfo.contact.phoneFormatted}</span>
              </div>
              <Link
                to="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block bg-[#D4AF37] text-white hover:text-black py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 rounded-full shadow-lg shadow-[#D4AF37]/25 focus:outline-none"
              >
                Reserve Your Experience
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
