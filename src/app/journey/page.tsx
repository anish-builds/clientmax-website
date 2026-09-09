'use client';

import React from 'react';
import Link from 'next/link';
import { JOURNEY_STAGES } from '@/content/journey';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { ArrowRight, CheckCircle2, AlertOctagon, ArrowUpRight } from 'lucide-react';

export default function JourneyPage() {
  const { initiateRedirect } = useRedirect();

  const handleToolRedirect = (key: string) => {
    const resource = getResource(key);
    if (resource) {
      initiateRedirect(resource);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F5F2EA]">
      {/* Header */}
      <section className="border-b border-[rgba(32,34,31,0.10)] pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                THE PLAYBOOK // 4-STAGE PROGRESSION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              THE ARCHITECTURE
              <br />
              <span className="italic text-[#4F5A48]">OF CREDIT MASTERY.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed pt-2">
              Credit improvement is not random luck or aggressive dispute letters. It is a structured four-phase process. Follow the roadmap step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Stages List */}
      <section className="py-20 divide-y divide-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.step}
              id={`stage-${stage.step}`}
              className="py-20 border-b border-[rgba(32,34,31,0.10)] last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Header Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-mono font-bold text-[#20221F]">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#4F5A48]">
                      PHASE {stage.step}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
                    {stage.title}
                  </h2>

                  <p className="text-xs font-mono text-[#4F5A48] uppercase tracking-wider font-semibold">
                    {stage.subtitle}
                  </p>

                  <div className="pt-6">
                    <button
                      onClick={() => handleToolRedirect(stage.recommendedToolKey)}
                      className="inline-flex items-center gap-2 py-3 px-5 bg-[#20221F] text-[#F5F2EA] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                    >
                      <span>{getResource(stage.recommendedToolKey)?.buttonText || 'ACTIVATE GATEWAY →'}</span>
                      <ArrowUpRight size={13} className="text-[#B9D65A]" />
                    </button>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-8 space-y-8">
                  <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#20221F] leading-snug">
                    {stage.tagline}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4F5A48] font-light leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Mindset Callout */}
                  <div className="p-6 bg-[#EAE5DA]/50 border-l-2 border-[#20221F] space-y-2 shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#20221F] font-semibold block">
                      KEY MINDSET SHIFT
                    </span>
                    <p className="text-sm text-[#20221F] italic font-editorial-serif">
                      &ldquo;{stage.mindsetShift}&rdquo;
                    </p>
                  </div>

                  {/* Checkpoint Actions */}
                  <div className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#20221F] font-semibold block">
                      PHASE {stage.step} EXECUTION CHECKLIST:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage.keyActions.map((action, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/20 shadow-sm"
                        >
                          <CheckCircle2 size={16} className="text-[#20221F] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#4F5A48] leading-relaxed">
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Error */}
                  <div className="flex items-start gap-3 p-4 border border-[#8a423d]/20 bg-[#8a423d]/5 text-xs text-[#4F5A48] shadow-sm">
                    <AlertOctagon size={16} className="text-[#8a423d] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#20221F] font-medium font-mono uppercase tracking-wider text-[11px] block">
                        Common Mistake to Avoid:
                      </strong>{' '}
                      {stage.pitfallToAvoid}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation Link */}
      <section className="pt-16 text-center">
        <div className="max-w-xl mx-auto space-y-4 px-6">
          <p className="text-xs font-mono text-[#4F5A48] uppercase tracking-widest">
            NEED A PERSONALIZED DIAGNOSTIC?
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#20221F] font-semibold hover:underline"
          >
            <span>Run the Interactive Entry Point Assessment</span>
            <ArrowRight size={14} className="text-[#B9D65A]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
