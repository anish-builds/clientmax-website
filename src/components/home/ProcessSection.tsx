'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Search, Compass } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function ProcessSection() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const steps = [
    {
      number: '01',
      title: 'BOOK',
      headline: 'Choose a time that fits your schedule',
      description:
        'Select a convenient time on Calendly for your private 1-on-1 video consultation directly with Razila. No sales intermediaries or offshore reps.',
      icon: Calendar,
      meta: 'CALENDLY SCHEDULER',
    },
    {
      number: '02',
      title: 'REVIEW',
      headline: 'Examine your 3-bureau report line by line',
      description:
        'Audit your Experian, Equifax, and TransUnion files. Identify balance reporting bottlenecks, remark discrepancies, and score suppression factors.',
      icon: Search,
      meta: 'CONFIDENTIAL AUDIT',
    },
    {
      number: '03',
      title: 'STRATEGIZE',
      headline: 'Leave with a concrete action roadmap',
      description:
        'Walk away with a prioritized checklist outlining statement cutoff dates, balance targets, and exact sequencing for your upcoming financial goals.',
      icon: Compass,
      meta: 'CUSTOM ACTION PLAN',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50/60 border-b border-gray-100">
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
                CONSULTATION PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
              What Happens Next<span className="text-green-600">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed font-normal">
            Booking a consultation is straightforward, private, and actionable. Here is how we turn confusing credit files into clear financial momentum.
          </p>
        </motion.div>

        {/* 3 Steps Grid with Standardized Card-Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-8 sm:p-9 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between space-y-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-mono font-extrabold text-green-700">
                        {step.number}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-[0.14em] font-semibold">
                        — {step.title}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-sm bg-green-50 text-green-700">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-gray-950 leading-snug">
                      {step.headline}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-[0.12em]">
                  <span>STEP {step.number}</span>
                  <span className="text-green-700 font-semibold">{step.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Prompt */}
        <div className="mt-12 p-8 bg-white border border-gray-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs card-hover">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-display text-gray-950">
              Ready to schedule your session?
            </h4>
            <p className="text-xs text-slate-500 font-normal">
              Select your consultation time on Calendly to discuss your credit profile directly with Razila.
            </p>
          </div>

          <button
            onClick={() => initiateRedirect(consultationResource)}
            className="btn-primary shrink-0"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
