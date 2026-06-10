import { ServiceItem, Testimony, GalleryItem, BeforeAfterItem } from '../types';

export const salonStats = {
  happyClients: '2,947+',
  rating: 4.5,
  totalReviews: '2,947+',
  beautyExperts: 15,
  premiumServices: 20
};

export const salonInfo = {
  name: 'Wavelength Salon',
  tagline: 'Where Beauty Meets Perfection',
  badge: 'KOKURGACHI\'S ULTIMATE LUXURY RETREAT',
  location: {
    address: '1st Floor, P-62, CIT Road, Above Maa Durga Chemist Shop, Opposite ESI Hospital, Scheme VII M, Kankurgachi, Kolkata, West Bengal 700054',
    shortAddress: 'Kankurgachi, Kolkata',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.072236316041!2d88.38814787600863!3d22.576395332501066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276686364bfd7%3A0xc391cb219fdfefed!2sWavelength%20Salon!5e0!3m2!1sen!2sin!4v1718012345678!5m2!1sen!2sin',
    navigationUrl: 'https://maps.app.goo.gl/uX7GvK9U7vS8A5s78' // Live search direction link
  },
  contact: {
    phone: '+91 62901 92038',
    phoneFormatted: '+91 62901 92038',
    email: 'wavelengthkankurgachi@gmail.com',
    hours: [
      { days: 'Monday – Sunday', timing: '10:00 AM – 8:30 PM' }
    ],
    social: {
      instagram: 'https://instagram.com/wavelength_salon_kankurgachi',
      facebook: 'https://facebook.com/wavelengthsalon',
      youtube: 'https://youtube.com'
    },
    whatsappText: 'Hi! I would like to book a luxury appointment at Wavelength Salon Kankurgachi.'
  }
};

