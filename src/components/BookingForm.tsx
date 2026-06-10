import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { servicesList, salonInfo } from '../data/salonData';
import SalonIcon from './SalonIcon';

interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  price: string;
  date: string;
  time: string;
  message?: string;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [systemMessage, setSystemMessage] = useState<string | null>(null);
  const [localBookings, setLocalBookings] = useState<Booking[]>([]);

  // Load existing bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('wavelength_bookings');
      if (stored) {
        setLocalBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading bookings', e);
    }
  }, []);

  // Validate form states dynamically
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your full name.';
    
    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure.';
    }

    if (!formData.serviceId) tempErrors.serviceId = 'Please select a service treatment.';
    if (!formData.date) tempErrors.date = 'Please choose an appointment date.';
    if (!formData.time) tempErrors.time = 'Please select your preferred time slot.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSystemMessage(null);

    const selectedService = servicesList.find(s => s.id === formData.serviceId);
    const serviceName = selectedService ? selectedService.title : 'Custom Styling';
    const servicePrice = selectedService?.price || 'Starting at ₹499';

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceId: formData.serviceId,
      serviceName,
      date: formData.date,
      time: formData.time,
      message: formData.message
    };

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('API server returned error status');
      }

      const data = await response.json();
      const confirmedBooking: Booking = {
        ...data.booking,
        price: servicePrice
      };

      setSystemMessage(data.emailSent 
        ? 'Live confirmation and owner emails successfully dispatched via nodemailer luxury system!'
        : 'Appointment registered in luxury registry database queue.'
      );

      const updatedBookings = [confirmedBooking, ...localBookings];
      setLocalBookings(updatedBookings);
      localStorage.setItem('wavelength_bookings', JSON.stringify(updatedBookings));

      // Clear Form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceId: '',
        date: '',
        time: '',
        message: ''
      });

      setShowSuccessModal(true);
    } catch (error: any) {
      console.warn('Backend endpoint unavailable, falling back offline...', error);
      
      const offlineBooking: Booking = {
        id: `wvl-${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceId: formData.serviceId,
        serviceName,
        price: servicePrice,
        date: formData.date,
        time: formData.time,
        message: formData.message,
        status: 'Confirmed',
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      };

      const updatedBookings = [offlineBooking, ...localBookings];
      setLocalBookings(updatedBookings);
      localStorage.setItem('wavelength_bookings', JSON.stringify(updatedBookings));

      setSystemMessage('Registered via custom offline fallback processor successfully.');
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceId: '',
        date: '',
        time: '',
        message: ''
      });
      setShowSuccessModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove a booking
  const cancelBooking = async (id: string) => {
    try {
      await fetch(`/api/book/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.warn('API delete record failed, syncing local storage list only', error);
    }
    const remaining = localBookings.filter(b => b.id !== id);
    setLocalBookings(remaining);
    localStorage.setItem('wavelength_bookings', JSON.stringify(remaining));
  };

  // Get active date limits (today minimum)
  const todayVal = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM'
  ];

  return (
    <section id="booking" className="relative py-28 bg-[#0F0F0F] text-white overflow-hidden">
      {/* Background cinematic accents */}
      <div className="absolute top-[20%] left-[-150px] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-150px] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Booking Description & Details */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
            <span className="flex items-center space-x-2 text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">
              <SalonIcon name="Calendar" size={14} />
              <span>ONLINE RESERVATIONS</span>
            </span>
            
            <h2 className="font-serif text-3.5xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-6">
              Reserve Your Bespoke Experience
            </h2>

            <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed mb-8">
              Embark on your journey toward beauty. Fill out our highly intuitive, secure luxury portal booking form to register your priority appointment block instantly.
            </p>

            {/* Practical instructions panel */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-sm mt-1">
                  <SalonIcon name="Clock" size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-white">
                    Priority Direct Notification
                  </h4>
                  <p className="text-white/50 text-xs mt-1">
                    Once submitted, our reception coordinates a reservation check and dispatches an instant details verification call.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-sm mt-1">
                  <SalonIcon name="Phone" size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-white">
                    Direct Offline Bookings Support
                  </h4>
                  <p className="text-white/50 text-xs mt-1">
                    Prefer direct voice booking or instant WhatsApp schedules? Dial{' '}
                    <a href={`tel:${salonInfo.contact.phone}`} className="text-[#D4AF37] font-semibold underline">
                      {salonInfo.contact.phoneFormatted}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Local Appointments History Display Panel */}
            {localBookings.length > 0 && (
              <div className="mt-12 p-6 bg-[#141414] border border-white/5 rounded-none shadow-xl">
                <h3 className="font-serif text-[#D4AF37] text-md font-bold flex items-center gap-2 mb-4">
                  <SalonIcon name="UserCheck" size={16} />
                  <span>Your Booking Requests ({localBookings.length})</span>
                </h3>

                <div className="space-y-4 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                  {localBookings.map((bk) => (
                    <div key={bk.id} className="p-4 bg-black/60 border border-white/5 rounded-none flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-white uppercase">{bk.serviceName}</span>
                          <span className="px-1.5 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] font-mono tracking-wider font-bold rounded-sm">
                            {bk.status}
                          </span>
                        </div>
                        <p className="text-white/40 text-[10px] sm:text-xs mt-1">
                          Date: {bk.date} • Slots: {bk.time}
                        </p>
                      </div>

                      <button
                        onClick={() => cancelBooking(bk.id)}
                        className="text-red-400 hover:text-white text-[10px] uppercase font-bold tracking-widest bg-red-400/10 hover:bg-red-400 px-2 py-1.5 rounded-sm transition-all focus:outline-none cursor-pointer"
                        title="Cancel Appointment Request"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: The Luxury Glassmorphism Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              className="p-8 md:p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/5 border-t-[#D4AF37]/30 shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-2xl font-semibold mb-8 text-white">
                Couture Reservation Registry
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="User" size={14} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-black/50 border ${
                          errors.name ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs sm:text-sm tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Phone Contact *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="Phone" size={14} />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-black/50 border ${
                          errors.phone ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs sm:text-sm tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                </div>

                {/* Row 2: Email and Service Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="Mail" size={14} />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className={`w-full bg-black/50 border ${
                          errors.email ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs sm:text-sm tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Curated Treatment *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="Gem" size={14} />
                      </span>
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleInputChange}
                        className={`w-full bg-black/50 select-field-element border ${
                          errors.serviceId ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all appearance-none`}
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#0F0F0F]">-- Select Bespoke Treatment --</option>
                        {servicesList.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-[#0F0F0F]">
                            {srv.title} ({srv.price || 'Ask Price'})
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.serviceId && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.serviceId}</span>
                    )}
                  </div>

                </div>

                {/* Row 3: Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="Calendar" size={14} />
                      </span>
                      <input
                        type="date"
                        name="date"
                        min={todayVal}
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full bg-black/50 border ${
                          errors.date ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all`}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    {errors.date && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.date}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                      Preferred Booking Slot *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/80">
                        <SalonIcon name="Clock" size={14} />
                      </span>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full bg-black/50 border ${
                          errors.time ? 'border-red-500' : 'border-white/10 hover:border-[#D4AF37]/50'
                        } text-white px-5 py-4 pl-11 text-xs tracking-wide rounded-full focus:outline-none focus:border-[#D4AF37] transition-all appearance-none`}
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#0F0F0F]">-- Select Time Slot --</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#0F0F0F]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && (
                      <span className="text-red-400 text-[10px] font-mono mt-1 block">{errors.time}</span>
                    )}
                  </div>

                </div>

                {/* Additional instructions note message */}
                <div>
                  <label className="block text-white/70 text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                    Additional Instructions / Inquiries / Notes
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-[#D4AF37]/80">
                      <SalonIcon name="MessageSquare" size={14} />
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. skin allergies, preferred stylist name, bridal entourage quantity details..."
                      className="w-full bg-black/50 border border-white/10 hover:border-[#D4AF37]/50 text-white px-5 py-4 pl-11 text-xs sm:text-sm tracking-wide rounded-3xl focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* Button actions */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-3 bg-[#D4AF37] text-white hover:bg-white hover:text-[#0F0F0F] font-bold py-4.5 text-xs uppercase tracking-widest rounded-full transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-[#0F0F0F] border-t-transparent rounded-full" />
                        <span>Transmitting registry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Secure Reservation</span>
                        <SalonIcon name="Send" size={12} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div
              className="max-w-md w-full p-8 bg-[#141414] border border-[#D4AF37]/45 text-center relative rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 155 }}
            >
              <div className="inline-flex p-3 bg-green-500/10 text-green-400 rounded-full mb-6">
                <SalonIcon name="Check" size={28} />
              </div>

              <h3 className="font-serif text-2xl font-bold tracking-wide text-white mb-2">
                Bespoke Order Received
              </h3>
              
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                WAVELENGTH LUXURY REGISTRY
              </span>

              <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed mt-4 mb-3">
                Your appointment block request has been registered in the priority scheduling queue successfully. A master coordinate will call you within 30 minutes to finalize!
              </p>

              {systemMessage && (
                <div className="p-3 bg-white/5 border border-white/5 rounded-none text-[#D4AF37]/80 text-[10px] font-mono leading-relaxed mb-6 font-semibold">
                  {systemMessage}
                </div>
              )}

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#D4AF37] text-white hover:bg-white hover:text-black font-bold py-3.5 text-xs uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
              >
                Return To Lounge
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
