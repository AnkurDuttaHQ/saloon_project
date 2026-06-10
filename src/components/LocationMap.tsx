import { motion } from 'motion/react';
import { salonInfo } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function LocationMap() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Wavelength+Salon+Kankurgachi+Kolkata`;
  const whatsappUrl = `https://wa.me/916290192038?text=${encodeURIComponent(salonInfo.contact.whatsappText)}`;

  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="absolute top-[40%] right-[-100px] w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.div
              className="flex items-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span>FIND YOUR SHELTER OF OPULENCE</span>
            </motion.div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] leading-tight">
              Location & Directions
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-stone-500 text-xs sm:text-sm font-sans leading-relaxed">
              Centrally placed on the first floor of CIT Road, above Maa Durga Chemist shop, right opposite the Kankurgachi ESI Hospital. Our salon is easily approachable from any tier of Kolkata.
            </p>
          </div>
        </div>

        {/* Map and Context Cards Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-stone-100 p-6 md:p-8 shadow-2xl rounded-none">
          
          {/* Custom Styled Map Frame */}
          <div className="lg:col-span-8 aspect-square sm:aspect-[16/9] lg:aspect-auto w-full relative overflow-hidden border border-stone-250 min-h-[350px]">
            <iframe
              src={salonInfo.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wavelength Salon Kankurgachi Kolkata Google Maps"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Quick contact and coordinate guidelines card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase font-bold mb-2 block">
                COORDINATES CARD
              </span>
              
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#0F0F0F] mb-6">
                Wavelength Salon
              </h3>

              <div className="space-y-6">
                
                {/* Details layout */}
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <div className="text-[#D4AF37] mt-1 shrink-0">
                    <SalonIcon name="MapPin" size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#0F0F0F]">Address</h4>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                      1st Floor, P-62, CIT Road, Above Maa Durga Chemist Shop, Opposite ESI Hospital, Scheme VII M, Kankurgachi, Kolkata, West Bengal 700054
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <div className="text-[#D4AF37] mt-1 shrink-0">
                    <SalonIcon name="Phone" size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#0F0F0F]">Reservation Contact</h4>
                    <p className="text-stone-500 text-xs mt-1 font-semibold">
                      {salonInfo.contact.phoneFormatted}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <div className="text-[#D4AF37] mt-1 shrink-0">
                    <SalonIcon name="Clock" size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#0F0F0F]">Hours of Operation</h4>
                    <p className="text-stone-500 text-xs mt-1">
                      {salonInfo.contact.hours[0].days}<br />
                      <span className="font-semibold text-[#0F0F0F]">{salonInfo.contact.hours[0].timing}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Instant Action Links */}
            <div className="space-y-3 mt-8 border-t border-stone-100 pt-6">
              
              <a
                href={directionsUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#0F0F0F] hover:bg-[#D4AF37] text-white hover:text-[#0F0F0F] py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none focus:outline-none cursor-pointer"
              >
                <SalonIcon name="MapPin" size={12} />
                <span>Get Directions on Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                
                <a
                  href={`tel:${salonInfo.contact.phone}`}
                  className="inline-flex items-center justify-center space-x-1.5 border border-stone-200 hover:border-[#D4AF37] text-stone-700 hover:text-[#D4AF37] py-3.5 text-xs font-bold uppercase tracking-widest bg-white transition-colors rounded-none focus:outline-none cursor-pointer"
                >
                  <SalonIcon name="Phone" size={12} />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center justify-center space-x-1.5 border border-green-500 bg-green-550 hover:bg-green-600 text-green-600 hover:text-white py-3.5 text-xs font-bold uppercase tracking-widest transition-colors rounded-none focus:outline-none cursor-pointer"
                >
                  <SalonIcon name="MessageSquare" size={12} />
                  <span>WhatsApp</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