export const servicesList: ServiceItem[] = [
  // --- HAIR SECTION ---
  {
    id: 'hair-cut',
    title: 'Signature Hair Cut',
    category: 'hair',
    price: '₹500',
    duration: '45 mins',
    description: 'Precision couture haircuts tailored specifically to your facial structure and hair texture by senior master stylists.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    iconName: 'Scissors',
    benefits: ['Personalized consultation', 'Luxury head massage', 'Blow dry & custom style styling']
  },
  {
    id: 'hair-styling',
    title: 'Red-Carpet Hair Styling',
    category: 'hair',
    price: '₹800',
    duration: '45 mins',
    description: 'Glame wave curls, cascading locks, elegant updos, or high fashion sleek looks designed for elite events and galas.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
    iconName: 'Wind',
    benefits: ['Heat protection therapy', 'Premium setting sprays', 'Volumizing blowout']
  },
  {
    id: 'hair-spa',
    title: 'Aveda Botanical Hair Spa',
    category: 'hair',
    price: '₹1,500',
    duration: '60 mins',
    description: 'Deep, luxurious conditioning and molecular scalp treatment that restores shine, hydration, and inner strength.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkles',
    benefits: ['Scalp micro-circulation massage', 'Steam infusion hydration', 'Pre-tox scalp clarify']
  },
  {
    id: 'hair-coloring',
    title: 'Balayage & Couture Coloring',
    category: 'hair',
    price: '₹3,500',
    duration: '120 mins',
    description: 'Bespoke hand-painted highlights, rich root melts, or total color transformation utilizing ammonia-free luxury dyes.',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9db134045f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Palette',
    benefits: ['Bespoke dual shade creation', 'Color-lock conditioning', 'Post-color sheen serum']
  },
  {
    id: 'keratin-treatment',
    title: 'Luxury Keratin Therapy',
    category: 'hair',
    price: '₹4,500',
    duration: '150 mins',
    description: 'De-frizz and reconstruct your hair with premium keratin proteins for silky smooth texture and natural body.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkle',
    benefits: ['Intense protein replenishment', 'Humidity resilient formula', 'Lasts up to 24-30 washes']
  },
  {
    id: 'hair-smoothening',
    title: 'Ultra-Hydra Smoothening',
    category: 'hair',
    price: '₹5,000',
    duration: '180 mins',
    description: 'High-gloss straight hairs with permanent frizz eradication and ultimate silk feel using professional formulas.',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
    iconName: 'Flame',
    benefits: ['Sleek glass reflection', 'Zero product residue', 'Deep nourishing keratin core']
  },

  // --- MAKEUP SECTION ---
  {
    id: 'bridal-makeup',
    title: 'Imperial Bridal Makeup Ensemble',
    category: 'makeup',
    price: '₹15,000',
    duration: '180 mins',
    description: 'Exquisite, long-wear high-definition or Airbrush bridal makeup with modern draping, luxury lash applications, and detail accents.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Crown',
    benefits: ['Pre-wedding design rehearsal', 'High Definition Airbrush finish', 'Complete jewelry and veil draping']
  },
  {
    id: 'party-makeup',
    title: 'Couture Cocktail Party Makeup',
    category: 'makeup',
    price: '₹3,500',
    duration: '90 mins',
    description: 'A striking blend of modern glam and minimal aesthetics featuring flawless contouring, skin prep, and magnetic eye designs.',
    image: 'https://images.unsplash.com/photo-1522337241357-3b9a017d7baf?auto=format&fit=crop&q=80&w=800',
    iconName: 'Music',
    benefits: ['HD water-resistant base', 'Individually applied custom lashes', 'Luxury highlighting touches']
  },

  // --- SKIN & CLINICAL SECTION ---
  {
    id: 'skin-facial',
    title: 'Dior Gold Luxury Facial',
    category: 'skin',
    price: '₹3,000',
    duration: '75 mins',
    description: 'A prestigious, age-reversing gold dust facial designed to instantly brighten skin and regenerate absolute youth cellular levels.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    iconName: 'HeartPulse',
    benefits: ['24-Karat gold serum massage', 'Ultrasonic deep peel extraction', 'Cooling botanical matrix mask']
  },
  {
    id: 'skin-cleanup',
    title: 'Detoxifying Micro-CleanUp',
    category: 'skin',
    price: '₹1,200',
    duration: '45 mins',
    description: 'An advanced, double-cleansing clarifying therapy targeting pores, dead skin cells, and urban environmental toxins.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    iconName: 'Droplet',
    benefits: ['Herbal steam deep extraction', 'AHA/BHA clarifying exfoliation', 'Pore refining ice cryo treatment']
  },
  {
    id: 'skin-care-advanced',
    title: 'Advanced Hydra-Glow Skin Care',
    category: 'skin',
    price: '₹4,000',
    duration: '90 mins',
    description: 'Clinical-grade dermabrasion oxygenation therapy producing absolute radiance, firmness, and a dewy glass-skin texture.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    iconName: 'UserCheck',
    benefits: ['Triple-acid hydro peel', 'Intense hyaluronic acid infusion', 'LED light phototherapy session']
  },

  // --- BEAUTY & NAILS SECTION ---
  {
    id: 'manicure-luxury',
    title: 'Caviar Rose Gel Manicure',
    category: 'skin',
    price: '₹1,000',
    duration: '50 mins',
    description: 'Revitalizing hand exfoliation, deep cuticle repair, luxury butter massage, and durable premium gel color varnish.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    iconName: 'Hand',
    benefits: ['Himalayan rose scrub ritual', 'Moisture-infusion hot wrap', 'Durable non-chip UV finish']
  },
  {
    id: 'pedicure-luxury',
    title: 'Himalayan Pink Salt Pedicure',
    category: 'skin',
    price: '₹1,200',
    duration: '60 mins',
    description: 'An ultra-soothing, heavy mineral soak, deep foot scrub massage, hydration thermal wrap, and expert nail polishing.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Footprints',
    benefits: ['Pink salt volcanic scrub', 'Tension-release reflexology', 'Paraffin hot oil wax upgrade']
  },
  {
    id: 'nail-art',
    title: 'Avant-Garde Nail Art Studio',
    category: 'skin',
    price: '₹1,500',
    duration: '60 mins',
    description: 'Intricate custom hand-painted luxury vectors, 3D accents, micro-jeweled nails, chrome plates, and designer extensions.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    iconName: 'Paintbrush',
    benefits: ['High quality non-toxic gel system', 'Micro rhinestone accents', 'Custom extensions shaping']
  },

  // --- GROOM / MEN SECTION ---
  {
    id: 'groom-services',
    title: 'Royal Emperor Hair & Scalp Groom',
    category: 'grooming',
    price: '₹1,000',
    duration: '60 mins',
    description: 'A bespoke gentleman\'s grooming treatment pairing master taper fades, hair revitalization, and high-frequency cooling.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    iconName: 'Briefcase',
    benefits: ['Sartorial hot towel cleanse', 'Gentleman hair follicle stimulation', 'Styling wax instruction']
  },
  {
    id: 'beard-styling',
    title: 'Artisanal Beard Sculpt & Trim',
    category: 'grooming',
    price: '₹400',
    duration: '30 mins',
    description: 'Classic razor edge outlines, precision beard shaping, hot nourishing oils, and rich sandalwood splash application.',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b389279?auto=format&fit=crop&q=80&w=800',
    iconName: 'UserCheck',
    benefits: ['Essential tea-tree beard hydration', 'Straight-edge razor alignment', 'Cold towel closure']
  }
];

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'hair-transform',
    title: 'Balayage & Couture Dye Transformation',
    beforeImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    description: 'From dull, damaged frizzy brown hair to high-gloss, premium luxury gold balayage with a precision master haircut.',
    accent: 'Gold Balayage & Cut'
  },
  {
    id: 'bridal-transform',
    title: 'Exquisite Bridal Makeup Transformation',
    beforeImage: 'https://images.unsplash.com/photo-1522337241357-3b9a017d7baf?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
    description: 'Flawless Bengali traditional bridal glow. Airbrush skin foundation base, shimmering precise eye designs and regal colors.',
    accent: 'Airbrush Bridal Makeup'
  },
  {
    id: 'skin-transform',
    title: 'Age-Reversing Gold Facial',
    beforeImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    description: 'Restorative oxygen gold dust peel therapy. Eliminates heavy dark spots, deep bags, and delivers instant skin illumination.',
    accent: 'Glowing Clay Detox'
  }
];

