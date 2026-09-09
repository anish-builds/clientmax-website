'use client';

import React, { useState } from 'react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource, ExternalResource } from '@/content/resources';
import { ArrowRight, ArrowUpRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function StartJourneyPage() {
  const { initiateRedirect } = useRedirect();

  const [step, setStep] = useState<number>(1);
  const [selectedMilestone, setSelectedMilestone] = useState<string>('');
  const [selectedStanding, setSelectedStanding] = useState<string>('');
  const [recommendation, setRecommendation] = useState<ExternalResource | null>(null);

  const milestones = [
    {
      id: 'audit',
      label: 'Audit & Understand My Report',
      subtext: 'I need to see what all 3 bureaus report and identify inaccuracies.',
      defaultResource: 'creditReport',
    },
    {
      id: 'build',
      label: 'Build Positive Payment History',
      subtext: 'I have limited or damaged credit and need low-risk building lines.',
      defaultResource: 'creditBuilding',
    },
    {
      id: 'vehicle',
      label: 'Prepare for Vehicle Financing',
      subtext: 'I plan to finance or lease a car and want tier-1 interest rates.',
      defaultResource: 'vehicle',
    },
    {
      id: 'cards',
      label: 'Acquire Prime Credit Cards',
      subtext: 'I want to pre-qualify for revolving cards without hard inquiry risk.',
      defaultResource: 'creditCards',
    },
    {
      id: 'advisory',
      label: 'Private 1-on-1 Consultation with Razila',
      subtext: 'I need a bespoke roadmap tailored to my complex personal file.',
      defaultResource: 'consultation',
    },
  ];

  const standings = [
    {
      id: 'below-620',
      label: 'Under 620 or Limited History',
      subtext: 'Priority is identifying errors and establishing foundational lines.',
    },
    {
      id: '620-690',
      label: '620 to 690 (Moderate Range)',
      subtext: 'Priority is optimizing statement cut dates and reducing utilization.',
    },
    {
      id: '690-plus',
      label: '700+ (Leverage Range)',
      subtext: 'Priority is accessing prime tier-1 lending and premium limits.',
    },
    {
      id: 'unknown',
      label: 'I Have Not Checked Recently',
      subtext: 'Priority is pulling an unadulterated 3-bureau report immediately.',
    },
  ];

  const handleMilestoneSelect = (id: string, resourceKey: string) => {
    setSelectedMilestone(id);
    setStep(2);
  };

  const handleStandingSelect = (id: string) => {
    setSelectedStanding(id);

    let targetKey = 'creditReport';

    if (selectedMilestone === 'audit' || id === 'unknown') {
      targetKey = 'creditReport';
    } else if (selectedMilestone === 'vehicle') {
      targetKey = 'vehicle';
    } else if (selectedMilestone === 'cards') {
      targetKey = 'creditCards';
    } else if (selectedMilestone === 'build' || id === 'below-620') {
      targetKey = 'creditBuilding';
    } else if (selectedMilestone === 'advisory') {
      targetKey = 'consultation';
    }

    const resource = getResource(targetKey);
    setRecommendation(resource);
    setStep(3);
  };

  const resetDiagnostic = () => {
    setStep(1);
    setSelectedMilestone('');
    setSelectedStanding('');
    setRecommendation(null);
  };

  return (
    <div className="pt-32 pb-24 bg-[#F5F2EA]">
      {/* Header */}
      <section className="border-b border-[rgba(32,34,31,0.10)] pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                STRATEGIC DIAGNOSTIC // ENTRY POINT SELECTOR
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              FIND YOUR
              <br />
              <span className="italic text-[#4F5A48]">STARTING POINT.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed pt-2">
              Answer 2 strategic questions. We will immediately match your profile with the appropriate CLIENTSMAX resource or advisory pathway.
            </p>

            {/* Progress indicator */}
            <div className="flex items-center gap-4 pt-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 flex items-center justify-center border text-[11px] font-semibold ${
                    step >= 1
                      ? 'border-[#20221F] text-[#20221F] bg-[#EAE5DA]'
                      : 'border-[rgba(32,34,31,0.18)] text-[#4F5A48]'
                  }`}
                >
                  1
                </span>
                <span className={step >= 1 ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48]'}>
                  Milestone
                </span>
              </div>

              <div className="h-[1px] w-8 bg-[rgba(32,34,31,0.15)]" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 flex items-center justify-center border text-[11px] font-semibold ${
                    step >= 2
                      ? 'border-[#20221F] text-[#20221F] bg-[#EAE5DA]'
                      : 'border-[rgba(32,34,31,0.18)] text-[#4F5A48]'
                  }`}
                >
                  2
                </span>
                <span className={step >= 2 ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48]'}>
                  Standing
                </span>
              </div>

              <div className="h-[1px] w-8 bg-[rgba(32,34,31,0.15)]" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 flex items-center justify-center border text-[11px] font-semibold ${
                    step >= 3
                      ? 'border-[#20221F] text-[#20221F] bg-[#EAE5DA]'
                      : 'border-[rgba(32,34,31,0.18)] text-[#4F5A48]'
                  }`}
                >
                  3
                </span>
                <span className={step >= 3 ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48]'}>
                  Roadmap
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                  QUESTION 01 OF 02
                </span>
                <h2 className="text-3xl font-editorial-serif text-[#20221F]">
                  What is your immediate primary financial goal?
                </h2>
              </div>

              <div className="space-y-4">
                {milestones.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleMilestoneSelect(m.id, m.defaultResource)}
                    className="w-full text-left p-6 sm:p-8 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/30 hover:bg-[#EAE5DA] hover:border-[#20221F]/30 transition-all duration-200 group flex items-start justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors">
                        {m.label}
                      </h3>
                      <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                        {m.subtext}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#4F5A48] group-hover:text-[#20221F] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                  QUESTION 02 OF 02
                </span>
                <h2 className="text-3xl font-editorial-serif text-[#20221F]">
                  Where does your credit currently stand?
                </h2>
              </div>

              <div className="space-y-4">
                {standings.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleStandingSelect(s.id)}
                    className="w-full text-left p-6 sm:p-8 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/30 hover:bg-[#EAE5DA] hover:border-[#20221F]/30 transition-all duration-200 group flex items-start justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors">
                        {s.label}
                      </h3>
                      <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                        {s.subtext}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[#4F5A48] group-hover:text-[#20221F] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-xs font-mono text-[#4F5A48] hover:text-[#20221F] underline font-semibold"
              >
                ← Back to question 1
              </button>
            </div>
          )}

          {/* STEP 3: RESULT RECOMMENDATION */}
          {step === 3 && recommendation && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#20221F] font-semibold">
                  DIAGNOSTIC COMPLETE / YOUR RECOMMENDED ENTRY POINT
                </span>
                <h2 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
                  Your Recommended Next Move
                </h2>
              </div>

              <div className="border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA]/40 p-8 sm:p-12 space-y-8 relative shadow-sm">
                <div className="flex items-center justify-between pb-6 border-b border-[rgba(32,34,31,0.10)]">
                  <span className="text-xs font-mono text-[#20221F] uppercase tracking-widest font-bold border border-[rgba(32,34,31,0.18)] bg-[#F5F2EA] px-2.5 py-0.5">
                    {recommendation.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#4F5A48]">
                    VERIFIED DESTINATION
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
                    {recommendation.name}
                  </h3>
                  <p className="text-sm font-mono text-[#4F5A48] font-semibold">
                    {recommendation.tagline}
                  </p>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed pt-2">
                    {recommendation.description}
                  </p>
                </div>

                <div className="p-6 bg-[#F5F2EA] border border-[rgba(32,34,31,0.12)] space-y-2 shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#20221F] font-semibold block">
                    WHY THIS IS YOUR OPTIMAL ENTRY POINT:
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {recommendation.whyChoose}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => initiateRedirect(recommendation)}
                    className="inline-flex items-center justify-center gap-2 py-4 px-8 bg-[#20221F] text-[#F5F2EA] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                  >
                    <span>{recommendation.buttonText}</span>
                    <ArrowUpRight size={14} className="text-[#B9D65A]" />
                  </button>

                  <button
                    onClick={resetDiagnostic}
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 border border-[rgba(32,34,31,0.25)] text-[#20221F] hover:bg-[#F5F2EA] font-mono text-xs uppercase tracking-wider transition-colors rounded-none"
                  >
                    <RotateCcw size={13} />
                    <span>Retake Diagnostic</span>
                  </button>
                </div>
              </div>

              {/* Alternative Consultation CTA */}
              <div className="p-6 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#20221F] font-semibold">
                    Prefer a human conversation?
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light">
                    Schedule a private 1-on-1 strategy call with Razila directly on Calendly.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-mono text-[#20221F] font-semibold hover:underline whitespace-nowrap"
                >
                  Book Private Call →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
