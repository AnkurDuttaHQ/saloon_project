import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { Scissors, Sparkles, Award, ArrowRight, CheckCircle2, Shield, CalendarDays, Percent } from 'lucide-react';
import { servicesList } from '../data/salonData';

export default function ServicesIndexPage() {
  const categories = [
    {
      id: 'hair',
      title: 'Signature Hair Artistry',
      desc: 'Precision haircuts, luxury balayage coloring, molecular botanical locks repair, custom Botox and intense Keratin restorative treatments.',
      path: '/hair-services',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600',
      icon: Scissors
    },
    {
      id: 'beauty',
      title: 'Advanced Beauty & Skincare',
      desc: 'Dior Gold anti-aging facials, deep mineral cleanups, gel nail styling extensions, Himalayan volcanic salt pedicures and hand therapies.',
      path: '/beauty-services',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
      icon: Sparkles
    },
    {
      id: 'bridal',
      title: 'Imperial Bridal Makeup Pack',
      desc: 'Ultra-exclusive traditional bridal makeup, high-definition airbrush work, pre-wedding rehearsals, contouring, and detail jewelry draping.',
      path: '/bridal-makeup',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
      icon: Award
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600';
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Premium Hair & Skin Care Services | Price List" 
        description="Browse our luxury service directory, including signature hair cuts, balayage hair color, global keratin smooth, Dior Gold clinical facials, and Traditional Bridal Makeup."
        canonicalPath="/services"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero Header Unit */}
      <section className="py-16 md:py-20 text-center bg-white border-b border-black/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">Our Core Curriculum</span>
          <h1 className="font-serif text-4xl md:text-6xl text-neutral-900 tracking-tight leading-tight mb-6">
            Luxury Beauty Selection
          </h1>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            Welcome to Wavelength's high-fashion menu. Select a dedicated category below to browse specific treatments, precise pricing charts, and signature expert benefits designed exclusively for you.
          </p>
        </div>
      </section>

      {/* MAIN CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Image Column */}
              <div className="lg:col-span-5 h-[320px] lg:h-full relative overflow-hidden bg-neutral-100">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-[#D4AF37]/35 text-white p-3 rounded-full">
                  <cat.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase block mb-2">Category 0{i + 1}</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 tracking-tight leading-tight mb-4">
                    {cat.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light">
                    {cat.desc}
                  </p>
                  
                  {/* Small perk checklists */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 text-xs text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Certified Master Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Authentic Imported Products</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Surgical-grade Sterilization</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Complimentary Espresso & Consult</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 flex flex-wrap gap-4 items-center justify-between">
                  <Link 
                    to={cat.path} 
                    className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all"
                  >
                    <span>Browse dedicated menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GENERAL BOOKING HIGHLIGHTS SUMMARY */}
      <section className="py-20 bg-[#0F0F0F] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto md:mx-0">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl">Surgical Hygiene</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              We clean, vacuum, and sanitize every station, sink, and toolbar with medical antiseptic between bookings. Enjoy safe comfort.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto md:mx-0">
              <CalendarDays className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl">Simplified Calendar</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Book online and immediately secure your slot. Access real-time booking reminders, updates, and fast manager communication.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto md:mx-0">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl">Luxury Value Packages</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Bundle services on your appointment booking desk to secure complimentary blow-drying, hair locks serum, and priority timeslots.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
