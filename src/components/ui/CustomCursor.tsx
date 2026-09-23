'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'pointer' | 'text' | 'view' | 'explore' | 'go';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Raw mouse coordinates for zero-latency arrow tip tracking
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth trailing spring for subtle ambient glow / badge
  const trailSpring = { damping: 24, stiffness: 280, mass: 0.5 };
  const trailX = useSpring(rawX, trailSpring);
  const trailY = useSpring(rawY, trailSpring);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate on devices with fine pointer (mouse / trackpad) and standard motion preferences
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const customType = cursorTarget.getAttribute('data-cursor') as CursorVariant;
        if (customType) {
          setVariant(customType);
          return;
        }
      }

      // Text input fields
      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setVariant('text');
        return;
      }

      // Interactive clickables
      const isInteractive = target.closest(
        'a, button, select, [role="button"], .card-hover, .btn-primary, .btn-secondary, label, summary, [tabindex]:not([tabindex="-1"])'
      );
      if (isInteractive) {
        setVariant('pointer');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [rawX, rawY, isVisible]);

  if (!isEnabled || !isVisible) return null;

  const hasLabel = variant === 'view' || variant === 'explore' || variant === 'go';

  const getCursorLabel = () => {
    switch (variant) {
      case 'view':
        return 'VIEW →';
      case 'explore':
        return 'EXPLORE';
      case 'go':
        return 'GO →';
      default:
        return '';
    }
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* ── Optional Ambient Spring Follower (Subtle luxury halo on hover) ── */}
      {variant === 'pointer' && (
        <motion.div
          style={{
            x: trailX,
            y: trailY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: isClicking ? 0.8 : 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#15803D]/10 border border-[#15803D]/30"
        />
      )}

      {/* ── Special Editorial Floating Badge (e.g. VIEW / EXPLORE) ── */}
      {hasLabel && (
        <motion.div
          style={{
            x: trailX,
            y: trailY,
            translateX: 18,
            translateY: 18,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-0 left-0 bg-[#15803D] text-white text-[10px] font-mono font-semibold tracking-widest px-2.5 py-1 rounded shadow-lg uppercase select-none"
        >
          {getCursorLabel()}
        </motion.div>
      )}

      {/* ── Main Custom Arrow Pointer (Zero latency at exact cursor tip) ── */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
        }}
        animate={{
          scale: isClicking ? 0.88 : variant === 'pointer' ? 1.08 : 1,
          rotate: variant === 'pointer' ? -4 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        className="fixed top-0 left-0 origin-top-left"
      >
        {variant === 'text' ? (
          /* Custom Editorial I-Beam for text inputs */
          <svg
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            className="-translate-x-1/2 -translate-y-1/2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          >
            <path
              d="M5 2H13M9 2V22M5 22H13"
              stroke="#15803D"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* Custom-Made Bespoke Arrow Cursor (Hotspot is exactly at 0, 0 top-left) */
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_4px_rgba(15,23,42,0.35)]"
          >
            {/* Outer crisp contrast border */}
            <path
              d="M2.5 1.5L2.5 21.2L7.6 16.4L11.8 24.8L15.2 23.1L11.0 14.7L17.2 14.7L2.5 1.5Z"
              fill={variant === 'pointer' ? '#15803D' : '#0F172A'}
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Subtle inner emerald jewel pip for brand signature */}
            <circle
              cx="6.5"
              cy="8.5"
              r="1.2"
              fill={variant === 'pointer' ? '#FFFFFF' : '#15803D'}
            />
          </svg>
        )}
      </motion.div>
    </div>
  );
}
