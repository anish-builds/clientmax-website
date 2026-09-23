'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT_STORIES } from '@/content/stories';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function ClientStorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLIENT_STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === CLIENT_STORIES.length - 1 ? 0 : prev + 1));
  };

  const activeStory = CLIENT_STORIES[currentIndex];

  return (
    <section id="outcomes" className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header with Shared Motion */}
        <motion.div
          variants={fadeUpHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-gray-200 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold">
                CLIENT EXPERIENCES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
              Real client outcomes<span className="text-green-600">.</span>
            </h2>
          </div>

          {/* Navigation Controls: Previous / Next & Pagination Dots */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {CLIENT_STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to outcome ${idx + 1}`}
                  className={`h-2 transition-all duration-200 rounded-full cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-green-700' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <button
                onClick={prevStory}
                aria-label="Previous outcome"
                className="p-2.5 border border-gray-200 text-slate-700 hover:text-gray-950 hover:bg-slate-50 rounded-sm transition-colors cursor-pointer"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={nextStory}
                aria-label="Next outcome"
                className="p-2.5 border border-gray-200 text-slate-700 hover:text-gray-950 hover:bg-slate-50 rounded-sm transition-colors cursor-pointer"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Interactive Single-Instance Carousel Area */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Primary Feature Story Card */}
              <div className="lg:col-span-8 p-8 sm:p-12 bg-slate-50/70 border border-gray-200 rounded-sm card-hover flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/80">
                    <span className="text-xs font-mono font-bold text-green-700 tracking-[0.14em]">
                      {activeStory.number}
                    </span>
                    <span className="text-xs font-mono text-slate-500 tracking-[0.12em]">
                      {activeStory.location}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950">
                      {activeStory.clientContext}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 tracking-wider block">
                      Timeline: {activeStory.timeline}
                    </span>
                  </div>

                  <blockquote className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal italic">
                    &ldquo;{activeStory.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-2 bg-white -mx-8 sm:-mx-12 -mb-8 sm:-mb-12 p-6 sm:p-8 rounded-b-sm">
                  <span className="text-xs font-mono tracking-[0.14em] uppercase text-green-800 font-semibold block">
                    DOCUMENTED RESULT
                  </span>
                  <p className="text-sm sm:text-base text-gray-950 font-medium leading-relaxed">
                    {activeStory.result}
                  </p>
                </div>
              </div>

              {/* Supporting Context & Strategy Breakdown */}
              <div className="lg:col-span-4 p-8 bg-white border border-gray-200 rounded-sm card-hover flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-[0.14em] uppercase text-slate-500 font-semibold block">
                      CLIENT OBJECTIVE
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {activeStory.goal}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <span className="text-xs font-mono tracking-[0.14em] uppercase text-green-800 font-semibold block">
                      STRATEGIC FOCUS
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {activeStory.focus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>OUTCOME {currentIndex + 1} OF {CLIENT_STORIES.length}</span>
                  <span className="text-green-700 font-semibold">VERIFIED CASE</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
