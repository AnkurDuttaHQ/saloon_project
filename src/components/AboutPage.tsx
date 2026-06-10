import React from 'react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { Award, ShieldCheck, Heart, Coffee, Check, ChevronRight } from 'lucide-react';
import { salonInfo } from '../data/salonData';

const expertsList = [
  {
    name: 'Arpita',
    role: 'Senior Hair Stylist & Botox Expert',
    bio: 'With over 8 years of master training, Arpita specializes in luxury balayage highlights, chemical restructuring treatments (Botox, Keratin, Nanoplastia), and precision couture haircuts designed for elegant textures.',
    specialty: 'Hair Botox & Balayage',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Vikram Sen',
    role: 'Master Hair Architect & Custom Stylist',
    bio: 'Vikram spent years working across prestigious salons in Mumbai before joining Wavelength. He excels in modern fashion tresses, advanced fades, and complete bridal hair styling.',
    specialty: 'Precision Haircuts & Updos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Megha Roy',
    role: 'Lead Bridal Makeup Artisan',
    bio: 'Megha is recognized as a visionary in Bengali and contemporary North Indian bridal styles. Her prowess in airbrush application and long-wearing HD makeup is highly acclaimed across West Bengal.',
    specialty: 'HD Airbrush Bridal & Saree Draping',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Rohan Sharma',
    role: 'Advanced Skincare Consultant',
    bio: 'Rohan provides our guests with scientific skin mappings. He targets pores, dark circles, and dry zones utilizing clinical-grade microderm facials and advanced gold peptide masks.',
    specialty: 'Dior Gold & Hydra-Glow Facials',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Tanya Banerjee',
    role: 'Nail Artist & Esthetician',
    bio: 'Tanya directs our premium nail extension studio, offering hand-crafted chrome accents, custom line art, and deeply nourishing mineral spa therapies.',
    specialty: 'Nail Gel extensions & Hand Therapies',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  }
];

const standardsList = [
  {
    title: 'Autoclave Sterilization',
    desc: 'Every single state-of-the-art scissors, metal comb, and trimmer undergoes surgical-grade high-temperature autoclave pressure sterilization between appointments.'
  },
  {
    title: 'Fresh Single-Use Disposables',
    desc: 'Each guest receives completely fresh, single-use, biodegradable capes, sanitizing gowns, headbands, buffers, and towels. Zero recycled accessories.'
  },
  {
    title: 'Medical-Grade HEPA Purification',
    desc: 'Our salon runs high-volume active air purifiers featuring medical HEPA & carbon charcoal layers to eliminate air impurities and product odors.'
  },
  {
    title: '100% Genuine Certified Stock',
    desc: 'Wavelength buys directly from global brand warehouses. We guarantee 0% dilution and absolute authenticity on every Kerastase, L\'Oreal, and Aveda vial.'
  }
];

export default function AboutPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400';
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="About Our Luxury Salon | Experts & Story" 
        description="Redefining luxury salon experiences in Kolkata. Learn about Wavelength Salon's premium hygiene standards, our certified hair specialists like Arpita, and the majestic products we use."
        canonicalPath="/about"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Banner Section */}
      <section className="py-16 md:py-24 bg-[#0F0F0F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0F0F0F]/90 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" 
          alt="Bespoke Salon Atmosphere" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          onError={handleImageError}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block mb-3">Est. 2019 • Our Legend</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6">
              Redefining Haute Aesthetics
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Wavelength Kankurgachi was founded upon a singular commitment: to deliver an incredibly high-end, bespoke digital-agency-worthy aesthetic experience that elevates salon trips from a common chore into a majestic, memorable ritual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Salon Story Detailed Segment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block">Our Philosophies</span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 tracking-tight leading-tight">
              Craftsmanship, Safety, & Authentic Radiance
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We understand that your hair style, facial structure, and skin tone are deeply personal hallmarks. That is why Wavelength completely blocks out standard "factory-line" styling. Every visit begins with an unhurried, thorough expert consultation to design a tailored service plan that respects your individual boundaries.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Additionally, we lead the city in sterile, medical-grade safety procedures. Our tools pass through exhaustive sterilization, ensuring you are treated to absolute relaxation in a sterile, pristine sanctuary.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-black/5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-medium text-xs uppercase tracking-wider text-neutral-900 mb-1">Expert Led</h4>
                  <p className="text-xs text-neutral-500">Globally educated team leaders.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-medium text-xs uppercase tracking-wider text-neutral-900 mb-1">Surgical Safety</h4>
                  <p className="text-xs text-neutral-500">Every clip, brush autoclaved.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-3xl h-[450px] shadow-2xl relative bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800"
                alt="Bespoke Gold Salon Environment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={handleImageError}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Premium Partners</span>
                <p className="font-serif text-lg mt-1">Certified Kerastase and Aveda Ritual Center</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET OUR EXPERTS SECTION */}
      <section className="py-24 bg-[#0F0F0F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block mb-3">Meet Our Artists</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Bespoke Beauty Experts
            </h2>
            <p className="text-neutral-400 text-sm mt-4">
              Our award-winning stylists, dermal consultants, and cosmetic professionals bring years of combined elite experience straight to your service mirror.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertsList.map((expert, i) => (
              <motion.div
                key={expert.name}
                className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-64 overflow-hidden relative bg-neutral-800">
                  <img 
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {expert.specialty}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {expert.name}
                  </h3>
                  <span className="text-xs text-[#D4AF37]/80 font-sans tracking-wide block mb-4 uppercase">
                    {expert.role}
                  </span>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light">
                    {expert.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HYGIENE STANDARDS SECTION */}
      <section className="py-24 bg-white text-neutral-900 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block mb-3">Absolute Clinical Protocols</span>
              <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 tracking-tight leading-tight mb-6">
                Gold Safety Standards
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Your luxury trip demands the most secure, hygienic backdrop. At Wavelength Salon Kankurgachi, we do not compromise. We run medical disinfection procedures that protect you from the moment you settle in our styling chair.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-xs font-medium text-neutral-700 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                  <span>100% Autoclaved Scissors</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium text-neutral-700 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                  <span>Single-Use Sterile Capes</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium text-neutral-700 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                  <span>Zero Product Dilution</span>
                </li>
              </ul>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {standardsList.map((std, i) => (
                <motion.div
                  key={std.title}
                  className="p-8 bg-[#FAF8F5] border border-black/5 rounded-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-neutral-900 mb-2">{std.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed font-light">{std.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