export const reviewsList: Testimony[] = [
  {
    id: 'rev-1',
    name: 'Suhana Sen',
    rating: 5,
    review: 'Wavelength Salon is arguably the finest luxury salon in Kolkata. I booked their Imperial Bridal Makeup Package for my wedding, and I felt like absolute royalty. Every guest was mesmerized. Their attention to detail, premium Chanel products, and pure luxury vibes are unmatched!',
    date: '3 weeks ago',
    service: 'Imperial Bridal Makeup',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-2',
    name: 'Anirban Mukherjee',
    rating: 5,
    review: 'I regularly get my hair styled and beard scuplted here. Wavelength is a level above anything else in Kankurgachi. The salon has a highly premium Dior-like aesthetic. Special shoutout to the staff for exceptional hygiene standards and using high-end authentic Kerastase hair serums.',
    date: '1 month ago',
    service: 'Royal Emperor Hair & Scalp Groom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-3',
    name: 'Priya Dhar',
    rating: 5,
    review: 'Simply incredible. Got the Luxury Keratin treatment and post-spa blowout. The transformation was dramatic. My coarse hair feels like fine silk now. The environment is so relaxing, with subtle golden details, soft classical ambient music, and superb coffee served. High-end experience!',
    date: '2 weeks ago',
    service: 'Luxury Keratin Therapy',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-4',
    name: 'Arjun Das',
    rating: 5,
    review: 'Wavelength Kankurgachi has excellent stylists. Truly value for money for an elite, high-end environment. Everything from the scissors, specialized sterilizers, to custom lighting highlights was pure luxury. My global hair color has never looked more vibrant!',
    date: '2 months ago',
    service: 'Balayage & Couture Coloring',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-5',
    name: 'Shayari Banerjee',
    rating: 5,
    review: 'Outstanding services! Visited them for the Dior Gold Luxury Facial. The glowing skin outcome has lasted for weeks. The salon is clinical-grade clean, smells beautifully of fresh lavender and sandalwood, and makes you feel exceptionally pampered.',
    date: '5 days ago',
    service: 'Dior Gold Luxury Facial',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Gold Balayage Perfection',
    description: 'Bespoke hand-crafted warm gold tones for gorgeous volume.'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    category: 'bridal',
    title: 'The Imperial Bengali Bride',
    description: 'Airbrush glow base, traditional motifs, & exquisite jewelry draping.'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Signature Styling Stations',
    description: 'Gold-accented designer layout for absolute styling comfort.'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: '24K Gold Peptides Facial',
    description: 'Deep micro-circulation treatment with cellular recovery serum.'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1522337241357-3b9a017d7baf?auto=format&fit=crop&q=80&w=800',
    category: 'makeup',
    title: 'Glamour Glitter Eye Art',
    description: 'Precision cut-crease with fine golden glitter detail.'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    category: 'clients',
    title: 'Royal Grooming Style',
    description: 'Crisp hot-towel taper and beard contouring.'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13df793f1a?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Aveda Botanical Hair Spa',
    description: 'Steam infusion and scalp detox therapeutic massage.'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Classic Crimson Nail Elegance',
    description: 'Long-lasting high gloss gel overlay manicure.'
  },
  {
    id: 'gal-9',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Our Main Sanctuary Floor',
    description: 'Spacious high-end boutique chairs with studio ambient light.'
  },
  {
    id: 'gal-10',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9db134045f?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Couture Red Ombre Velvet',
    description: 'Vibrant master dye blend with absolute shine lock.'
  },
  {
    id: 'gal-11',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800',
    category: 'makeup',
    title: 'Starlight Satin Lips Touch',
    description: 'Nourishing hydration base and high-end gloss contouring.'
  },
  {
    id: 'gal-12',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Signature Curled Tresses',
    description: 'Bespoke barrel curling of long locks for cocktail galas.'
  },
  {
    id: 'gal-13',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Master Scalp Massage Unit',
    description: 'Invigorating hair follicle wash with pure organic extracts.'
  },
  {
    id: 'gal-14',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Dermal Moisture Therapy',
    description: 'Deep microderm hydration to repair fine dry lines.'
  },
  {
    id: 'gal-15',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
    category: 'clients',
    title: 'Ecstatic Blonde Volume Lock',
    description: 'Post-keratin blowout showcasing breathtaking flexibility.'
  },
  {
    id: 'gal-16',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Precision Root Dyeing Melt',
    description: 'Sleek application mapping for completely seamless gray coverage.'
  },
  {
    id: 'gal-17',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    category: 'makeup',
    title: 'Bespoke Color Matching Prep',
    description: 'Dior and Huda beauty contour pigments configuration.'
  },
  {
    id: 'gal-18',
    image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&q=80&w=800',
    category: 'bridal',
    title: 'Regal Eyelash Integration',
    description: 'Air-light mink extension application for dramatic wedding gazes.'
  },
  {
    id: 'gal-19',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Ultra Radiance Cold Mask',
    description: 'Hydrating active vitamin botanical gel sheet application.'
  },
  {
    id: 'gal-20',
    image: 'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?auto=format&fit=crop&q=80&w=800',
    category: 'bridal',
    title: 'Couture Saree Draping',
    description: 'Traditional heavy embroidery pleat alignment for modern brides.'
  },
  {
    id: 'gal-21',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Glossy Chrome Nail Art',
    description: 'Mirror-reflect metallic gel extensions for high-profile fashion.'
  },
  {
    id: 'gal-22',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    category: 'clients',
    title: 'Sensory Hand Soaking Ritual',
    description: 'Warm essential oil bath with rose petals and mineral salts.'
  },
  {
    id: 'gal-23',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Refreshing Tea Tree Cleanup',
    description: 'Deep pore extractions with herbal steam and clarifying toner.'
  },
  {
    id: 'gal-24',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Bespoke Spa Therapy Suite',
    description: 'Warm, low-noise sanctuary for facial and body rituals.'
  },
  {
    id: 'gal-25',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    category: 'beauty',
    title: 'Botanical Hair Mist Therapy',
    description: 'Molecular vapor micro-particles that heal damaged tips.'
  },
  {
    id: 'gal-26',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Vibrant Salon Reflections',
    description: 'Backlit high-definition smart mirrors with custom halo rings.'
  },
  {
    id: 'gal-27',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Luxury Product Gallery Shelf',
    description: 'Display of premier genuine Kerastase and L\'Oreal cure vials.'
  },
  {
    id: 'gal-28',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    category: 'interior',
    title: 'Relaxation Drinks Lounge',
    description: 'Elegant seating serving gourmet organic teas and fresh espresso.'
  },
  {
    id: 'gal-29',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b389279?auto=format&fit=crop&q=80&w=800',
    category: 'clients',
    title: 'Gentleman Absolute Razor Edge',
    description: 'Straight-edge razor line detailing with therapeutic cooling splash.'
  },
  {
    id: 'gal-30',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    category: 'hair',
    title: 'Molecular Botox Finish',
    description: 'Silky hair structure reconstruction showing high gloss.'
  }
];

