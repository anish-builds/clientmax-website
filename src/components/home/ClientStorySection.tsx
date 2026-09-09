'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT_STORIES } from '@/content/stories';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export function ClientStorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % CLIENT_STORIES.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + CLIENT_STORIES.length) % CLIENT_STORIES.length);
  };

  const current = CLIENT_STORIES[currentIndex];

  return (
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                DOCUMENTED PROGRESSION // CASE NARRATIVES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              PROVEN STRATEGY<span className="text-[#B9D65A]">.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevStory}
              aria-label="Previous client story"
              className="p-3 border border-[rgba(32,34,31,0.20)] text-[#4F5A48] hover:text-[#20221F] hover:bg-[#EAE5DA] transition-colors rounded-none"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-xs font-mono text-[#4F5A48] px-2 font-semibold">
              0{currentIndex + 1} / 0{CLIENT_STORIES.length}
            </span>
            <button
              onClick={nextStory}
              aria-label="Next client story"
              className="p-3 border border-[rgba(32,34,31,0.20)] text-[#4F5A48] hover:text-[#20221F] hover:bg-[#EAE5DA] transition-colors rounded-none"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Story Content Area (Editorial Structure) */}
        <div className="mt-12 border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/30 p-8 sm:p-12 lg:p-16 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Large Editorial Quote */}
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono tracking-widest text-[#20221F] font-bold uppercase">
                    {current.number}
                  </span>
                  <div className="h-3 w-[1px] bg-[rgba(32,34,31,0.15)]" />
                  <span className="text-xs font-mono text-[#4F5A48]">
                    {current.clientContext} • {current.location}
                  </span>
                </div>

                <div className="relative">
                  <Quote
                    size={36}
                    className="text-[rgba(32,34,31,0.08)] absolute -top-5 -left-6 -z-10"
                  />
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif italic text-[#20221F] leading-snug">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-[#20221F]" />
                  <span className="text-xs font-mono text-[#4F5A48] uppercase tracking-wider font-semibold">
                    TIMELINE: {current.timeline}
                  </span>
                </div>
              </div>

              {/* Right Column: Goal, Focus, Result Breakdown */}
              <div className="lg:col-span-5 space-y-6 bg-[#F5F2EA] border border-[rgba(32,34,31,0.12)] p-8 shadow-sm">
                <div className="space-y-1.5 pb-4 border-b border-[rgba(32,34,31,0.10)]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                    CLIENT OBJECTIVE / GOAL
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {current.goal}
                  </p>
                </div>

                <div className="space-y-1.5 pb-4 border-b border-[rgba(32,34,31,0.10)]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#4F5A48] font-semibold">
                    STRATEGIC FOCUS
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {current.focus}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                    OBSERVED RESULT
                  </span>
                  <p className="text-xs text-[#20221F] font-medium leading-relaxed">
                    {current.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
