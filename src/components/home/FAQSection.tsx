'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/content/faq';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 sm:py-32 bg-gray-950 text-white border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-gray-800 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-mono tracking-widest text-green-400 uppercase font-semibold">
                CLARITY & PERSPECTIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Frequently Asked Questions<span className="text-green-500">.</span>
            </h2>
          </div>

          <p className="text-sm text-gray-400 max-w-md leading-relaxed font-normal">
            Straightforward answers regarding our 1-on-1 consultations, advisory approach, realistic timelines, and ethical standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-gray-800/80 border-b border-gray-800/80">
          {FAQS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-7 px-4 sm:px-6 flex items-center justify-between gap-6 text-left cursor-pointer group hover:bg-gray-900/40 transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-4">
                    <span
                      className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                        isOpen ? 'text-green-400' : 'text-gray-500'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-bold font-display transition-colors ${
                        isOpen ? 'text-green-400' : 'text-gray-100 group-hover:text-white'
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full border transition-colors shrink-0 ${
                      isOpen
                        ? 'border-green-500 text-green-400 bg-green-950/40'
                        : 'border-gray-800 text-gray-400 bg-gray-900 group-hover:border-gray-600 group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 px-4 sm:px-6 pl-10 sm:pl-14 max-w-4xl">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Prompt Strip */}
        <div className="mt-12 p-8 bg-gray-900/80 border border-gray-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-display text-white">
              Have a question about your specific credit profile?
            </h4>
            <p className="text-xs text-gray-400 font-normal">
              Schedule a 1-on-1 strategy call with Razila directly on Calendly for confidential guidance.
            </p>
          </div>

          <button
            onClick={() => initiateRedirect(consultationResource)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-green-700 hover:bg-green-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm cursor-pointer shrink-0"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight size={14} className="text-green-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
