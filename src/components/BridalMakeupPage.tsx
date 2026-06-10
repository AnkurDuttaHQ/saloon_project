import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { Crown, Sparkles, Heart, CheckCircle2, CalendarDays, ClipboardCheck, Gift, ArrowRight } from 'lucide-react';
import { servicesList } from '../data/salonData';

export default function BridalMakeupPage() {
  const navigate = useNavigate();
  const bridalService = servicesList.find(s => s.id === 'bridal-makeup') || servicesList[6];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800';
  };

  const handleBookNow = () => {
    navigate('/appointment', { state: { prefilledService: 'Imperial Bridal Makeup Ensemble' } });
  };

  const inclusions = [
    { title: 'Pre-Wedding Custom Trial', text: 'An unhurried half-day trial consult where Megha aligns shadows, contouring options, and records your facial proportions.' },
    { title: 'Airbrush base or High Definition base', text: 'Using imported Chanel, Dior, and Huda products to guarantee water-resilient, 18-hour continuous starlight glow.' },
    { title: 'Traditional Bengali Alpona / Chandan Art', text: 'Traditional hand-crafted red/white visual detailing precisely styled with absolute precision on the forehead.' },
    { title: 'Comprehensive Drapery & Styling', text: 'Full Saree pleat alignment, dupatta setting, floral bun integration and heavy jewelry layout locking.' },
    { title: 'Complementary Mother-of-the-Bride makeup', text: 'Receive a complimentary high definition satin party base for your close guardian/relative on the wedding date.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Imperial Bridal Makeup & Airbrush Artist Kolkata" 
        description="Transform into royalty with Wavelength Kankurgachi's signature Imperial Bridal Makeup. Certified artists, genuine Chanel/Dior cosmetics, traditional Chandan art & drapery."
        canonicalPath="/bridal-makeup"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Bridal Makeup' }]} />

      {/* Cinematic Cover Section */}
      <section className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600" 
          alt="Imperial Bengal Bride Portrait" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          onError={handleImageError}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/45 text-[#D4AF37] px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase mb-6">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE ULTIMATE BENGALI BRIDAL AUTHORITY</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none mb-6">
              Imperial Bridal Makeup
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
              Every Bengali bride deserves a breathtaking, regal masterpiece. Directed by Megha Roy, Wavelength Salon offers Kolkata's most trusted, highly reviewed bridal styling. We merge timeless cultural tradition with elite international beauty methodologies.
            </p>
            <button 
              onClick={handleBookNow}
              className="bg-[#D4AF37] hover:bg-white hover:text-black text-black text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
            >
              Check Date Availability
            </button>
          </motion.div>
        </div>
      </section>

      {/* COMPARATIVE SECTION HD VS AIRBRUSH */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[#D4AF37] text-xs font-mono tracking-widest uppercase block">Educational Insight</span>
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
            Selecting Your Perfect Base: Airbrush vs High Definition (HD)
          </h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            While both options are exceptional, understanding their mechanical differences helps lock in your signature finish. 
          </p>
          
          <div className="space-y-4">
            <div className="p-6 bg-white border border-black/5 rounded-2xl">
              <h4 className="font-serif text-lg text-[#D4AF37] mb-2">High Definition (HD) base</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Utilizes specialized light-scattering micro-pigments hand-blended with high-end brushes. Best if you prefer an incredibly satin, hydrated, dewy three-dimensional complexion that behaves spectacularly under traditional heavy yellow chandelier wedding lights.
              </p>
            </div>
            <div className="p-6 bg-white border border-black/5 rounded-2xl">
              <h4 className="font-serif text-lg text-[#D4AF37] mb-2">Advanced Airbrush base</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Operates with compressed oxygen spraying a microscopic, uniform layer of liquid silica foundation. Best for a flawless, touch-proof, completely matte, and water-resilient finish that masks uneven pore textures and defies heat, perspiration, and humidity for 24+ consecutive hours.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl h-[480px] shadow-2xl bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1522337241357-3b9a017d7baf?auto=format&fit=crop&q=80&w=800"
              alt="Elite Airbrush Application"
              onError={handleImageError}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#0F0F0F] text-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#D4AF37]/20 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-mono">Artisan Director</p>
              <h4 className="font-serif text-sm">Megha Roy</h4>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL INCLUSIONS PLAN LIST */}
      <section className="py-24 bg-white border-t border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">All Encompassing Packages</span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 tracking-tight leading-tight">
              The Imperial Package Walkthrough
            </h2>
            <p className="text-neutral-500 text-sm mt-4 font-light">
              We cover every detail. Your Bridal booking guarantees absolute elite attention with these key custom treatments:
            </p>
          </div>

          <div className="space-y-6">
            {inclusions.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-[#FAF8F5] border border-black/5 rounded-2xl flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-[#D4AF37]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="flex gap-4 items-start max-w-2xl">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center justify-end text-right">
                  <span className="text-[10px] font-mono tracking-widest bg-white border border-black/5 text-[#D4AF37] py-2 px-4 rounded-full uppercase">
                    Premium Inclusions
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#0F0F0F] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/15">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">PRE-WEDDING COUTURE TRIAL</span>
              <h3 className="font-serif text-2xl md:text-3xl">Ready to Discuss Your Special Date?</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-lg">
                Book a consultation or call us immediately to verify dates for the upcoming wedding seasons. Slots are highly competitive and held with deposit priority.
              </p>
            </div>
            <button 
              onClick={handleBookNow}
              className="bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all shrink-0 flex items-center gap-2"
            >
              <span>Instant Inquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
