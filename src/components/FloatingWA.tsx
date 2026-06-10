import { motion } from 'motion/react';
import { salonInfo } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function FloatingWA() {
  const whatsappUrl = `https://wa.me/916290192038?text=${encodeURIComponent(salonInfo.contact.whatsappText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-45 md:bottom-8 md:right-8">
      
      {/* Absolute pulsing background aura */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-25 animate-ping pointer-events-none" />

      {/* Floating Interactive Button Frame */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        referrerPolicy="no-referrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] text-white rounded-full flex items-center justify-center transition-all duration-300 relative focus:outline-none cursor-pointer group"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Direct Bookings Support on WhatsApp"
      >
        {/* Dynamic badge widget */}
        <span className="absolute -top-1.5 -right-1 text-[8px] font-mono tracking-widest font-extrabold px-1.5 py-0.5 bg-red-500 border border-[#FAF8F5] text-white rounded-full animate-bounce">
          LIVE
        </span>

        {/* Dynamic Tooltip */}
        <span className="absolute right-16 bg-[#0F0F0F] text-white border border-white/5 uppercase tracking-widest font-mono text-[8px] font-bold px-3 py-1.5 shadow-2xl rounded-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
          Bespoke Bookings Desk
        </span>

        <SalonIcon name="MessageSquare" size={24} className="text-white transform group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
