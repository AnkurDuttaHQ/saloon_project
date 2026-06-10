import React from 'react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { salonInfo } from '../data/salonData';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Award, Globe, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800';
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Contact Us & Directions | Kankurgachi CIT Road" 
        description="Find Wavelength Salon Kankurgachi: Located on 1st Floor, P-62, CIT Road, above Maa Durga Chemist, opposite ESI Hospital, Scheme VII M, Kolkata. Click to call or get maps navigation."
        canonicalPath="/contact"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header Info Block */}
      <section className="py-16 md:py-20 text-center bg-white border-b border-black/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">Our Main Sanctuary Floor</span>
          <h1 className="font-serif text-4xl md:text-6xl text-neutral-900 tracking-tight leading-tight mb-6">
            Contact & Directions
          </h1>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            Need directions to our CIT Road studio, or looking to discuss a specialized party make-up package with our frontdesk directors? Find all our communication channels, operational hours, and map embeds below.
          </p>
        </div>
      </section>

      {/* CORE CONTACT CARDS INFO & MAP */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          
          {/* Card: Address */}
          <motion.div 
            className="p-8 bg-white border border-black/5 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">Our Signature Floor Address</span>
            <p className="font-serif text-lg text-neutral-900 leading-snug mb-4">
              {salonInfo.location.address}
            </p>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-black/5 text-xs text-neutral-500 leading-normal flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                <strong>Directions Note:</strong> Located directly above Maa Durga Chemist Shop and exactly opposite the ESI Hospital in CIT Road Kankurgachi. Enter through the main staircase to the 1st Floor.
              </span>
            </div>
          </motion.div>

          {/* Card: Instant Calls & WhatsApp */}
          <motion.div 
            className="p-8 bg-white border border-black/5 rounded-3xl space-y-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">Reserve by Voice</span>
              <a href={`tel:${salonInfo.contact.phone}`} className="font-serif text-2xl text-neutral-900 font-bold hover:text-[#D4AF37] transition-all">
                {salonInfo.contact.phoneFormatted}
              </a>
              <p className="text-xs text-neutral-500 mt-1">Available daily 10:00 AM – 8:30 PM</p>
            </div>

            <div className="pt-6 border-t border-black/5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">E-Mail Operations</span>
              <a href={`mailto:${salonInfo.contact.email}`} className="font-sans text-sm text-neutral-700 hover:text-[#D4AF37] transition-all break-all">
                {salonInfo.contact.email}
              </a>
            </div>
          </motion.div>

          {/* Card: Opening Times */}
          <motion.div 
            className="p-8 bg-white border border-black/5 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">Working Ritual Hours</span>
            {salonInfo.contact.hours.map((hr, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 text-sm text-neutral-700 font-medium">
                <span>{hr.days}</span>
                <span className="text-[#D4AF37] font-mono">{hr.timing}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* MAP & EMBED INTERACTIVE UNIT */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            className="bg-white border border-black/5 rounded-3xl overflow-hidden p-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4 flex-col sm:flex-row gap-4">
              <div>
                <h3 className="font-serif text-xl text-neutral-900">Interactive Location GPS</h3>
                <p className="text-xs text-neutral-500 font-light">Direct directional mapping on Google Maps platform.</p>
              </div>
              <a 
                href={salonInfo.location.navigationUrl} 
                target="_blank" 
                rel="no-referrer"
                className="bg-[#D4AF37] text-white hover:bg-neutral-900 text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all flex items-center gap-2"
              >
                <span>Google Maps App</span>
                <ArrowRight className="w-3" />
              </a>
            </div>

            {/* iFrame Container */}
            <div className="rounded-2xl overflow-hidden shadow-inner h-[400px] border border-black/5 bg-neutral-100">
              <iframe 
                src={salonInfo.location.googleMapsEmbedUrl} 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Social Links Panel */}
          <div className="bg-[#0F0F0F] text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border border-[#D4AF37]/15">
            <div>
              <h4 className="font-serif text-lg text-white mb-1">Our Virtual Social Lounge</h4>
              <p className="text-xs text-neutral-400 font-light">Join over 10K+ styling enthusiasts updates daily.</p>
            </div>
            <div className="flex gap-3">
              <a 
                href={salonInfo.contact.social.instagram}
                target="_blank"
                rel="no-referrer"
                className="bg-white/10 hover:bg-[#D4AF37] hover:text-white text-white p-3.5 rounded-full border border-white/10 transition-all text-xs font-mono uppercase tracking-widest"
              >
                Instagram
              </a>
              <a 
                href={salonInfo.contact.social.facebook}
                target="_blank"
                rel="no-referrer"
                className="bg-white/10 hover:bg-[#D4AF37] hover:text-white text-white p-3.5 rounded-full border border-white/10 transition-all text-xs font-mono uppercase tracking-widest"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
