'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STAGES } from '@/content/journey';
import { ArrowRight, ArrowUpRight, CheckCircle2, Compass } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

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
    <section className="py-24 sm:py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-gray-200 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                THE 4-STAGE FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
              The Credit Journey<span className="text-green-600">.</span>
            </h2>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center gap-2 text-xs font-mono text-green-700 hover:text-green-800 font-semibold uppercase tracking-wider"
          >
            <span>Explore full 4-stage playbook</span>
            <ArrowRight size={14} />
          </Link>
        </div>

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
                  className={`text-left p-6 sm:p-7 rounded-sm border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-green-600 bg-green-50/40 shadow-xs'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-bold ${
                        isSelected ? 'text-green-700' : 'text-gray-400'
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
                      isSelected ? 'text-gray-950' : 'text-gray-700'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-normal line-clamp-1">
                    {stage.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="mt-8 bg-gray-50/80 rounded-sm border border-gray-200 p-8 sm:p-12 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              {/* Left Column: Stage Manifesto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-green-800 bg-green-100/70 px-2.5 py-0.5 rounded-xs">
                      PHASE {currentStage.step}
                    </span>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {currentStage.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-950 tracking-tight leading-snug">
                    {currentStage.tagline}
                  </h3>
                </div>

                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  {currentStage.description}
                </p>

                {/* Mindset Shift */}
                <div className="border-l-3 border-green-600 pl-4 py-2 bg-white rounded-r-sm space-y-1">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-green-800 font-semibold block">
                    STRATEGIC MINDSET
                  </span>
                  <p className="text-sm text-gray-800 italic font-medium leading-relaxed">
                    &ldquo;{currentStage.mindsetShift}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Tactical Milestones & Action */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-sm border border-gray-200 p-7 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono tracking-wider uppercase text-gray-900 font-semibold block">
                      TACTICAL MILESTONES:
                    </span>
                    <p className="text-xs text-gray-500">
                      Specific actions implemented during Phase {currentStage.step}.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-1">
                    {currentStage.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-normal">
                        <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={handleToolRedirect}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm cursor-pointer shadow-xs"
                    >
                      <span>{getResource(currentStage.recommendedToolKey)?.buttonText || 'ACTIVATE GATEWAY →'}</span>
                      <ArrowUpRight size={14} className="text-green-200" />
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
