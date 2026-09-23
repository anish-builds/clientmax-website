import { Variants } from 'framer-motion';

/**
 * Shared Motion System for CLIENTSMAX
 * Consistent easing, timing, and viewport-once triggers sitewide.
 */

// Section Header Entrance (8–12px vertical shift + opacity 0→1)
export const fadeUpHeader: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Subtle Content Fade
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Container Stagger for Lists / Grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Child item within staggered container
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Viewport trigger once guard: never re-triggers on repeated scrolling
export const viewportOnce = {
  once: true,
  amount: 0.2,
};
