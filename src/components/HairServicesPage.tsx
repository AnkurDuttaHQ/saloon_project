import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { Scissors, Sparkles, Wind, Palette, Sparkle, Flame, ArrowLeft, Clock, Tags, CheckCircle } from 'lucide-react';
import { servicesList } from '../data/salonData';

export default function HairServicesPage() {
  const navigate = useNavigate();
  const hairServices = servicesList.filter(s => s.category === 'hair');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=800';
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkle': return <Sparkle className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Scissors className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  // Navigates user to appointment page and auto-selects service
  const handleBookNow = (serviceName: string) => {
    navigate('/appointment', { state: { prefilledService: serviceName } });
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Luxury Hair Salon & Hair Botox Kolkata" 
        description="Browse premium hair treatments at Wavelength Kankurgachi: Custom couture haircuts, Red-carpet hair styling, Balayage highlights, Keratin Therapy, and Hair Botox."
        canonicalPath="/hair-services"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Hair Artistry' }]} />

      {/* Header Panel */}
      <section className="py-16 bg-[#0F0F0F] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] mb-6 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">Premium Hair Salon Kolkata</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6">
              Signature Hair Artistry
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Step into high-end comfort. Whether you are looking for an avant-garde haircut, ammonia-free root melt, deep biological scalp restoration, or game-changing molecular Hair Botox, Arpita and our master stylists deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SPECIAL THERAPY EXPLAINER SEGMENT */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase block">Our High Technology</span>
          <h2 className="font-serif text-2xl md:text-4xl text-neutral-900 leading-tight">
            Next-Gen Molecular Botox & Nanoplastia Rituals
          </h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Unlike basic smoothing treatments, we utilize advanced bio-restorative therapies that reconstruct dry, frizzy, and chemically over-processed locks from the molecular level. Our customized Hair Botox injects essential amino acids, botanical peptides, and pure marine extracts directly into the hair shaft, delivering jaw-dropping shine and silk body for up to 30 washes.
          </p>
          <div className="p-6 bg-white border border-black/5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Sparkle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base text-neutral-900">100% Custom Consult</h4>
              <p className="text-xs text-neutral-500">Every treatment begins with custom scalp mappings.</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl h-[340px] shadow-lg bg-neutral-100">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
            alt="Hair Transforming Botox Therapy"
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* DETAILED HAIR MENU */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center text-neutral-900 tracking-tight mb-16">
            Detailed Hair Treatment Directory
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service, i) => (
              <motion.div
                key={service.id}
                className="bg-[#FAF8F5] border border-black/5 rounded-3xl overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  <div className="h-56 overflow-hidden relative bg-neutral-200">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      onError={handleImageError}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md p-2.5 rounded-full border border-white/10">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-white text-xs font-bold font-mono py-1.5 px-3 rounded-md shadow-md">
                      {service.price}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-xl md:text-2xl text-neutral-900 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <div className="flex items-center gap-4 text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Tags className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Luxury</span>
                      </span>
                    </div>

                    <p className="text-neutral-600 text-xs leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {service.benefits && (
                      <div className="space-y-2 border-t border-black/5 pt-4">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">What is Included</span>
                        {service.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-neutral-50 border-t border-black/5">
                  <button 
                    onClick={() => handleBookNow(service.title)}
                    className="w-full text-center block bg-[#D4AF37] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all cursor-pointer"
                  >
                    Reserve Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
