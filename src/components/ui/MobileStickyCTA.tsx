'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowUp, X } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);

      // Show sticky CTA after scrolling past the hero (250px) if not dismissed
      if (scrollY > 250 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= 250) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Back-to-Top Button for Mobile/Tablet */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-20 right-4 z-40 md:hidden p-2.5 bg-gray-950/90 text-white rounded-full shadow-md border border-gray-800 backdrop-blur-xs flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors"
          >
            <ArrowUp size={16} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Quick Booking Bar */}
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg"
            role="region"
            aria-label="Quick consultation booking"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 shrink-0" />
                  <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-green-700 font-bold truncate">
                    CLIENTSMAX • RAZILA
                  </span>
                </div>
                <p className="text-xs font-display text-gray-950 truncate mt-0.5 font-bold">
                  Book A Consultation
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => initiateRedirect(consultationResource)}
                  className="btn-primary !px-3.5 !py-2 text-[11px]"
                >
                  <span>BOOK NOW</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} className="text-green-200" />
                </button>

                <button
                  onClick={() => {
                    setIsDismissed(true);
                    setIsVisible(false);
                  }}
                  aria-label="Dismiss quick booking bar"
                  className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
