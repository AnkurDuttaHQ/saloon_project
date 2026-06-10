import { motion } from 'motion/react';
import { salonInfo } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function Contact() {
  const cards = [
    {
      id: 'contact-hours',
      title: 'Business Hours',
      desc1: 'Open Daily (Monday - Sunday)',
      desc2: '10:00 AM – 8:30 PM Priority scheduling recommended.',
      icon: 'Clock'
    },
    {
      id: 'contact-phone',
      title: 'Voice Reservation',
      desc1: 'Call Desk: +91 62901 92038',
      desc2: 'Tap here to call directly for instant checks.',
      icon: 'Phone',
      link: `tel:${salonInfo.contact.phone}`
    },
    {
      id: 'contact-address',
      title: 'Our Sanctuary',
      desc1: 'Above Maa Durga Chemist Shop',
      desc2: '1st Floor, CIT Road, Scheme VII M, opposite ESI Kankurgachi',
      icon: 'MapPin',
      link: salonInfo.location.navigationUrl
    },
    {
      id: 'contact-email',
      title: 'Digital Correspondence',
      desc1: 'wavelengthkankurgachi@gmail.com',
      desc2: 'Drop an email for corporate or bridal packages.',
      icon: 'Mail',
      link: `mailto:${salonInfo.contact.email}`
    }
  ];

  return (
    <section id="contact" className="relative py-28 bg-[#0F0F0F] text-white overflow-hidden">
      {/* Dynamic Gold Backlight */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-[#D4AF37]/2.5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            className="flex items-center justify-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>DIRECT PORTAL CORRESPONDENCE</span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Connect With Wavelength
          </h2>
          <p className="text-white/50 text-xs md:text-sm font-sans tracking-wide leading-relaxed">
            Reach out to organize bridal party reservations, customized skin therapies, or ask query styling estimates.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => {
            const isClickable = !!card.link;
            const CardElement = isClickable ? 'a' : 'div';
            
            return (
              <motion.div
                key={card.id}
                className="col-span-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* @ts-ignore */}
                <CardElement
                  href={card.link}
                  className={`block h-full p-8 bg-[#141414] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 rounded-none relative outline-none shadow-xl group ${
                    isClickable ? 'cursor-pointer' : ''
                  }`}
                  {...(isClickable ? { target: '_blank', rel: 'referrerpolicy' } : {})}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] rounded-sm transition-all duration-500">
                      <SalonIcon name={card.icon} size={20} />
                    </div>
                    {isClickable && (
                      <span className="text-[#D4AF37] text-[10px] font-mono tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                        CONNECT ↗
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-white/80 font-sans text-xs font-semibold leading-relaxed mb-1">
                    {card.desc1}
                  </p>
                  
                  <p className="text-white/40 font-sans text-[11px] leading-relaxed">
                    {card.desc2}
                  </p>
                </CardElement>
              </motion.div>
            );
          })}
        </div>

        {/* Support Call & Social links */}
        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white/50 mb-1">
              FOLLOW OUR INSTAGRAM WORKSHOPS
            </h4>
            <p className="text-[#D4AF37] text-xs font-mono font-semibold">
              @wavelength_salon_kankurgachi
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/wavelength_salon_kankurgachi"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-3 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/70 rounded-full transition-colors cursor-pointer"
              aria-label="Visit Instagram Profile"
            >
              <span className="font-mono text-xs uppercase tracking-wider font-bold">INSTAGRAM ↗</span>
            </a>
            <a
              href="https://facebook.com/wavelengthsalon"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-3 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/70 rounded-full transition-colors cursor-pointer"
              aria-label="Visit Facebook Page"
            >
              <span className="font-mono text-xs uppercase tracking-wider font-bold">FACEBOOK ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
