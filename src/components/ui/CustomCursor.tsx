'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'pointer' | 'view' | 'explore' | 'go';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Precision springs: dot follows with rapid response, ring lags organically
  const dotSpring = { damping: 35, stiffness: 600, mass: 0.1 };
  const ringSpring = { damping: 26, stiffness: 280, mass: 0.5 };

  const dotX = useSpring(rawX, dotSpring);
  const dotY = useSpring(rawY, dotSpring);
  const ringX = useSpring(rawX, ringSpring);
  const ringY = useSpring(rawY, ringSpring);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate for desktop fine-pointer devices and when user has not requested reduced motion
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

      // Check for clickable/interactive elements
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .card-hover, .btn-primary, .btn-secondary, label');
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

  // Ring dimension calculations
  const ringSize = hasLabel
    ? 72
    : isClicking
    ? 24
    : variant === 'pointer'
    ? 44
    : 32;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          backgroundColor: hasLabel
            ? '#15803D'
            : variant === 'pointer'
            ? 'rgba(21, 128, 61, 0.08)'
            : isClicking
            ? 'rgba(21, 128, 61, 0.16)'
            : 'rgba(15, 23, 42, 0.03)',
          borderColor: hasLabel
            ? '#15803D'
            : variant === 'pointer'
            ? '#15803D'
            : isClicking
            ? '#0D5C3A'
            : 'rgba(15, 23, 42, 0.22)',
          borderWidth: hasLabel ? 0 : variant === 'pointer' ? 1.5 : 1,
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 320 }}
        className="fixed top-0 left-0 rounded-full flex items-center justify-center select-none shadow-sm"
      >
        {hasLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="tracking-widest font-mono text-[9px] font-semibold text-white uppercase text-center px-1"
          >
            {getCursorLabel()}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      {!hasLabel && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isClicking ? 0.6 : variant === 'pointer' ? 1.4 : 1,
            backgroundColor: variant === 'pointer' ? '#15803D' : '#0F172A',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 450 }}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none"
        />
      )}
    </div>
  );
}
