'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { JOURNEY_STAGES } from '@/content/journey';
import { ArrowRight, ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
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
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase">
                THE 4-STAGE STRATEGIC FRAMEWORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              THE CREDIT JOURNEY
            </h2>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#20221F] font-semibold uppercase tracking-wider hover:underline"
            data-cursor="go"
          >
            <span>Explore Full 4-Stage Playbook</span>
            <ArrowRight size={13} className="text-[#B9D65A]" />
          </Link>
        </div>

        {/* Step Selector Tab Bar (Editorial Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 border transition-all duration-300 relative ${
                  isSelected
                    ? 'border-[#20221F] bg-[#EAE5DA] shadow-sm'
                    : 'border-[rgba(32,34,31,0.12)] hover:border-[rgba(32,34,31,0.25)] bg-[#EAE5DA]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-[#20221F]' : 'text-[#4F5A48]'
                    }`}
                  >
                    PHASE {stage.step}
                  </span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#20221F]" />
                  )}
                </div>

                <h3
                  className={`text-lg sm:text-xl font-editorial-serif font-normal ${
                    isSelected ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48]'
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-[11px] font-mono text-[#4F5A48] mt-1 line-clamp-1">
                  {stage.subtitle}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="stage-active-line"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#20221F]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="mt-8 border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/30 p-8 sm:p-12 lg:p-16 relative shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Stage Manifesto */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-mono text-[#20221F] font-bold">
                      {currentStage.step}
                    </span>
                    <div className="h-4 w-[1px] bg-[rgba(32,34,31,0.15)]" />
                    <span className="text-xs font-mono text-[#4F5A48] uppercase tracking-widest">
                      {currentStage.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-normal font-editorial-serif text-[#20221F] leading-tight">
                    {currentStage.tagline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4F5A48] font-light leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Mindset Shift Quote Box */}
                <div className="border-l-2 border-[#20221F] pl-6 py-3 bg-[#F5F2EA] space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                    STRATEGIC MINDSET SHIFT
                  </span>
                  <p className="text-sm text-[#20221F] italic font-editorial-serif">
                    &ldquo;{currentStage.mindsetShift}&rdquo;
                  </p>
                </div>

                {/* Action Checkpoints */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono tracking-wider uppercase text-[#20221F] font-semibold block">
                    TACTICAL MILESTONES:
                  </span>
                  <ul className="space-y-2.5">
                    {currentStage.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[#4F5A48]">
                        <CheckCircle2 size={15} className="text-[#20221F] shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Pitfall Warning & Recommended Gateway */}
              <div className="lg:col-span-5 space-y-6">
                {/* Critical Pitfall Alert */}
                <div className="border border-[rgba(32,34,31,0.12)] bg-[#F5F2EA] p-6 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#20221F]">
                    <AlertTriangle size={15} className="text-[#4F5A48]" />
                    <span className="text-xs font-mono tracking-wider uppercase font-semibold">
                      COMMON PITFALL TO AVOID
                    </span>
                  </div>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {currentStage.pitfallToAvoid}
                  </p>
                </div>

                {/* Direct Gateway Card */}
                <div className="border border-[rgba(32,34,31,0.15)] p-8 bg-[#F5F2EA] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#4F5A48] uppercase tracking-widest">
                      RECOMMENDED STEP / TOOL
                    </span>
                    <ShieldCheck size={16} className="text-[#20221F]" />
                  </div>

                  <h4 className="text-xl font-editorial-serif text-[#20221F]">
                    {currentStage.recommendedToolName}
                  </h4>

                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    Recommended resource or strategy session for Phase {currentStage.step}.
                  </p>

                  <button
                    onClick={handleToolRedirect}
                    data-cursor="view"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                  >
                    <span>{getResource(currentStage.recommendedToolKey)?.buttonText || 'ACTIVATE GATEWAY →'}</span>
                    <ArrowUpRight size={14} className="text-[#B9D65A]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
