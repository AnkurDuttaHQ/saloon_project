import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesList } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'makeup' | 'skin' | 'grooming'>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hair', label: 'Hair Sculpting & Color' },
    { id: 'makeup', label: 'Couture Makeup' },
    { id: 'skin', label: 'Clinical Skin Care' },
    { id: 'grooming', label: 'Elite Grooming' }
  ] as const;

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#0F0F0F] text-white overflow-hidden">
      {/* Background cinematic accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
      <div className="absolute top-[10%] left-[-100px] w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-100px] w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none flex justify-between px-12 md:px-24">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            className="flex items-center justify-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>THE SERVICE CATALOGUE</span>
          </motion.div>
          
          <motion.h2
            className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Premium Services
          </motion.h2>
          
          <motion.p
            className="text-white/60 text-xs md:text-sm font-sans tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explore our curated selection of high-end beauty, hair-care, skin therapy, bridal makeups, and elite men\'s grooming treatments, individually tuned to perfection.
          </motion.p>
        </div>

        {/* Categories Filtering Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D4AF37] text-white font-bold shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-[#D4AF37] border border-white/5'
              }`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Services Showcase Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-[#141414] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 rounded-none overflow-hidden flex flex-col justify-between shadow-2xl relative"
              >
                {/* Ribbon Price Float */}
                <div className="absolute top-4 right-4 z-20 bg-[#0F0F0F]/85 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] md:text-xs font-mono font-bold tracking-wider px-3 py-1.5 shadow-md">
                  {service.price}
                </div>

                {/* Card Top: Luxury Image with hover shine */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
                  
                  {/* Glowing diagonal hover line (shine) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:animate-shine z-20 pointer-events-none" />

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                  />
                  
                  {/* Float Category Icon */}
                  <div className="absolute bottom-4 left-4 z-20 p-2.5 bg-[#D4AF37] text-[#0F0F0F] rounded-none shadow-lg">
                    <SalonIcon name={service.iconName} size={16} />
                  </div>
                </div>

                {/* Card Body: Details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-white/40 text-[9px] uppercase font-mono tracking-widest mb-2">
                      <SalonIcon name="Clock" size={10} />
                      <span>{service.duration}</span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-white/60 text-xs font-sans leading-relaxed mb-6 font-stone-300">
                      {service.description}
                    </p>

                    {/* Key Benefits Bullets */}
                    {service.benefits && (
                      <div className="space-y-2 mt-2 mb-6 border-t border-white/5 pt-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2 text-[11px] text-white/50">
                            <span className="text-[#D4AF37] mt-0.5">✔</span>
                            <span className="font-sans leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between mt-auto">
                    <button
                      onClick={scrollToBooking}
                      className="inline-flex items-center space-x-2 text-[#D4AF37] font-semibold text-[10px] uppercase font-sans tracking-widest hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
                    >
                      <span>Book Treatment</span>
                      <SalonIcon name="ArrowRight" size={10} />
                    </button>
                    <span className="text-[10px] text-white/30 font-mono tracking-wider">
                      WAVELENGTH • ECO
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
