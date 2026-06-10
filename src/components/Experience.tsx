import { motion } from 'motion/react';
import SalonIcon from './SalonIcon';

export default function Experience() {
  const chapters = [
    {
      id: 'chapter-1',
      title: 'Our Modern Opulent Sanctuary',
      badge: 'THE DESIGN CONCEPT',
      description: 'Step into a world crafted with gold brass finishes, custom-accented salon chairs, and velvet lounge aesthetics. Our Kankurgachi floor is built as a tranquil high-fashion refuge, flooded with perfect warm daylighting setups to let you inspect your hair coloring results flawlessly.',
      icon: 'Crown',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
      tag: 'OPULENT LOUNGE'
    },
    {
      id: 'chapter-2',
      title: 'Clinical-Grade Sterilization Protocols',
      badge: 'HYGIENE IS LUXURY',
      description: 'At Wavelength, beauty and care go hand in hand with health. We employ complete hospital-grade sterilization cycles with individual tool autoclave chambers, disposable wear kits for skin cleanup, 24/7 run carbon air filters, and strict sanitized chair wipes before every guest.',
      icon: 'ShieldCheck',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      tag: 'ULTRA SAFETY'
    },
    {
      id: 'chapter-3',
      title: 'Connoisseur Partners & Luxury Products',
      badge: 'THE INGREDIENTS',
      description: 'Your hair and skin deserve nothing short of pure excellence. We reject cheap commercial formulations entirely in favor of certified elite brand partners, loading our service carts with authentic Kerastase hair masks, Dior Peptide glow serums, and organic Aveda clarifying minerals.',
      icon: 'Gem',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
      tag: 'ELITE SELECTION'
    }
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#0F0F0F] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            className="flex items-center justify-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>DISCOVER THE ATMOSPHERE</span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            The Wavelength Experience
          </h2>
          <p className="text-white/50 text-xs md:text-sm font-sans tracking-wide leading-relaxed">
            Take an immersive virtual tour of the meticulous elements that make Wavelength Salon Kolkata\'s most trusted luxury sanctuary.
          </p>
        </div>

        {/* Stories Chapter Grid */}
        <div className="space-y-24 md:space-y-36">
          {chapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={chapter.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Photo Container */}
                <motion.div
                  className={`col-span-12 lg:col-span-6 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-[#0F0F0F]/10 z-10 pointer-events-none" />
                  <div className="relative aspect-[16/11] overflow-hidden border border-white/5 shadow-2xl">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Absolute visual float bar */}
                  <div className={`absolute bottom-[-16px] ${isEven ? 'left-[-16px]' : 'right-[-16px]'} hidden sm:block p-4 border border-[#D4AF37]/20 bg-[#0F0F0F]/90 backdrop-blur-md text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] z-20`}>
                    {chapter.tag} // CHAPTER.0{index + 1}
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className={`col-span-12 lg:col-span-6 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                >
                  {/* Badge */}
                  <div className="flex items-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.25em] font-bold mb-4">
                    <SalonIcon name={chapter.icon} size={14} />
                    <span>{chapter.badge}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-2xl md:text-3.5xl font-semibold tracking-tight leading-tight text-white mb-6">
                    {chapter.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed mb-8 font-stone-300">
                    {chapter.description}
                  </p>

                  {/* Micro checklist of assurances */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-2.5 text-xs text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>Dedicated service attention</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>Elite hospitality complimentary refreshments</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
