import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Stats from './Stats';
import BeforeAfter from './BeforeAfter';
import Experience from './Experience';
import WhyClientsLove from './WhyClientsLove';
import SEO from './SEO';
import { ArrowRight, Scissors, Sparkles, Award, MapPin, Phone } from 'lucide-react';
import { salonInfo, servicesList } from '../data/salonData';

export default function HomePage() {
  const featuredServices = servicesList.slice(0, 4);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Wavelength Salon",
    "image": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
    ],
    "priceRange": "₹400 - ₹25000",
    "telephone": "+916290192038",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, P-62, CIT Road, Above Maa Durga Chemist Shop, Opposite ESI Hospital, Scheme VII M, Kankurgachi",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700054",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.576395,
      "longitude": 88.388147
    },
    "url": window.location.origin,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "20:30"
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800';
  };

  return (
    <>
      <SEO 
        title="Luxury Salon Kolkata" 
        description="Experience luxury beauty rituals, hair Botox, Keratin hair treatment, bridal makeup, and custom hair coloring from certified stylists at Wavelength Salon, Kankurgachi CIT Road, Kolkata."
        canonicalPath="/"
        schemaMarkup={localBusinessSchema}
      />
      
      {/* 1. Panoramic Hero Video / Slider Background */}
      <Hero />

      {/* 2. Interactive Counters statistics */}
      <Stats />

      {/* 3. Luxury Curated Intro Segment */}
      <section className="py-24 bg-white text-[#0F0F0F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block mb-3">Est. 2019 • Kolkata</span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 tracking-tight leading-tight mb-6">
              Redefining Haute Aesthetics
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Located in the affluent heart of Kankurgachi, Wavelength Salon stands as an elite sanctuary of complete transformation. We combine globally acclaimed product families with bespoke master specialists techniques to craft a highly elevated, head-turning look designed around your natural features.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 border border-black/10 hover:border-[#D4AF37] px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all hover:bg-neutral-50"
              >
                <span>Salon Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl h-48 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=700" 
                  alt="Aveda Scalp Diagnostics" 
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl h-64 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=700" 
                  alt="Elite Gold Balayage" 
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-2xl h-64 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=700" 
                  alt="Luxury Bengali Bridal" 
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl h-48 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=700" 
                  alt="Modern Styling Chair" 
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Category Teasers Section */}
      <section className="py-24 bg-[#0F0F0F] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block mb-3">Our Bespoke Portfolios</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Aesthetic Specialties
            </h2>
            <p className="text-neutral-400 text-sm mt-4">
              Explore custom treatments crafted with certified surgical sterilization, premium imported brand ingredients, and ultimate personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hair Specialty */}
            <motion.div 
              className="bg-[#141414] border border-white/5 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all cursor-pointer group flex flex-col justify-between"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Hair Artistry</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Signature scissor haircuts, luxury global ammonia-free shades, intense Keratin, Nanoplastia, and advanced molecular Hair Botox therapies.
                </p>
              </div>
              <Link to="/hair-services" className="inline-flex items-center gap-2 text-xs uppercase text-[#D4AF37] tracking-widest font-bold group-hover:translate-x-1 transition-transform">
                <span>View Hair Menu</span>
                <ArrowRight className="w-3" />
              </Link>
            </motion.div>

            {/* Beauty & Skin Care */}
            <motion.div 
              className="bg-[#141414] border border-white/5 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all cursor-pointer group flex flex-col justify-between"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Beauty & Skin Care</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Advanced 24K Gold Peptides facials, deep botanical pore cleanups, Himalayan pink salt pedicures, and caviar rose manicures.
                </p>
              </div>
              <Link to="/beauty-services" className="inline-flex items-center gap-2 text-xs uppercase text-[#D4AF37] tracking-widest font-bold group-hover:translate-x-1 transition-transform">
                <span>View Beauty Menu</span>
                <ArrowRight className="w-3" />
              </Link>
            </motion.div>

            {/* Bridal Makeup */}
            <motion.div 
              className="bg-[#141414] border border-white/5 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all cursor-pointer group flex flex-col justify-between"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Imperial Bridal Makeup</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  Signature long-wear traditional HD or airbrush packages featuring custom eye shadow palettes, premium lash fittings, and complete contouring.
                </p>
              </div>
              <Link to="/bridal-makeup" className="inline-flex items-center gap-2 text-xs uppercase text-[#D4AF37] tracking-widest font-bold group-hover:translate-x-1 transition-transform">
                <span>View Bridal Packages</span>
                <ArrowRight className="w-3" />
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12 bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 inline-flex items-center justify-between w-full flex-col sm:flex-row gap-4">
            <span className="text-xs text-neutral-300 font-sans tracking-wide">
              Looking for a customized treatment or pricing for larger entourages?
            </span>
            <Link to="/appointment" className="bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase font-bold tracking-widest px-6 py-3 rounded-full transition-all flex items-center gap-2">
              <span>Book Consultation</span>
              <ArrowRight className="w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Before & After Interactive Transformations Slider */}
      <BeforeAfter />

      {/* 6. Cinematic Video Walkthrough experience */}
      <Experience />

      {/* 7. Why Clients Love Wavelength Salon */}
      <WhyClientsLove />

      {/* 8. Call to Action Quick info banner */}
      <section className="py-20 bg-[#FAF8F5] relative overflow-hidden border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">Schedule Your Makeover Today</span>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 tracking-tight mb-6">
            Elevate Your Signature Styling
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Book an appointment online with our master experts. Receive instant confirmation and direct manager follow-up via our gold premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/appointment" className="bg-[#D4AF37] hover:bg-neutral-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20">
              Book Appointment Now
            </Link>
            <a href={`tel:${salonInfo.contact.phone}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F0F0F] bg-white border border-black/10 hover:border-black/30 px-8 py-4 rounded-full transition-all">
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 62901 92038</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
