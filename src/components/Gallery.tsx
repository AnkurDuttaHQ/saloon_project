import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function Gallery() {
  const [activeFilt, setActiveFilt] = useState<'all' | 'hair' | 'beauty' | 'bridal' | 'makeup' | 'interior' | 'clients'>('all');
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'hair', label: 'Hair Cuts & Color' },
    { id: 'bridal', label: 'Bridal Makeovers' },
    { id: 'makeup', label: 'Glam Makeup' },
    { id: 'beauty', label: 'Nails & Beauty' },
    { id: 'interior', label: 'Meticulous Interiors' },
    { id: 'clients', label: 'Our Clients' }
  ] as const;

  const filteredPhotos = activeFilt === 'all'
    ? galleryItems
    : galleryItems.filter(p => p.category === activeFilt);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex(p => p.id === id);
    if (idx !== -1) {
      setSelectedPhotoIdx(idx);
    }
  };

  const closeLightbox = () => setSelectedPhotoIdx(null);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIdx !== null) {
      setSelectedPhotoIdx((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIdx !== null) {
      setSelectedPhotoIdx((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="relative py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="absolute top-[15%] left-0 w-80 h-80 bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none" />

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
            <span>THE VISUAL SANCTUARY</span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] leading-tight mb-4">
            Curated Gallery
          </h2>
          <p className="text-stone-500 text-xs md:text-sm font-sans tracking-wide leading-relaxed">
            Witness the real, unedited transformations, premium interiors, and bespoke styles created daily by our expert artisans in Kolkata.
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {filters.map((filt, idx) => (
            <motion.button
              key={filt.id}
              onClick={() => setActiveFilt(filt.id)}
              className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 rounded-sm focus:outline-none cursor-pointer ${
                activeFilt === filt.id
                  ? 'border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                  : 'border border-stone-200 text-stone-500 hover:text-[#0F0F0F] hover:border-stone-400 bg-white'
              }`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {filt.label}
            </motion.button>
          ))}
        </div>

        {/* Masonry Responsive Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden group border border-stone-100 shadow-lg bg-white rounded-none cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image and core overlay */}
                <div className="relative overflow-hidden w-full h-fit">
                  {/* Subtle fade overlay */}
                  <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-[#0F0F0F]/35 transition-all duration-500 z-10" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                  />

                  {/* Absolute Gold Detail Hover Grid */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
                    <span className="text-[#D4AF37] text-[9px] font-mono tracking-widest uppercase mb-1 font-bold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-white text-base md:text-lg font-medium leading-none mb-2">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-white/70 text-[10px] font-sans">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Lightbox Viewer */}
        <AnimatePresence>
          {selectedPhotoIdx !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Backlight Glow inside Lightbox */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

              {/* Top Control Bar */}
              <div className="absolute top-6 left-0 right-0 px-8 flex items-center justify-between text-white z-55">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                    WAVELENGTH CATALOGUE
                  </span>
                  <span className="text-xs text-white/60">
                    Photo {selectedPhotoIdx + 1} of {galleryItems.length}
                  </span>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <SalonIcon name="X" size={18} />
                </button>
              </div>

              {/* Navigation Left */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 md:left-8 p-4 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] rounded-full transition-all duration-300 z-55 focus:outline-none cursor-pointer"
                aria-label="Previous Photo"
              >
                <SalonIcon name="ChevronLeft" size={20} />
              </button>

              {/* Immersive Photo Viewer Frame */}
              <motion.div
                className="relative max-w-4xl max-h-[75vh] md:max-h-[80vh] flex flex-col items-center justify-center border border-white/10 overflow-hidden select-none bg-black"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[selectedPhotoIdx].image}
                  alt={galleryItems[selectedPhotoIdx].title}
                  className="max-w-full max-h-[70vh] object-contain select-none pointer-events-none"
                />

                {/* Lightbox Footer text caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#0F0F0F]/90 border-t border-white/5 text-center text-white z-20">
                  <span className="text-[#D4AF37] text-[9px] font-mono tracking-widest uppercase font-bold">
                    {galleryItems[selectedPhotoIdx].category}
                  </span>
                  <h3 className="font-serif text-sm md:text-base font-medium mt-1">
                    {galleryItems[selectedPhotoIdx].title}
                  </h3>
                  {galleryItems[selectedPhotoIdx].description && (
                    <p className="text-white/60 text-[10px] sm:text-[11px] font-sans mt-1">
                      {galleryItems[selectedPhotoIdx].description}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={nextPhoto}
                className="absolute right-4 md:right-8 p-4 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] rounded-full transition-all duration-300 z-55 focus:outline-none cursor-pointer"
                aria-label="Next Photo"
              >
                <SalonIcon name="ChevronRight" size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
