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
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                CLARITY // FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              COMMON QUESTIONS<span className="text-[#B9D65A]">.</span>
            </h2>
          </div>

          <p className="text-xs text-[#4F5A48] max-w-md font-light leading-relaxed">
            Straightforward answers about our 1-on-1 consultations, educational approach, expectations, and ethical standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[rgba(32,34,31,0.10)] border-b border-[rgba(32,34,31,0.10)]">
          {FAQS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-[#EAE5DA]/30">
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-7 px-2 flex items-center justify-between gap-6 text-left group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-4">
                    <span className="font-mono text-xs text-[#4F5A48] shrink-0 font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className="p-2 border border-[rgba(32,34,31,0.15)] text-[#20221F] bg-[#EAE5DA]/40 group-hover:bg-[#EAE5DA] transition-colors shrink-0">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 px-2 pl-10 sm:pl-12 max-w-3xl">
                        <p className="text-xs sm:text-sm text-[#4F5A48] font-light leading-relaxed">
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

        {/* Bottom Booking Prompt */}
        <div className="mt-12 p-8 border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#20221F] font-semibold block">
              Have a question about your specific situation?
            </span>
            <p className="text-xs text-[#4F5A48] font-light">
              Discuss your credit report directly with Razila in a private 1-on-1 strategy call.
            </p>
          </div>

          <button
            onClick={() => initiateRedirect(consultationResource)}
            data-cursor="view"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F] shrink-0"
          >
            <span>BOOK A ONE-ON-ONE CONSULTATION →</span>
            <ArrowUpRight size={14} className="text-[#B9D65A]" />
          </button>
        </div>
      </div>
    </section>
  );
}
