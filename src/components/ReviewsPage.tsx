import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';
import { reviewsList } from '../data/salonData';
import { Star, CheckCircle, Search, SlidersHorizontal, MessageSquare, Plus, Check } from 'lucide-react';

interface LocalReview {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  service: string;
  avatar: string;
  isLocal?: boolean;
}

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');
  const [localReviews, setLocalReviews] = useState<LocalReview[]>([]);
  
  // Submit new local review state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    service: '',
    review: ''
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wavelength-local-reviews');
    if (saved) {
      try {
        setLocalReviews(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Merge static pre-seeded reviews with user-generated custom local reviews
  const allReviews = useMemo(() => {
    return [...localReviews, ...reviewsList];
  }, [localReviews]);

  // Aggregate stats based on ALL current reviews
  const stats = useMemo(() => {
    const total = allReviews.length;
    if (total === 0) return { avg: 5, count: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    let sum = 0;
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    allReviews.forEach(r => {
      sum += r.rating;
      const rounded = Math.round(r.rating);
      if (counts[rounded] !== undefined) counts[rounded]++;
    });
    
    return {
      avg: Number((sum / total).toFixed(1)),
      count: total,
      5: counts[5],
      4: counts[4],
      3: counts[3],
      2: counts[2],
      1: counts[1]
    };
  }, [allReviews]);

  // Filter reviews based on search text and rating buttons
  const filteredReviews = useMemo(() => {
    return allReviews.filter(r => {
      // 1. Rating filter
      if (selectedRating !== 'all' && r.rating !== selectedRating) {
        return false;
      }
      // 2. Search query filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        return (
          r.name.toLowerCase().includes(query) ||
          r.review.toLowerCase().includes(query) ||
          r.service.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [allReviews, selectedRating, searchTerm]);

  // Handle Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.review.trim()) return;

    const submittedItem: LocalReview = {
      id: `local-rev-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      service: newReview.service || 'Bespoke Beauty Journey',
      review: newReview.review,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', // Default luxury profile silhouette
      isLocal: true
    };

    const updated = [submittedItem, ...localReviews];
    setLocalReviews(updated);
    localStorage.setItem('wavelength-local-reviews', JSON.stringify(updated));

    // Reset Form
    setNewReview({ name: '', rating: 5, service: '', review: '' });
    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
      setIsFormOpen(false);
    }, 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <SEO 
        title="Verified Client Reviews & Feedback Kolkata" 
        description="Read real client testimonials for Wavelength Salon Kankurgachi CIT Road. Search verified reviews and submit your organic brand feedback."
        canonicalPath="/reviews"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Client Reviews' }]} />

      {/* Hero Header Unit */}
      <section className="py-16 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-xl space-y-4">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.3em] block">KOLKATA'S BEST RATED</span>
            <h1 className="font-serif text-4xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              Client Appraisals
            </h1>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">
              We credit our growth entirely to our guests. Read verified 5-star Google & local reviews, search specific service experiences, or share your own personal story using our live form below.
            </p>
          </div>

          {/* Core rating stats cards */}
          <div className="bg-[#FAF8F5] border border-black/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm max-w-2xl w-full">
            <div className="text-center md:border-r border-black/5 md:pr-8 shrink-0">
              <span className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 leading-none">
                {stats.avg}
              </span>
              <div className="flex gap-1 justify-center my-3 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                {stats.count} Total reviews
              </p>
            </div>

            {/* Bars */}
            <div className="w-full space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const countForStars = (stats as any)[stars] || 0;
                const percentage = stats.count > 0 ? (countForStars / stats.count) * 100 : 0;
                return (
                  <div key={stars} className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="w-3 text-right font-medium">{stars}</span>
                    <Star className="w-3 h-3 fill-neutral-400 text-neutral-400 mt-0.5" />
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#D4AF37]" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-6 text-right text-[10px] font-mono">{countForStars}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH DESK */}
      <section className="py-8 bg-white border-b border-black/5 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Rating filter select buttons */}
          <div className="flex items-center gap-2 overflow-x-auto select-none shrink-0 py-1">
            <SlidersHorizontal className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <button
              onClick={() => setSelectedRating('all')}
              className={`text-[10px] uppercase font-bold tracking-wider py-2 px-4 rounded-full border transition-all cursor-pointer shrink-0 ${
                selectedRating === 'all'
                  ? 'bg-[#0F0F0F] text-white border-black'
                  : 'bg-white text-neutral-600 border-black/5 hover:border-[#D4AF37]'
              }`}
            >
              All Ratings
            </button>
            {[5, 4, 3].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedRating(num)}
                className={`text-[10px] uppercase font-bold tracking-wider py-2 px-4 rounded-full border transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                  selectedRating === num
                    ? 'bg-[#0F0F0F] text-white border-black'
                    : 'bg-white text-neutral-600 border-black/5 hover:border-[#D4AF37]'
                }`}
              >
                <span>{num} Stars</span>
                <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
              </button>
            ))}
          </div>

          {/* Search bar inside header */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search e.g. 'Botox', 'Arpita', 'Bridal'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs py-3 pl-10 pr-4 bg-[#FAF8F5] border border-black/5 rounded-full focus:outline-none focus:border-[#D4AF37] transition-all"
            />
          </div>

          {/* Write review CTA Button */}
          <button
            onClick={() => setIsFormOpen(true)}
            className="md:ml-4 bg-[#D4AF37] hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write a review</span>
          </button>
        </div>
      </section>

      {/* SUBMIT REVIEW POPUP FORM */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl relative border border-black/5 focus:outline-none"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-2">Share Your Experience</h2>
              <p className="text-neutral-500 text-xs mb-6">Your real local review will instantly contribute to Wavelength's live appraisals.</p>

              {isSubmitSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl">Appraisal Registered!</h3>
                  <p className="text-xs text-neutral-400">Thank you for sharing your experience safely with other guests.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-bold">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Suhana Sen"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full text-xs p-3 bg-neutral-50 border border-black/5 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-bold">Treatment Received</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Hair Botox, Facial"
                        value={newReview.service}
                        onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                        className="w-full text-xs p-3 bg-neutral-50 border border-black/5 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-bold">Star Rating *</label>
                      <select 
                        value={newReview.rating}
                        onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                        className="w-full text-xs p-3 bg-neutral-50 border border-black/5 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - High quality</option>
                        <option value={3}>3 Stars - Moderate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-bold">Your Message *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe the styling outcome, standards, staff hospitality, and coffee experience..."
                      value={newReview.review}
                      onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                      className="w-full text-xs p-3 bg-neutral-50 border border-black/5 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex gap-3 justify-end">
                    <button 
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-6 py-3 border border-black/10 hover:border-black text-neutral-600 text-[10px] uppercase font-bold tracking-widest rounded-full transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-8 py-3 bg-[#D4AF37] text-white text-[10px] uppercase font-bold tracking-widest rounded-full hover:bg-neutral-900 transition-all cursor-pointer"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FEEDBACK CARDS GRID LIST */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 bg-white border border-black/5 rounded-3xl space-y-4">
            <MessageSquare className="w-12 h-12 text-[#D4AF37] mx-auto animate-pulse" />
            <h3 className="font-serif text-xl">No Appraisals Match Search</h3>
            <p className="text-xs text-neutral-400">Try adjusting your keyword filters or clear the search query bar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  layout
                  className="bg-white border border-black/5 rounded-3xl p-8 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {/* Upper row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-100 shrink-0 border border-[#D4AF37]/10">
                          <img 
                            src={r.avatar} 
                            alt={r.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-serif text-base text-neutral-900 leading-none">{r.name}</h4>
                          <span className="text-[9px] font-mono text-neutral-400">{r.date}</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 text-[#D4AF37]">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star 
                            key={starIdx} 
                            className={`w-3.5 h-3.5 ${starIdx < r.rating ? 'fill-[#D4AF37]' : 'text-neutral-200'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-neutral-600 text-xs leading-relaxed font-light mb-6">
                      "{r.review}"
                    </p>
                  </div>

                  {/* Attachment metadata info */}
                  <div className="border-t border-black/5 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Service selected</span>
                      <p className="text-[#D4AF37] text-xs font-serif leading-none mt-0.5">{r.service}</p>
                    </div>

                    {r.isLocal ? (
                      <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] font-mono py-1 px-2.5 rounded-full uppercase">
                        <CheckCircle className="w-2.5 h-2.5" />
                        <span>Verified Local</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-neutral-50 border border-neutral-100 text-neutral-400 text-[8px] font-mono py-1 px-2.5 rounded-full uppercase">
                        <span>Google Client</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
}
