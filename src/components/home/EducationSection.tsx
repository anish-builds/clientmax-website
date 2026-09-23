'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CREDIT_FACTORS, FICO_DISCLOSURE } from '@/content/education';
import { Sparkles, AlertCircle } from 'lucide-react';

const SELECTOR_LABELS = [
  '35% PAYMENT HISTORY',
  '30% UTILIZATION',
  '15% CREDIT HISTORY',
  '10% CREDIT MIX',
  '10% NEW CREDIT',
];

export function EducationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFactor = CREDIT_FACTORS[activeIndex] || CREDIT_FACTORS[0];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top: Compact Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="text-[11px] font-mono tracking-wider text-green-700 uppercase font-semibold">
              CREDIT EDUCATION // SCORING PRINCIPLES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-950 tracking-tight leading-tight">
            CREDIT IS MORE THAN A NUMBER.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Most scoring models evaluate five core categories. Understanding how underwriters review your profile turns credit management into a predictable, deliberate skill.
          </p>
        </div>

        {/* Compact Horizontal Factor Selector */}
        <div className="mt-8 pt-4 pb-2 border-t border-gray-200">
          <div
            role="tablist"
            aria-label="Credit Scoring Factors"
            className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-1"
          >
            {SELECTOR_LABELS.map((label, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <React.Fragment key={label}>
                  <button
                    role="tab"
                    id={`factor-tab-${idx}`}
                    aria-selected={isSelected}
                    aria-controls={`factor-panel-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative whitespace-nowrap text-xs font-mono py-2 px-3 rounded-xs transition-colors cursor-pointer shrink-0 ${
                      isSelected
                        ? 'text-green-800 font-bold bg-green-50'
                        : 'text-gray-500 hover:text-gray-900 font-medium'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          isSelected ? 'bg-green-600' : 'bg-transparent group-hover:bg-gray-300'
                        }`}
                      />
                      <span>{label}</span>
                    </span>

                    {/* Subtle bottom active line indicator */}
                    {isSelected && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-green-700 rounded-full" />
                    )}
                  </button>

                  {/* Editorial middle dot divider between selector items */}
                  {idx < SELECTOR_LABELS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-gray-300 text-xs select-none shrink-0"
                    >
                      ·
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Factor Content Area */}
        <div className="mt-6 pt-6 border-t border-gray-100 min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFactor.name}
              id={`factor-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`factor-tab-${activeIndex}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Metric & Primary Explanation */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                    {activeFactor.percentage}
                  </span>
                  <span className="text-xs font-mono font-semibold text-green-700 uppercase tracking-wider">
                    {activeFactor.weightLabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 leading-snug">
                  {activeFactor.name}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {activeFactor.editorialSummary}
                </p>
              </div>

              {/* Right Column: Key Strategy & Myth / Reality */}
              <div className="lg:col-span-6 space-y-5 lg:border-l lg:border-gray-200 lg:pl-10">
                {/* Key Strategy */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-green-800">
                    <Sparkles size={13} className="text-green-700 shrink-0" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">
                      KEY STRATEGY
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed border-l-2 border-green-600 pl-3 py-0.5 font-normal">
                    {activeFactor.strategicTakeaway}
                  </p>
                </div>

                {/* Myth vs Reality */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <AlertCircle size={13} className="text-gray-500 shrink-0" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">
                      MYTH VS. REALITY
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed border-l-2 border-gray-300 pl-3 py-0.5 font-normal">
                    {activeFactor.misconception}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FICO Model Disclaimer */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs text-gray-500 font-normal leading-relaxed">
          <strong className="text-gray-700 font-semibold font-mono uppercase tracking-wider text-[10px] shrink-0">
            SCORING MODEL DISCLOSURE:
          </strong>
          <p className="text-gray-500">{FICO_DISCLOSURE}</p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
