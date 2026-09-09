'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'pointer' | 'view' | 'explore' | 'go';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end organic cursor movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable for desktop mice with fine pointer capabilities
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
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

      // Check for buttons or links
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      if (isInteractive) {
        setVariant('pointer');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

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

  const hasLabel = variant === 'view' || variant === 'explore' || variant === 'go';

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Outer Cursor Aura / Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: hasLabel ? 72 : variant === 'pointer' ? 36 : 10,
          height: hasLabel ? 72 : variant === 'pointer' ? 36 : 10,
          backgroundColor: hasLabel
            ? '#B9D65A'
            : variant === 'pointer'
            ? 'rgba(185, 214, 90, 0.25)'
            : '#20221F',
          borderColor: variant === 'pointer' || hasLabel ? '#20221F' : 'rgba(32, 34, 31, 0)',
          borderWidth: variant === 'pointer' || hasLabel ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] font-bold text-[#20221F] uppercase tracking-wider select-none"
      >
        {hasLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="tracking-widest font-mono text-[9px] text-[#20221F]"
          >
            {getCursorLabel()}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
