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
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#F5F2EA]/95 backdrop-blur-md border-t border-[rgba(32,34,31,0.15)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg"
          role="region"
          aria-label="Quick consultation booking"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-[#B9D65A] shrink-0" />
                <span className="text-[9px] font-mono tracking-wider uppercase text-[#4F5A48] truncate">
                  1-ON-1 ADVISORY // RAZILA
                </span>
              </div>
              <p className="text-xs font-editorial-serif text-[#20221F] truncate mt-0.5 font-medium">
                Book Your Consultation
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#20221F] text-[#F5F2EA] font-mono text-[11px] uppercase tracking-wider font-semibold rounded-none border border-[#20221F] active:scale-[0.98]"
              >
                <span>BOOK NOW</span>
                <ArrowUpRight size={13} className="text-[#B9D65A]" />
              </button>

              <button
                onClick={() => {
                  setIsDismissed(true);
                  setIsVisible(false);
                }}
                aria-label="Dismiss quick booking bar"
                className="p-1.5 text-[#4F5A48] hover:text-[#20221F] transition-colors"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
