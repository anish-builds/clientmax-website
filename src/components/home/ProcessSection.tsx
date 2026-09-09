'use client';

import React from 'react';
import { ArrowUpRight, Calendar, Search, Compass } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function ProcessSection() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const steps = [
    {
      number: '01',
      title: 'BOOK',
      headline: 'Choose a time that works for you',
      description:
        'Select a convenient time on Calendly for your private 1-on-1 video call directly with Razila. No gatekeepers, no sales reps.',
      icon: Calendar,
      meta: 'CALENDLY SCHEDULER',
    },
    {
      number: '02',
      title: 'REVIEW',
      headline: 'Discuss your situation, goals, and priorities',
      description:
        'Examine your 3-bureau credit report line by line, evaluate balance reporting cycles, and identify what is holding your scores or approvals back.',
      icon: Search,
      meta: 'CONFIDENTIAL AUDIT',
    },
    {
      number: '03',
      title: 'STRATEGIZE',
      headline: 'Leave with a clear understanding of your next steps',
      description:
        'Walk away with a customized, prioritized roadmap outlining statement dates, balance targets, and key actions for your upcoming financial milestones.',
      icon: Compass,
      meta: 'CUSTOM ACTION PLAN',
    },
  ];

  return (
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                CONSULTATION WORKFLOW // WHAT TO EXPECT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              WHAT HAPPENS NEXT<span className="text-[#B9D65A]">.</span>
            </h2>
          </div>

          <p className="text-xs text-[#4F5A48] max-w-md font-light leading-relaxed">
            Booking a consultation is straightforward and confidential. Here is how we move from where you are today to complete strategic clarity.
          </p>
        </div>

        {/* 3-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/40 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm relative group hover:bg-[#EAE5DA] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(32,34,31,0.10)]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-mono text-[#20221F] font-bold">
                        {step.number}
                      </span>
                      <span className="text-xs font-mono text-[#4F5A48] uppercase tracking-widest">
                        — {step.title}
                      </span>
                    </div>
                    <IconComponent size={18} className="text-[#4F5A48]" />
                  </div>

                  {/* Headline & Body */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-editorial-serif text-[#20221F] leading-snug">
                      {step.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4F5A48] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="pt-4 border-t border-[rgba(32,34,31,0.10)] flex items-center justify-between text-[10px] font-mono text-[#4F5A48] uppercase tracking-wider">
                  <span>STEP {step.number}</span>
                  <span className="text-[#20221F] font-semibold">{step.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Trigger */}
        <div className="mt-12 p-8 border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#20221F] font-semibold block">
              Ready to begin?
            </span>
            <p className="text-xs text-[#4F5A48] font-light">
              Select your consultation time on Calendly to discuss your credit profile directly with Razila.
            </p>
          </div>

          <button
            onClick={() => initiateRedirect(consultationResource)}
            data-cursor="view"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F] shrink-0"
          >
            <span>BOOK YOUR CREDIT CONSULTATION →</span>
            <ArrowUpRight size={14} className="text-[#B9D65A]" />
          </button>
        </div>
      </div>
    </section>
  );
}