export const whyChooseUsList = [
  {
    id: 'wcu-1',
    title: 'Certified Master Experts',
    description: 'Our team consists of global-certified hair stylists and aesthetic therapists trained in international makeup couture.',
    iconName: 'Award'
  },
  {
    id: 'wcu-2',
    title: 'Premium Brand Partner',
    description: 'We use premium, high-end authentic products exclusively, including Kerastase, L\'Oreal Professionnel, Dior Beauty, and Aveda.',
    iconName: 'Gem'
  },
  {
    id: 'wcu-3',
    title: 'Clinical-Grade Hygiene',
    description: 'Complete tools sterilization, clean disposables, sanitized chairs, and premium medical air purifiers running 24/7.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'wcu-4',
    title: 'Accessible Opulence',
    description: 'We bring you the high-fashion grandeur of elite Milan salons right here in Kolkata at transparent luxury prices.',
    iconName: 'IndianRupee'
  },
  {
    id: 'wcu-5',
    title: 'Personalized Deep Consults',
    description: 'Every treatment starts with a face-shape styling mapping or deep skin analyzer consult to tailor the flawless look.',
    iconName: 'Smile'
  },
  {
    id: 'wcu-6',
    title: 'Kolkata\'s Most Loved Rating',
    description: 'Rated a stellar 4.5★ stars by over 2,947+ ecstatic happy customers, highlighting our pure trust and craftsmanship.',
    iconName: 'Heart'
  }
];
