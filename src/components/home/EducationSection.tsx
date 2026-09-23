'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CREDIT_FACTORS, FICO_DISCLOSURE } from '@/content/education';
import { Sparkles, AlertCircle } from 'lucide-react';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

interface FactorVisual {
  percentageNum: number;
  label: string;
  name: string;
  color: string;
  activeColor: string;
}

const VISUAL_FACTORS: FactorVisual[] = [
  { percentageNum: 35, label: '35%', name: 'Payment History', color: 'bg-green-700', activeColor: 'ring-2 ring-green-600 ring-offset-2' },
  { percentageNum: 30, label: '30%', name: 'Utilization', color: 'bg-emerald-600', activeColor: 'ring-2 ring-emerald-500 ring-offset-2' },
  { percentageNum: 15, label: '15%', name: 'Credit History', color: 'bg-slate-700', activeColor: 'ring-2 ring-slate-600 ring-offset-2' },
  { percentageNum: 10, label: '10%', name: 'Credit Mix', color: 'bg-slate-500', activeColor: 'ring-2 ring-slate-400 ring-offset-2' },
  { percentageNum: 10, label: '10%', name: 'New Credit', color: 'bg-slate-400', activeColor: 'ring-2 ring-slate-400 ring-offset-2' },
];

export function EducationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFactor = CREDIT_FACTORS[activeIndex] || CREDIT_FACTORS[0];

  return (
    <section id="education" className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top: Section Header with Shared Motion */}
        <motion.div
          variants={fadeUpHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="text-xs font-mono text-green-700 font-semibold tracking-[0.14em] uppercase">
              CREDIT EDUCATION // SCORING PRINCIPLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
            Credit is more than a number<span className="text-green-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Most scoring models evaluate five core categories. Understanding how underwriters review your profile turns credit management into a predictable, deliberate skill.
          </p>
        </motion.div>

        {/* Data Visualization: Interactive Proportional Stacked Bar Chart */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50/70 border border-gray-200/90 rounded-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono font-semibold text-slate-600 tracking-[0.12em] uppercase">
              FICO SCORING WEIGHT PROPORTIONS
            </span>
            <span className="text-xs text-slate-500 font-normal">
              Click a segment to inspect underwriting criteria
            </span>
          </div>

          {/* Proportional Stacked Bar */}
          <div
            role="tablist"
            aria-label="FICO score weight visual chart"
            className="w-full h-5 sm:h-6 rounded-xs overflow-hidden flex bg-gray-200 p-0.5 gap-0.5 cursor-pointer shadow-2xs"
          >
            {VISUAL_FACTORS.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.name}
                  role="tab"
                  id={`fico-tab-${idx}`}
                  aria-selected={isSelected}
                  aria-controls={`fico-panel-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{ width: `${item.percentageNum}%` }}
                  title={`${item.label} ${item.name}`}
                  className={`h-full relative transition-all duration-200 group ${item.color} ${
                    isSelected ? 'opacity-100 ring-2 ring-gray-950 z-10 scale-y-105' : 'opacity-85 hover:opacity-100'
                  }`}
                />
              );
            })}
          </div>

          {/* Interactive Legend / Selector Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
            {VISUAL_FACTORS.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-2.5 rounded-sm border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-green-700 bg-white shadow-xs ring-1 ring-green-600'
                      : 'border-gray-200 bg-white/70 hover:bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full shrink-0 ${item.color}`} />
                    <span className="text-sm font-bold font-display text-gray-950">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 truncate mt-1">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Factor Content Area */}
        <div className="mt-8 pt-8 border-t border-gray-100 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFactor.name}
              id={`fico-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`fico-tab-${activeIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Metric & Primary Explanation */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                    {activeFactor.percentage}
                  </span>
                  <span className="text-xs font-mono font-semibold text-green-700 tracking-[0.12em] uppercase">
                    {activeFactor.weightLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-950 leading-snug">
                  {activeFactor.name}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {activeFactor.editorialSummary}
                </p>
              </div>

              {/* Right Column: Key Strategy & Myth / Reality */}
              <div className="lg:col-span-6 space-y-5 lg:border-l lg:border-gray-200 lg:pl-10">
                {/* Key Strategy */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-green-800">
                    <Sparkles size={16} strokeWidth={1.5} className="text-green-700 shrink-0" />
                    <span className="text-xs font-mono font-semibold tracking-[0.12em] uppercase">
                      KEY STRATEGY
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed border-l-2 border-green-600 pl-3.5 py-0.5 font-normal">
                    {activeFactor.strategicTakeaway}
                  </p>
                </div>

                {/* Myth vs Reality */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-600">
                    <AlertCircle size={16} strokeWidth={1.5} className="text-slate-500 shrink-0" />
                    <span className="text-xs font-mono font-semibold tracking-[0.12em] uppercase">
                      MYTH VS. REALITY
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed border-l-2 border-slate-300 pl-3.5 py-0.5 font-normal">
                    {activeFactor.misconception}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FICO Model Disclaimer */}
        <div className="mt-10 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs text-slate-500 font-normal leading-relaxed">
          <strong className="text-slate-700 font-semibold font-mono uppercase tracking-[0.12em] text-[10px] shrink-0">
            SCORING MODEL DISCLOSURE:
          </strong>
          <p className="text-slate-500">{FICO_DISCLOSURE}</p>
        </div>
      </div>
    </section>
  );
}
