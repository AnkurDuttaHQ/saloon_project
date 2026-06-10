import { salonInfo, servicesList } from '../data/salonData';
import SalonIcon from './SalonIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuLinks = [
    { name: 'Red-Carpet Lounge', href: '#home' },
    { name: 'Our Philosophy', href: '#about' },
    { name: 'Bespoke Services', href: '#services' },
    { name: 'Live Transformations', href: '#transformations' },
    { name: 'Visual Gallery', href: '#gallery' },
    { name: 'Google Testimonials', href: '#reviews' },
    { name: 'Registry Desk', href: '#booking' },
    { name: 'Location coordinates', href: '#contact' }
  ];

  // Pick top 4 services
  const footerServices = servicesList.slice(0, 4);

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#D4AF37]/10 text-white pt-24 pb-12 overflow-hidden">
      
      {/* Background radial fade */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#D4AF37]/2.5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top grid navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand & Subtext */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xl md:text-2xl font-bold tracking-[0.25em] text-[#D4AF37] block">
                WAVELENGTH
              </span>
              <span className="font-sans text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-white/50 block -mt-0.5">
                LUXURY BEAUTY SANCTUARY • KOLKATA
              </span>
              
              <p className="text-white/50 text-xs font-sans mt-6 leading-relaxed max-w-xs">
                Kolkata\'s foremost award-winning beauty salon where luxury products meet meticulous couture styling and gold standard hygiene protocols.
              </p>
            </div>

            <div className="flex items-center space-x-2 mt-8 text-yellow-500">
              <span className="font-bold text-lg text-white font-serif">4.5★</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <SalonIcon key={i} name="Star" size={12} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-[10px] text-white/40 font-mono tracking-widest pl-2">
                2.9K+ GOOGLE REVIEWS
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] mb-6">
              STUDIO DIRECTORY
            </h4>
            <ul className="space-y-3.5">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-white/60 hover:text-[#D4AF37] text-xs font-sans tracking-wide transition-colors focus:outline-none cursor-pointer text-left uppercase text-[10px]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Services */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] mb-6">
              BESPOKE RITUALS
            </h4>
            <ul className="space-y-3.5">
              {footerServices.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleLinkClick('#services')}
                    className="text-white/60 hover:text-[#D4AF37] text-xs font-sans tracking-wide transition-colors focus:outline-none cursor-pointer text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('#services')}
                  className="text-[#D4AF37] hover:text-white text-xs font-sans tracking-wide transition-colors focus:outline-none cursor-pointer text-left font-bold"
                >
                  View Full Catalogue →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach coordinates */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] mb-6">
              LOCATION COORDINATES
            </h4>
            <address className="not-italic space-y-4">
              <p className="text-white/50 text-xs leading-relaxed font-sans">
                1st Floor, P-62, CIT Road, Above Maa Durga Chemist Shop, Opposite ESI Hospital, Scheme VII M, Kankurgachi, Kolkata, West Bengal 700054
              </p>
              
              <div className="pt-2 border-t border-white/5 space-y-2">
                <a
                  href={`tel:${salonInfo.contact.phone}`}
                  className="text-xs text-[#D4AF37] flex items-center space-x-2.5 font-sans hover:text-white transition-colors"
                >
                  <SalonIcon name="Phone" size={12} />
                  <span>{salonInfo.contact.phoneFormatted}</span>
                </a>

                <a
                  href={`mailto:${salonInfo.contact.email}`}
                  className="text-xs text-white/60 flex items-center space-x-2.5 font-sans hover:text-[#D4AF37] transition-colors"
                >
                  <SalonIcon name="Mail" size={12} />
                  <span>{salonInfo.contact.email}</span>
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom copyright metadata block */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-[10px] font-mono tracking-widest">
          <div>
            © {currentYear} WAVELENGTH SALON (KANKURGACHI). ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center space-x-5">
            <span className="hover:text-white transition-colors">PRIVACY CODE</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">TERMS OF PATRONAGE</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">CRAFTED IN LUXURY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
