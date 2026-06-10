import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import SalonIcon from './SalonIcon';

interface StatCardProps {
  value: string;
  targetNumber: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
  delay: number;
  key?: any;
}

function CounterCard({ value, targetNumber, suffix, label, sublabel, icon, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // 2 seconds animate
      const steps = 60;
      const stepTime = duration / steps;
      const increment = targetNumber / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  return (
    <motion.div
      ref={containerRef}
      className="relative p-8 bg-[#0F0F0F]/80 backdrop-blur-md rounded-none border border-white/5 border-t-[#D4AF37]/35 flex flex-col justify-between overflow-hidden group shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Background card accent glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/3 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-700" />
      
      {/* Card border shine hover transition */}
      <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 transition-all duration-700 pointer-events-none" />

      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-[#D4AF37]/10 rounded-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] transition-all duration-500">
          <SalonIcon name={icon} size={22} />
        </div>
        <div className="text-[10px] font-mono font-medium tracking-widest text-white/40 group-hover:text-[#D4AF37]/60 transition-colors uppercase">
          SECURE TRUST
        </div>
      </div>

      <div className="mt-4">
        <span className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#D4AF37]">
          {label === '4.5★' ? '4.5' : count.toLocaleString()}
          {suffix}
        </span>
        <h3 className="text-white/80 font-sans text-sm uppercase tracking-widest font-bold mt-3 mb-1 group-hover:text-white transition-colors">
          {label}
        </h3>
        <p className="text-white/50 text-xs font-sans tracking-wide leading-relaxed">
          {sublabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const statsList = [
    {
      value: '2947',
      targetNumber: 2947,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Exceptional global reviews and returning patrons',
      icon: 'Heart'
    },
    {
      value: '4.5',
      targetNumber: 4.5,
      suffix: '★',
      label: 'Google Rating',
      sublabel: 'An award-winning service score out of 2947+ votes',
      icon: 'Star'
    },
    {
      value: '15',
      targetNumber: 15,
      suffix: '+',
      label: 'Expert Stylists',
      sublabel: 'Globally certified aesthetic, skincare & hair professionals',
      icon: 'Award'
    },
    {
      value: '20',
      targetNumber: 20,
      suffix: '+',
      label: 'Premium Services',
      sublabel: 'Tailored luxury clinical beauty & grooming therapies',
      icon: 'Gem'
    }
  ];

  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <CounterCard
              key={stat.label}
              value={stat.value}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
