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
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                THE PLAYBOOK // 4-STAGE PROGRESSION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              The Architecture of Credit Mastery<span className="text-green-600">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              Credit improvement is not random chance or generic dispute letters. It is an intentional 4-stage process. Follow the roadmap step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Stages List */}
      <section className="py-20 divide-y divide-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.step}
              id={`stage-${stage.step}`}
              className="py-20 first:pt-4 last:pb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Header Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl sm:text-6xl font-mono font-extrabold text-green-700">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold">
                      PHASE {stage.step}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950">
                    {stage.title}
                  </h2>

                  <p className="text-sm font-semibold text-green-800">
                    {stage.subtitle}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => handleToolRedirect(stage.recommendedToolKey)}
                      className="inline-flex items-center gap-2 py-3 px-5 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-xs"
                    >
                      <span>{getResource(stage.recommendedToolKey)?.buttonText || 'ACTIVATE GATEWAY →'}</span>
                      <ArrowUpRight size={13} className="text-green-200" />
                    </button>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-8 space-y-7">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 leading-snug">
                    {stage.tagline}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  {/* Mindset Callout */}
                  <div className="p-6 bg-green-50/70 border-l-4 border-green-700 rounded-r-sm space-y-1.5 shadow-2xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-green-800 font-bold block">
                      KEY STRATEGIC MINDSET
                    </span>
                    <p className="text-sm text-green-950 italic font-medium">
                      &ldquo;{stage.mindsetShift}&rdquo;
                    </p>
                  </div>

                  {/* Checkpoint Actions */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-900 font-bold block">
                      PHASE {stage.step} EXECUTION CHECKLIST:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {stage.keyActions.map((action, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 border border-gray-200 bg-gray-50/60 rounded-sm"
                        >
                          <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pitfall Warning */}
                  <div className="flex items-start gap-3 p-4 border border-red-200 bg-red-50/50 rounded-sm text-xs sm:text-sm text-gray-700">
                    <AlertOctagon size={16} className="text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-900 font-bold font-mono uppercase tracking-wider text-[11px] block">
                        Common Mistake to Avoid:
                      </strong>
                      <span>{stage.pitfallToAvoid}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation Link */}
      <section className="pt-16 text-center">
        <div className="max-w-xl mx-auto space-y-4 px-4">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
            NEED A PERSONALIZED EVALUATION?
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-4"
          >
            <span>Run the Interactive Entry Point Assessment</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
