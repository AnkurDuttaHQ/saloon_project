import { motion } from 'motion/react';
import SalonIcon from './SalonIcon';

export default function About() {
  const highlights = [
    { title: 'Global Certified Stylists', desc: 'Trained at premium academies globally to execute master cuts and bridal artistry.' },
    { title: 'The Absolute Gold Environment', desc: 'Indulgent, clean, ambient scents of sandalwood with premium seating comfort.' },
    { title: 'Personalized Diagnostic Consults', desc: 'Personal hair/skin diagnostic mappings prior to every single treatment.' },
    { title: 'Elite Product Endorsement', desc: 'We utilize exclusively genuine Kerastase, L\'Oreal, Dior Beauty, and Aveda products.' }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#FAF8F5] overflow-hidden">
      {/* Decorative side accent lines */}
      <div className="absolute right-0 top-1/4 w-[1px] h-96 bg-[#D4AF37]/10" />
      <div className="absolute top-[35%] right-10 w-[350px] h-[350px] bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Luxury Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 relative">
              
              {/* Main Image */}
              <motion.div
                className="col-span-8 relative aspect-[4/5] rounded-none overflow-hidden shadow-2xl border border-white/40"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 bg-[#0F0F0F]/15 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=800"
                  alt="Wavelength styling salon master wash treatment"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Overlapping Image 2 */}
              <motion.div
                className="col-span-5 absolute bottom-[-40px] right-[-10px] aspect-square rounded-none overflow-hidden shadow-2xl border-4 border-[#FAF8F5] z-20 hidden sm:block"
                initial={{ opacity: 0, x: 45, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500"
                  alt="Wavelength luxury gold interiors"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Overlapping Image 3 (Mini Art Detail) */}
              <motion.div
                className="col-span-4 absolute top-[-30px] right-8 aspect-[3/4] rounded-none overflow-hidden shadow-xl border-2 border-[#FAF8F5] z-10 hidden sm:block"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500"
                  alt="High quality cosmetics palette"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Luxury Geometric Border Ornament */}
              <div className="absolute -left-6 -bottom-6 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/45 pointer-events-none" />
              <div className="absolute -right-6 -top-6 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/45 pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Salon Story & Excellence Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tag / Category Header */}
            <motion.div
              className="flex items-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span>SINCE 2018 OF OPULENCE</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Redefining Luxury Beauty Experiences In Kolkata
            </motion.h2>

            {/* Narrative */}
            <motion.p
              className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-sans text-stone-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Tucked inside the lively heart of Kankurgachi, <strong>Wavelength Salon</strong> is Kolkata's premier luxury sanctuary designed specifically for individuals who appreciate the finest standards of personal grooming. We believe that true styling starts with individual design. Our studio blends architectural grandeur with clinical precision.
            </motion.p>
            
            <motion.p
              className="text-gray-700 text-sm md:text-base leading-relaxed mb-10 font-sans text-stone-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From custom couture hair coloring balayage to imperial bridal makeup draping and gold clinical skin micro-cleanups, every visit is treated as a highly anticipated individual ritual, designed to rejuvenate your inner elegance and restore absolute glow.
            </motion.p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-3 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <div className="mt-1 p-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-sm group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] transition-all duration-300">
                    <SalonIcon name="Check" size={14} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-[#0F0F0F] mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-xs font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote of Assurance */}
            <motion.div
              className="mt-12 p-6 border-l-2 border-[#D4AF37] bg-[#FAF8F5] italic text-[#0F0F0F]/80 text-xs md:text-sm shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              "We perform with deep architectural passion, ensuring your personal grooming isn't just a basic appointment, but an unforgettable high-fashion statement."
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
