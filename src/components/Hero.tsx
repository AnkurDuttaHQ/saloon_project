import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SalonIcon from './SalonIcon';
import { salonInfo } from '../data/salonData';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600', // Master Stylist
  'https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=1600', // Hair Spa Treatment
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600', // Glorious Bridal Base
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1600'  // Luxury Rejuvenation Facial
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.015,
        y: (e.clientY - window.innerHeight / 2) * 0.015
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#0F0F0F] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background Slideshow with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(1.05)`
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentSlide]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.45, scale: 1.02 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Luxury Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/80 via-[#0F0F0F]/20 to-[#0F0F0F]/80" />

      {/* Embedded Ambient Light Glow */}
      <div className="absolute top-[25%] left-[25%] w-[450px] h-[450px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Gold Particles Emitter Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden odd-particles">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center select-none">
        {/* Superior Top Accent Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 border border-[#D4AF37]/35 bg-[#D4AF37]/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>{salonInfo.badge}</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 font-semibold select-none">
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Where Beauty
          </motion.span>
          <motion.span
            className="block text-[#D4AF37] italic font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Meets Perfection
          </motion.span>
        </h1>

        {/* Subheadline description */}
        <motion.p
          className="max-w-2xl mx-auto text-sm md:text-lg text-white/80 font-sans tracking-wide leading-relaxed mb-10 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Experience Kolkata's outstanding luxury sanctuary for beauty, couture hair aesthetics, skin care, bridal elegance makeup, and modern master grooming.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <button
            onClick={() => scrollToSection('#booking')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D4AF37] text-white hover:bg-white hover:text-[#0F0F0F] px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-500 shadow-xl shadow-[#D4AF37]/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] focus:outline-none cursor-pointer"
          >
            <span>Book Appointment</span>
            <SalonIcon name="ArrowRight" size={12} />
          </button>

          <button
            onClick={() => scrollToSection('#services')}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-500 focus:outline-none cursor-pointer"
          >
            <span>Explore Services</span>
          </button>
        </motion.div>
      </div>

      {/* Google Trust Rating Float */}
      <motion.div
        className="absolute bottom-8 left-8 hidden md:flex items-center space-x-3 bg-[#0F0F0F]/80 backdrop-blur-md px-4 py-2.5 rounded-sm border border-white/10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <SalonIcon key={i} name="Star" size={14} className="fill-yellow-500" />
          ))}
        </div>
        <div className="text-[10px] tracking-wider uppercase">
          <span className="font-bold text-white text-[12px]">4.5★</span> Rating •{' '}
          <span className="text-white/70">2.9K+ Reviews</span>
        </div>
      </motion.div>

      {/* Subdued Bottom Scroll Indicator Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50 cursor-pointer"
        onClick={() => scrollToSection('#services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">SCROLL</span>
        <motion.div
          className="w-[1.5px] h-8 bg-white/30 rounded-full relative overflow-hidden"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
