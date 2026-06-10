import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { beforeAfterData } from '../data/salonData';
import SalonIcon from './SalonIcon';

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

function ComparisonSlider({ beforeImage, afterImage, title }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Attach window mouseup to stop dragging smoothly even when cursor leaves slider bounds
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square sm:aspect-[4/3] w-full max-w-3xl mx-auto overflow-hidden select-none cursor-ew-resize border-2 border-white/15 shadow-2xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={`${title} Before`}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white border border-white/10 text-[9px] font-mono tracking-widest uppercase px-3 py-1.5 font-bold z-10 rounded-sm">
          BEFORE
        </div>
      </div>

      {/* After Image (Overlapping Foreground with clipPath) */}
      <div
        className="absolute inset-0 pointer-events-none select-none transition-all duration-75"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <img
          src={afterImage}
          alt={`${title} After`}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute bottom-4 right-4 bg-[#D4AF37]/95 text-[#0F0F0F] text-[9px] font-mono tracking-widest uppercase px-3 py-1.5 font-bold z-10 rounded-sm">
          AFTER WAVELENGTH BEAUTY
        </div>
      </div>

      {/* Separation Line Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2.5px] bg-[#D4AF37] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Rounded Golden Button Toggle Handler */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#D4AF37] text-[#D4AF37] shadow-xl flex items-center justify-center cursor-ew-resize select-none pointer-events-auto">
          <div className="flex space-x-1 select-none">
            <span className="text-[10px] select-none font-bold">◀</span>
            <span className="text-[10px] select-none font-bold">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="transformations" className="relative py-28 bg-[#FAF8F5] overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-[20%] right-[-140px] w-96 h-96 bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[5%] bottom-[5%] w-72 h-72 bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />

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
            <span>LIVE VISUAL PROOF</span>
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] leading-tight mb-4">
            Interactive Transformations
          </h2>

          <p className="text-stone-500 text-xs md:text-sm font-sans tracking-wide leading-relaxed">
            Drag the cursor handle left and right on the images below to explore the exquisite craftsmanship of our head stylists, colorists, and makeup artists.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center space-x-3 mb-12 border-b border-stone-200 pb-1 max-w-xl mx-auto">
          {beforeAfterData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-widest relative transition-all duration-300 focus:outline-none cursor-pointer ${
                activeTab === index
                  ? 'text-[#D4AF37]'
                  : 'text-stone-400 hover:text-[#0F0F0F]'
              }`}
            >
              <span>{item.accent}</span>
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                  layoutId="activeTransformTabLine"
                />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Window */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-2xl relative border border-stone-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8 justify-between"
            >
              {/* Image Slider Wrapper */}
              <div>
                <ComparisonSlider
                  beforeImage={beforeAfterData[activeTab].beforeImage}
                  afterImage={beforeAfterData[activeTab].afterImage}
                  title={beforeAfterData[activeTab].title}
                />
              </div>

              {/* Transformation Text Details */}
              <div className="text-center max-w-2xl mx-auto">
                <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase font-bold mb-3 rounded-sm">
                  {beforeAfterData[activeTab].accent}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0F0F0F] mb-3">
                  {beforeAfterData[activeTab].title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-sans">
                  {beforeAfterData[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
