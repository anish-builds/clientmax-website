'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRedirect } from '@/context/RedirectContext';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

export function RedirectModal() {
  const { isOpen, activeResource, cancelRedirect } = useRedirect();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen || !activeResource) {
      setProgress(0);
      return;
    }

    setProgress(0);

    const startTime = performance.now();
    const duration = 650; // 650ms smooth editorial transition

    let animationFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        // Trigger external destination
        window.open(activeResource.url, '_blank', 'noopener,noreferrer');
        // Brief timeout before closing modal
        setTimeout(() => {
          cancelRedirect();
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen, activeResource, cancelRedirect]);

  const handleInstantProceed = () => {
    if (activeResource) {
      window.open(activeResource.url, '_blank', 'noopener,noreferrer');
      cancelRedirect();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && activeResource && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20221F]/50 backdrop-blur-[2px] p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="redirect-title"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-lg border border-[rgba(32,34,31,0.15)] bg-[#F5F2EA] p-8 sm:p-10 shadow-xl"
          >
            {/* Close / Cancel Button */}
            <button
              onClick={cancelRedirect}
              className="absolute top-6 right-6 text-[#4F5A48] hover:text-[#20221F] transition-colors p-1"
              aria-label="Cancel transition"
            >
              <X size={18} />
            </button>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 bg-[#B9D65A]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                CLIENTSMAX // EXTERNAL GATEWAY
              </span>
            </div>

            {/* Badge */}
            <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-[#20221F] border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA] px-2.5 py-0.5 mb-3">
              {activeResource.badge}
            </span>

            {/* Destination Title */}
            <h3
              id="redirect-title"
              className="text-2xl sm:text-3xl font-normal text-[#20221F] mb-2 font-editorial-serif tracking-tight"
            >
              {activeResource.name}
            </h3>

            {/* Destination Subtext */}
            <p className="text-sm text-[#4F5A48] mb-6 flex items-center gap-1.5">
              <span>Directing to:</span>
              <span className="text-[#20221F] font-medium underline underline-offset-4 decoration-[rgba(32,34,31,0.25)]">
                {activeResource.destinationLabel}
              </span>
              <ExternalLink size={13} className="text-[#4F5A48] ml-0.5" />
            </p>

            <p className="text-xs text-[#4F5A48] mb-6 font-light leading-relaxed">
              Taking you to your next verified step. This destination opens securely in a new browser tab.
            </p>

            {/* Editorial Progress Bar */}
            <div className="relative w-full h-[2px] bg-[#EAE5DA] mb-6 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#B9D65A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={cancelRedirect}
                className="text-xs font-mono tracking-wider uppercase text-[#4F5A48] hover:text-[#20221F] transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={handleInstantProceed}
                className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#20221F] bg-[#B9D65A] px-5 py-2.5 hover:bg-[#a8c64d] border border-[rgba(32,34,31,0.15)] transition-colors rounded-none"
              >
                <span>Proceed Now</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
