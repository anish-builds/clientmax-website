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
    const duration = 600; // 600ms smooth transition

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
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/60 backdrop-blur-xs p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="redirect-title"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg border border-gray-200 bg-white p-8 sm:p-10 rounded-sm shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={cancelRedirect}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1"
              aria-label="Cancel transition"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-[11px] font-mono tracking-widest text-green-700 uppercase font-bold">
                CLIENTSMAX // EXTERNAL GATEWAY
              </span>
            </div>

            {/* Badge */}
            <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-green-800 bg-green-100 px-2.5 py-0.5 rounded-xs font-bold mb-3">
              {activeResource.badge}
            </span>

            {/* Destination Title */}
            <h3
              id="redirect-title"
              className="text-2xl sm:text-3xl font-bold text-gray-950 mb-2 font-display tracking-tight"
            >
              {activeResource.name}
            </h3>

            {/* Destination Subtext */}
            <p className="text-sm text-gray-600 mb-5 flex items-center gap-1.5">
              <span>Directing to:</span>
              <span className="text-green-700 font-semibold underline underline-offset-4">
                {activeResource.destinationLabel}
              </span>
              <ExternalLink size={16} strokeWidth={1.5} className="text-green-700 ml-0.5" />
            </p>

            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Taking you to your next verified step. This destination opens securely in a new browser tab.
            </p>

            {/* Progress Bar */}
            <div className="relative w-full h-[3px] bg-gray-100 mb-6 overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={cancelRedirect}
                className="text-xs font-mono tracking-wider uppercase text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleInstantProceed}
                className="btn-primary inline-flex items-center gap-2 text-xs py-2 px-5 cursor-pointer"
              >
                <span>Proceed Now</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
