'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (250px) and if not manually dismissed
      if (window.scrollY > 250 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 250) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
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
                <span className="text-[10px] font-mono tracking-wider uppercase text-green-700 font-bold truncate">
                  CLIENTSMAX • RAZILA
                </span>
              </div>
              <p className="text-xs font-display text-gray-900 truncate mt-0.5 font-bold">
                Book A Consultation
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold text-[11px] uppercase tracking-wider rounded-sm shadow-xs"
              >
                <span>BOOK NOW</span>
                <ArrowUpRight size={13} className="text-green-200" />
              </button>

              <button
                onClick={() => {
                  setIsDismissed(true);
                  setIsVisible(false);
                }}
                aria-label="Dismiss quick booking bar"
                className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
