import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Accessibility,
  Scissors,
  Coffee,
  Sparkles,
  CalendarCheck,
  Baby,
  CreditCard,
  Smartphone,
  CheckCircle2,
  Phone,
  MessageSquare,
  BadgeCheck,
  ShieldCheck,
  Nfc,
  Coins,
  ArrowRight
} from 'lucide-react';
import { salonInfo } from '../data/salonData';

export default function WhyClientsLove() {
  // Safe Counter Animation for "Premium Satisfaction Index"
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [expertCount, setExpertCount] = useState(0);
  const [hygieneCount, setHygieneCount] = useState(0);

  useEffect(() => {
    const duration = 1500; // ms
    const startTime = performance.now();

    let rAFId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);

      setSatisfactionCount(Math.round(easeProgress * 100));
      setExpertCount(Math.round(easeProgress * 15)); // 15 master specialists
      setHygieneCount(Math.round(easeProgress * 100));

      if (progress < 1) {
        rAFId = requestAnimationFrame(animate);
      }
    };

    rAFId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rAFId);
  }, []);

  return (
    <section className="relative py-28 bg-[#0F0F0F] text-white overflow-hidden border-t border-white/5">
      {/* Absolute Luxurious Decorative Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
      <div className="absolute -top-[10%] right-[5%] w-[500px] h-[500px] bg-[#D4AF37]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-[#D4AF37]/2 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center space-x-2 text-[#D4AF37] font-mono text-xs tracking-[0.35em] uppercase font-bold mb-4 bg-[#D4AF37]/5 px-4 py-1.5 rounded-full border border-[#D4AF37]/20"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>SIGNATURE COMFORT & TRUST</span>
          </motion.div>
          
          <motion.h2 
            className="font-serif text-4xl md:text-6xl font-semibold tracking-tight text-white leading-none mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Why Clients Love <br />
            <span className="text-[#D4AF37] bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF1CC] to-[#D4AF37] font-serif italic font-normal">
              Wavelength Salon
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-white/60 text-xs md:text-sm font-sans tracking-wide leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Wavelength Salon, we seamlessly fuse world-class aesthetic services with the highest benchmarks of customer comfort, absolute accessibility, and convenient digital booking mechanisms.
          </motion.p>
        </div>


        {/* ================= MAIN COMFORT & FACILITIES BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: ACCESSIBILITY */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <Accessibility className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  FACILITY • 01
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37] text-sm">✔</span> Wheelchair Accessible Entrance
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                Our salon is designed to welcome everyone comfortably with accessible entry facilities. We believe luxury beauty services should be a relaxing experience accessible to all guests.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>ACCESSIBILITY FIRST</span>
              <span>100% INCLUSIVE</span>
            </div>
          </motion.div>

          {/* Card 2: SERVICE OPTIONS */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  SERVICES • 02
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37] text-sm">✔</span> Professional On-Site Services
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                Enjoy all beauty, grooming, haircare, and makeover services directly at our salon by trained professionals. Every service is perfectly executed utilizing clinical-grade tools and authentic materials.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>EXPERT STYLISTS</span>
              <span>ON-SITE EXPERTISE</span>
            </div>
          </motion.div>

          {/* Card 3: COMPLIMENTARY OFFERINGS */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  LOUNGE • 03
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37] text-sm">✔</span> Refreshing Beverages
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                Relax and enjoy complimentary beverages during your salon experience. Choose from our premium fresh-pressed espresso selection, iced coffees, specialty green teas, and chilled refreshing mocktails.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>COMPLIMENTARY RITUAL</span>
              <span>PREMIUM CAFE</span>
            </div>
          </motion.div>

          {/* Card 4: AMENITIES */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  HYGIENE • 04
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 block">
                <span className="block mb-1.5"><span className="text-[#D4AF37] mr-1.5">✔</span>Gender-Neutral Toilets</span>
                <span className="block"><span className="text-[#D4AF37] mr-1.5">✔</span>Clean Restrooms</span>
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                Modern, hygienic, and comfortable facilities for all guests. Our restrooms are continuously stylized, fully sanitized, and maintained under rigorous safety standards.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>SANITIZED RESTROOMS</span>
              <span>COMFORT FOR ALL</span>
            </div>
          </motion.div>

          {/* Card 5: FAMILY FRIENDLY */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-[#141414] hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <Baby className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  FAMILY • 05
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37] text-sm">✔</span> Good For Kids
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                Friendly atmosphere suitable for children and families. Let our certified team style your kids while you undergo professional hair Botox, bridal prep, or luxury skin peeling.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>KIDS WELCOME</span>
              <span>FAMILY COMFORT</span>
            </div>
          </motion.div>

          {/* Card 6: APPOINTMENT SYSTEM */}
          <motion.div
            className="interactive-card group relative p-8 bg-[#141414]/85 border border-[#141414] hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover Glow Highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black rounded-xl transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37]/40 tracking-wider">
                  BOOKING • 06
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3 block">
                <span className="block mb-1.5"><span className="text-[#D4AF37] mr-1.5">✔</span>Appointment Required</span>
                <span className="block"><span className="text-[#D4AF37] mr-1.5">✔</span>Appointments Recommended</span>
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                To provide ultimate personalized attention and minimize waiting times, appointments are strongly recommended. Check out our real-time smart schedule interface below.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-white/30 font-mono tracking-widest flex justify-between items-center">
              <span>PRIORITY ACCESS</span>
              <span>ZERO WAITING TIME</span>
            </div>
          </motion.div>

        </div>


        {/* ================= EXTRA ACTION SYSTEM CONTROLS ================= */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle gold line pattern decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 rounded-full" />
          <div className="absolute -bottom-10 right-10 w-44 h-44 bg-[#D4AF37]/5 blur-3xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.3em] block mb-2">INTEGRATED COMMUNICATION</span>
              <h3 className="font-serif text-2xl md:text-3.5xl leading-tight font-medium text-white mb-4">
                Instantly Reserve Your Styling Session
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-lg">
                Secure your consultation or service slot setup directly. Our concierge managers will respond in real time via call or chat confirmation.
              </p>
            </div>

            <div className="lg:col-span-6 w-full flex flex-col sm:flex-row gap-4 justify-start lg:justify-end items-stretch">
              {/* Button 1: Book Appointment */}
              <Link 
                to="/appointment"
                className="bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>

              {/* Button 2: Call Now */}
              <a 
                href="tel:+916290192038"
                className="bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-white/30 text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              {/* Button 3: WhatsApp Booking */}
              <a 
                href={`https://wa.me/916290192038?text=${encodeURIComponent(salonInfo.contact.whatsappText)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </motion.div>


        {/* ================= PAYMENT OPTIONS GRID ================= */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.3em] block mb-2">SECURE TRANSACTIONS</span>
            <h3 className="font-serif text-3xl font-medium text-white mb-3">Accepted Seamless Payments</h3>
            <p className="text-white/55 text-xs md:text-sm max-w-xl mx-auto">
              Enjoy safe, certified, and completely cashless transactions under advanced digital encryption.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            
            {/* Pay Class 1: Credit Cards */}
            <motion.div 
              className="bg-gradient-to-tr from-[#161616] to-[#1F1F1F] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-6 text-center group relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-12 h-12 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide uppercase mb-1 flex items-center justify-center gap-1.1">
                <span className="text-[#D4AF37]">✔</span> Credit Cards
              </p>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Visa / Mastercard</span>
            </motion.div>

            {/* Pay Class 2: Debit Cards */}
            <motion.div 
              className="bg-gradient-to-tr from-[#161616] to-[#1F1F1F] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-6 text-center group relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-12 h-12 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide uppercase mb-1 flex items-center justify-center gap-1.1">
                <span className="text-[#D4AF37]">✔</span> Debit Cards
              </p>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Instant Swipe</span>
            </motion.div>

            {/* Pay Class 3: Google Pay */}
            <motion.div 
              className="bg-gradient-to-tr from-[#161616] to-[#1F1F1F] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-6 text-center group relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-12 h-12 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                <Smartphone className="w-5 h-5" />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide uppercase mb-1 flex items-center justify-center gap-1.1">
                <span className="text-[#D4AF37]">✔</span> Google Pay
              </p>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">UPI / GPay Fast</span>
            </motion.div>

            {/* Pay Class 4: NFC Mobile Payments */}
            <motion.div 
              className="bg-gradient-to-tr from-[#161616] to-[#1F1F1F] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-6 text-center group relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-12 h-12 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                <Nfc className="w-5 h-5" />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide uppercase mb-1 flex items-center justify-center gap-1.1">
                <span className="text-[#D4AF37]">✔</span> NFC Mobile
              </p>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Contactless Tap</span>
            </motion.div>

            {/* Pay Class 5: Digital Payments */}
            <motion.div 
              className="bg-gradient-to-tr from-[#161616] to-[#1F1F1F] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-6 text-center group relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="w-12 h-12 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                <Coins className="w-5 h-5" />
              </div>
              <p className="text-white text-xs font-semibold tracking-wide uppercase mb-1 flex items-center justify-center gap-1.1">
                <span className="text-[#D4AF37]">✔</span> Digital Pay
              </p>
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Any UPI QR App</span>
            </motion.div>

          </div>
          <p className="text-white/40 text-[10px] uppercase font-mono tracking-widest text-center mt-6">
            ✔ Enjoy secure and convenient cashless transactions.
          </p>
        </div>


        {/* ================= TRUST INTEGRATION BANNER ================= */}
        <div className="border-t border-white/5 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.3em] block">HIGHEST BENCHMARKS</span>
              <h4 className="font-serif text-2xl md:text-3.5xl font-semibold leading-tight text-white">Our Absolute Hallmarks of Trust</h4>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                By maintaining these daily operational codes, we uphold absolute comfort and visual excellence for our beloved clients.
              </p>

              {/* Counter Statistics display */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-semibold">{satisfactionCount}%</div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-white/40 mt-1">Care standards</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-semibold">{expertCount}+</div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-white/40 mt-1">Master Artists</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-semibold">{hygieneCount}%</div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-white/40 mt-1">Sterilized Safety</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 ml-0 lg:ml-8 gap-4 bg-gradient-to-br from-[#121212] to-[#171717] border border-white/5 p-8 rounded-3xl">
                
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Wheelchair Accessible</span>
                    <span className="text-white/45 text-[11px] font-sans">Inclusive entries & comfortable physical architecture setup.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Family Friendly</span>
                    <span className="text-white/45 text-[11px] font-sans">Delightful vibes designed for all age groups & parents.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Google Pay Accepted</span>
                    <span className="text-white/45 text-[11px] font-sans">Instant contactless smartphone UPI digital checkout.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Professional Experts</span>
                    <span className="text-white/45 text-[11px] font-sans">Global-certified hair specialists & makeup master therapists.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Appointment Scheduling</span>
                    <span className="text-white/45 text-[11px] font-sans">Strict punctuality ensuring zero waiting line delays.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Hygienic Facilities</span>
                    <span className="text-white/45 text-[11px] font-sans">24/7 HEPA air cleaning filtration & tools autoclaves.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group sm:col-span-2 border-t border-white/5 pt-4 mt-2">
                  <div className="p-1 rounded-full bg-[#D4AF37]/25 text-[#D4AF37] mt-1 animate-pulse">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white tracking-wide block">✔ Premium Customer Experience</span>
                    <span className="text-white/45 text-[11px] font-sans">Personalized luxury consultations, supreme hospitality, gourmet drinks, and pristine gold standards.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
