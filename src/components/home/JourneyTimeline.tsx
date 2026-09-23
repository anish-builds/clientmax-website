'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STAGES } from '@/content/journey';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { initiateRedirect } = useRedirect();

  const currentStage = JOURNEY_STAGES[activeStep];

  const handleToolRedirect = () => {
    if (currentStage.recommendedToolKey) {
      const resource = getResource(currentStage.recommendedToolKey);
      if (resource) {
        initiateRedirect(resource);
      }
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with Shared Motion */}
        <motion.div
          variants={fadeUpHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-gray-200 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold">
                THE 4-STAGE FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
              The Credit Journey<span className="text-green-600">.</span>
            </h2>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center gap-2 text-xs font-mono text-green-700 hover:text-green-800 font-semibold tracking-[0.12em] uppercase"
          >
            <span>Explore full 4-stage playbook</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* 4-Stage Horizontal Progression Tracker */}
        <div className="relative pt-12">
          {/* Connecting line behind stages on desktop */}
          <div className="hidden lg:block absolute top-[4.2rem] left-10 right-10 h-[2px] bg-gray-200 -z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 sm:p-7 rounded-sm border transition-all duration-200 cursor-pointer card-hover ${
                    isSelected
                      ? 'border-green-600 bg-green-50/50 shadow-xs ring-1 ring-green-600'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-bold ${
                        isSelected ? 'text-green-700' : 'text-slate-400'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        isSelected ? 'bg-green-600 ring-4 ring-green-100' : 'bg-gray-300'
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold font-display tracking-tight ${
                      isSelected ? 'text-gray-950' : 'text-slate-700'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-normal line-clamp-1">
                    {stage.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="mt-8 bg-slate-50/70 rounded-sm border border-gray-200 p-8 sm:p-12 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              {/* Left Column: Stage Manifesto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-green-800 bg-green-100/70 px-2.5 py-0.5 rounded-xs tracking-wider">
                      PHASE {currentStage.step}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-[0.12em]">
                      {currentStage.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-950 tracking-tight leading-snug">
                    {currentStage.tagline}
                  </h3>
                </div>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {currentStage.description}
                </p>

                {/* Mindset Shift */}
                <div className="border-l-3 border-green-600 pl-4 py-2.5 bg-white rounded-r-sm space-y-1 shadow-2xs">
                  <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-green-800 font-semibold block">
                    STRATEGIC MINDSET
                  </span>
                  <p className="text-sm text-slate-800 italic font-medium leading-relaxed">
                    &ldquo;{currentStage.mindsetShift}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Tactical Milestones & Action */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-sm border border-gray-200 p-7 sm:p-8 space-y-5 card-hover shadow-xs">
                  <div className="space-y-1">
                    <span className="text-xs font-mono tracking-[0.14em] uppercase text-gray-950 font-semibold block">
                      TACTICAL MILESTONES:
                    </span>
                    <p className="text-xs text-slate-500">
                      Specific actions implemented during Phase {currentStage.step}.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-1">
                    {currentStage.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-normal">
                        <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={handleToolRedirect}
                      className="btn-primary w-full"
                    >
                      <span>{getResource(currentStage.recommendedToolKey)?.buttonText || 'ACTIVATE GATEWAY →'}</span>
                      <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
