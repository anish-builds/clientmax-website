'use client';

import React from 'react';
import { ArrowUpRight, Calendar, Search, Compass, CheckCircle2 } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

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
    <section className="py-24 sm:py-32 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-gray-200 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                CONSULTATION PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
              What Happens Next<span className="text-green-600">.</span>
            </h2>
          </div>

          <p className="text-sm text-gray-600 max-w-md leading-relaxed font-normal">
            Booking a consultation is straightforward, private, and actionable. Here is how we turn confusing credit files into clear financial momentum.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-8 sm:p-9 rounded-sm border border-gray-200 hover:border-green-600 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-mono font-extrabold text-green-700">
                        {step.number}
                      </span>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">
                        — {step.title}
                      </span>
                    </div>
                    <div className="p-2 rounded-full bg-green-50 text-green-700">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-gray-900 leading-snug">
                      {step.headline}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  <span>STEP {step.number}</span>
                  <span className="text-green-700 font-semibold">{step.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Prompt */}
        <div className="mt-12 p-8 bg-white border border-gray-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-display text-gray-900">
              Ready to schedule your session?
            </h4>
            <p className="text-xs text-gray-500 font-normal">
              Select your consultation time on Calendly to discuss your credit profile directly with Razila.
            </p>
          </div>

          <button
            onClick={() => initiateRedirect(consultationResource)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm cursor-pointer shrink-0"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight size={14} className="text-green-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
