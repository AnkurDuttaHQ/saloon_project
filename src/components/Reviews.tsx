import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reviewsList } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviewsList.length);
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    return () => stopAutoSlide();
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviewsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviewsList.length);
  };

  return (
    <section id="reviews" className="relative py-28 bg-[#FAF8F5] overflow-hidden">
      {/* Decorative vector */}
      <div className="absolute top-[20%] right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-8 w-60 h-60 bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            className="flex items-center justify-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>TRIBUTE FROM OUR PATRONS</span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] leading-tight mb-4">
            Trusted By 2,947+ Happy Clients
          </h2>
          <p className="text-stone-500 text-xs md:text-sm font-sans tracking-wide leading-relaxed">
            Read the real luxury ratings and heartfelt experiences shared on Google by our lovely guests from across Kolkata.
          </p>
        </div>

        {/* Testimonial Active Slider Box */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glassmorphic Active Card Frame */}
          <div className="min-h-[380px] sm:min-h-[320px] bg-white/70 backdrop-blur-md border border-white p-8 md:p-12 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Absolute quotation mark */}
            <span className="absolute right-8 top-4 text-[#D4AF37]/10 font-serif text-[150px] leading-none pointer-events-none select-none">
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col justify-between h-full relative z-10"
              >
                {/* 5 Star Rating */}
                <div className="flex items-center space-x-1.5 mb-6 text-yellow-500">
                  {[...Array(reviewsList[activeIdx].rating)].map((_, i) => (
                    <SalonIcon key={i} name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-[11px] font-mono tracking-wider text-stone-500 ml-2">
                    5.0 STAR LUXURY
                  </span>
                </div>

                {/* Testimonial Review Content */}
                <blockquote className="font-serif text-sm sm:text-base md:text-lg italic text-[#0F0F0F]/85 leading-relaxed font-medium mb-8">
                  "{reviewsList[activeIdx].review}"
                </blockquote>

                {/* Testimonial Author Block */}
                <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                  {/* Avatar */}
                  <img
                    src={reviewsList[activeIdx].avatar}
                    alt={reviewsList[activeIdx].name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/30"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-[#0F0F0F]">
                      {reviewsList[activeIdx].name}
                    </h4>
                    
                    <div className="flex flex-wrap items-center mt-1 text-[10px] text-stone-400 gap-x-2 gap-y-1">
                      <span className="text-[#D4AF37] font-semibold">Verified Review</span>
                      <span>•</span>
                      <span>Service: {reviewsList[activeIdx].service}</span>
                      <span>•</span>
                      <span>{reviewsList[activeIdx].date}</span>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Handlers Manual Overlay (Prev / Next Buttons) */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-[#D4AF37] text-stone-700 hover:text-white border border-stone-200 hover:border-[#D4AF37] rounded-none transition-all duration-300 focus:outline-none cursor-pointer shadow-md"
              aria-label="Previous Testimonial"
            >
              <SalonIcon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-[#D4AF37] text-stone-700 hover:text-white border border-stone-200 hover:border-[#D4AF37] rounded-none transition-all duration-300 focus:outline-none cursor-pointer shadow-md"
              aria-label="Next Testimonial"
            >
              <SalonIcon name="ChevronRight" size={16} />
            </button>
          </div>

          {/* Indicator Dot Icons */}
          <div className="absolute left-6 md:left-12 bottom-[-16px] hidden sm:flex items-center space-x-2">
            {reviewsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-1.5 h-1.5 transition-all duration-500 cursor-pointer ${
                  activeIdx === idx
                    ? 'w-6 bg-[#D4AF37]'
                    : 'bg-stone-300 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
