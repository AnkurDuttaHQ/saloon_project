import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { HeartPulse, Droplet, UserCheck, Hand, Footprints, Paintbrush, ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { servicesList } from '../data/salonData';

export default function BeautyServicesPage() {
  const navigate = useNavigate();
  // Filter for both skin category and other non-hair, non-bridal services to showcase all skincare/nails/grooming
  const beautyServices = servicesList.filter(s => s.category === 'skin' || s.category === 'grooming');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800';
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#D4AF37]" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-[#D4AF37]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Hand': return <Hand className="w-5 h-5 text-[#D4AF37]" />;
      case 'Footprints': return <Footprints className="w-5 h-5 text-[#D4AF37]" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-[#D4AF37]" />;
      default: return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const handleBookNow = (serviceName: string) => {
    navigate('/appointment', { state: { prefilledService: serviceName } });
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Beauty Facials, Skincare & Nail Art Salon Kolkata" 
        description="Indulge in advanced clinical skin treatments at Wavelength Kankurgachi: Dior Gold Luxury Facial, HydraGlow dermabrasion, caviar gel manicure, and royal grooming."
        canonicalPath="/beauty-services"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Beauty & Skincare' }]} />

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
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">Skin & Esthetic Studio Kolkata</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6">
              Advanced Beauty & Skincare
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Indulge in scientific dermal therapeutics and state-of-the-art nail sculpting. We pair active gold dust peptides, hyaluronic moisture infusions, and genuine non-toxic gel varnishes to revitalize your skin and hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DERMATOLOGY PHILOSOPHY SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-3xl h-[340px] shadow-lg bg-neutral-100">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
            alt="Advanced Dior Skin Facial Treatment"
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase block">Our Pure Botanicals</span>
          <h2 className="font-serif text-2xl md:text-4xl text-neutral-900 leading-tight">
            24K Gold Dust Age-Reversing Therapy
          </h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Our Dior Gold Facial features raw, bio-available 24K gold dust serum complexes that penetrate the deeper layers under deep pore cleansing exfoliation. This boosts natural micro-circulation, locks hydration tight, and triggers collagen creation to deliver pristine glowing skin.
          </p>
          <div className="flex gap-4 p-4 border-l-2 border-[#D4AF37] bg-white text-xs text-neutral-500 font-light">
            "Skin is cleaned, massaged, steamed and wrapped in warm tea tree oils to deliver surgical elegance and confidence."
          </div>
        </div>
      </section>

      {/* DETAILED BEAUTY LISTING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center text-neutral-900 tracking-tight mb-16">
            Bespoke Skin, Nails, & Grooming Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beautyServices.map((service, i) => (
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
                    {service.price && (
                      <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-white text-xs font-bold font-mono py-1.5 px-3 rounded-md shadow-md">
                        {service.price}
                      </div>
                    )}
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-xl md:text-2xl text-neutral-900 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <div className="flex items-center gap-4 text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-4">
                      {service.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{service.duration}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Esthetic</span>
                      </span>
                    </div>

                    <p className="text-neutral-600 text-xs leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {service.benefits && (
                      <div className="space-y-2 border-t border-black/5 pt-4">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">Service Benefits</span>
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
