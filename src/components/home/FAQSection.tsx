'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/content/faq';
import { Plus, Minus } from 'lucide-react';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white border-b border-gray-100 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          variants={fadeUpHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 sm:pb-16 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold">
                CLARITY &amp; PERSPECTIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
              Frequently Asked Questions<span className="text-green-600">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed font-normal">
            Straightforward answers regarding our 1-on-1 consultations, advisory approach, realistic timelines, and ethical standards.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {FAQS.map((item, idx) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-6 px-2 sm:px-4 flex items-center justify-between gap-6 text-left cursor-pointer group hover:bg-gray-50/60 transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-4">
                    <span
                      className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                        isOpen ? 'text-green-700' : 'text-gray-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-bold font-display transition-colors ${
                        isOpen ? 'text-green-700' : 'text-gray-900 group-hover:text-gray-950'
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-full border transition-colors shrink-0 ${
                      isOpen
                        ? 'border-green-600 text-green-700 bg-green-50'
                        : 'border-gray-200 text-gray-400 bg-gray-50 group-hover:border-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={1.5} />
                    ) : (
                      <Plus size={16} strokeWidth={1.5} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pt-1 px-2 sm:px-4 pl-10 sm:pl-14 max-w-4xl">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
      </div>
    </section>
  );
}
