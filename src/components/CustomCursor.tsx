import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position coordinates of cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for trailing ring
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the current device is mobile or touch based
    const checkDevice = () => {
      const mobileMatch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(mobileMatch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Track mouse move
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Track mouse leaving/entering window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track state of hovering links, buttons, and custom magnetic targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestInteractive = target.closest('a, button, [role="button"], input, select, textarea, .interactive-card');
      if (closestInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  // Render nothing on mobile or if hidden
  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 1. Core Center Dot */}
      <motion.div
        className="fixed w-2.5 h-2.5 bg-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 z-[10000]"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? '#FFFFFF' : '#D4AF37'
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />

      {/* 2. Trailing Aura Ring */}
      <motion.div
        className="fixed w-9 h-9 border border-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
        style={{
          left: trailX,
          top: trailY,
        }}
        animate={{
          scale: isHovered ? 2.1 : 1,
          borderWidth: isHovered ? '1.5px' : '1px',
          borderColor: isHovered ? '#FFFFFF' : '#D4AF37',
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0.02)',
          boxShadow: isHovered 
            ? '0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(212, 175, 55, 0.2)' 
            : '0 0 0px rgba(0,0,0,0)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />

      {/* 3. Subtle outer particle shimmer */}
      {isHovered && (
        <motion.div
          className="fixed w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/10 pointer-events-none mix-blend-overlay"
          style={{
            left: cursorX,
            top: cursorY,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 4, ease: 'linear' },
            scale: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
          }}
        />
      )}
    </div>
  );
}
