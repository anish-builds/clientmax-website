'use client';

import React, { useState } from 'react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource, ExternalResource } from '@/content/resources';
import { ArrowRight, ArrowUpRight, RotateCcw, CheckCircle2 } from 'lucide-react';
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
      label: 'Review & Understand My Credit Profile',
      subtext: 'I want a 1-on-1 consultation with Razila to review my 3-bureau report and map priorities.',
      defaultResource: 'creditReport',
    },
    {
      id: 'build',
      label: 'Build Positive Payment History',
      subtext: 'I have limited or damaged credit and need low-risk building lines without debt traps.',
      defaultResource: 'creditBuilding',
    },
    {
      id: 'vehicle',
      label: 'Prepare for Vehicle Financing',
      subtext: 'I plan to finance or lease a car and want prime interest rates without dealer markups.',
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
      subtext: 'I need a personalized roadmap tailored to my specific financial timeline.',
      defaultResource: 'consultation',
    },
  ];

  const standings = [
    {
      id: 'below-620',
      label: 'Under 620 or Limited History',
      subtext: 'Priority is identifying errors and establishing foundational trade lines.',
    },
    {
      id: '620-690',
      label: '620 to 690 (Moderate Range)',
      subtext: 'Priority is optimizing statement closing dates and reducing reported utilization.',
    },
    {
      id: '690-plus',
      label: '700+ (Prime Range)',
      subtext: 'Priority is accessing prime lending rates and higher credit limits.',
    },
    {
      id: 'unknown',
      label: 'I Have Not Checked Recently',
      subtext: 'Priority is reviewing a complete 3-bureau report with a strategist.',
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
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                STRATEGIC DIAGNOSTIC // ENTRY POINT SELECTOR
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              Find Your Starting Point<span className="text-green-600">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              Answer 2 quick questions. We will immediately identify the appropriate CLIENTSMAX resource or advisory pathway for your goals.
            </p>

            {/* Progress indicator */}
            <div className="flex items-center gap-4 pt-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${
                    step >= 1
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  1
                </span>
                <span className={step >= 1 ? 'text-gray-900 font-bold' : 'text-gray-500'}>
                  Milestone
                </span>
              </div>

              <div className="h-[1px] w-8 bg-gray-200" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${
                    step >= 2
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  2
                </span>
                <span className={step >= 2 ? 'text-gray-900 font-bold' : 'text-gray-500'}>
                  Standing
                </span>
              </div>

              <div className="h-[1px] w-8 bg-gray-200" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${
                    step >= 3
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  3
                </span>
                <span className={step >= 3 ? 'text-gray-900 font-bold' : 'text-gray-500'}>
                  Roadmap
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest uppercase text-green-700 font-bold">
                  QUESTION 01 OF 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
                  What is your immediate primary financial goal?
                </h2>
              </div>

              <div className="space-y-4">
                {milestones.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleMilestoneSelect(m.id, m.defaultResource)}
                    className="card-hover w-full text-left p-6 sm:p-7 border border-gray-200 bg-white hover:border-green-600 hover:bg-green-50/30 rounded-sm group flex items-start justify-between gap-4 shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 group-hover:text-green-800 transition-colors">
                        {m.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                        {m.subtext}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all shrink-0 mt-1"
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
                <span className="text-xs font-mono tracking-widest uppercase text-green-700 font-bold">
                  QUESTION 02 OF 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
                  Where does your credit score currently stand?
                </h2>
              </div>

              <div className="space-y-4">
                {standings.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleStandingSelect(s.id)}
                    className="card-hover w-full text-left p-6 sm:p-7 border border-gray-200 bg-white hover:border-green-600 hover:bg-green-50/30 rounded-sm group flex items-start justify-between gap-4 shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 group-hover:text-green-800 transition-colors">
                        {s.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                        {s.subtext}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-xs font-mono text-gray-600 hover:text-green-700 font-bold underline cursor-pointer"
              >
                ← Back to question 1
              </button>
            </div>
          )}

          {/* STEP 3: RESULT RECOMMENDATION */}
          {step === 3 && recommendation && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest uppercase text-green-700 font-bold">
                  DIAGNOSTIC COMPLETE // RECOMMENDED PATHWAY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950">
                  Your Recommended Next Step
                </h2>
              </div>

              <div className="border border-green-200 bg-green-50/40 p-8 sm:p-12 rounded-sm space-y-7 shadow-xs">
                <div className="flex items-center justify-between pb-5 border-b border-green-200/80">
                  <span className="text-xs font-mono text-green-800 uppercase tracking-widest font-bold bg-green-100 px-3 py-1 rounded-xs">
                    {recommendation.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    VERIFIED DESTINATION
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
                    {recommendation.name}
                  </h3>
                  <p className="text-sm font-semibold text-green-800">
                    {recommendation.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal pt-1">
                    {recommendation.description}
                  </p>
                </div>

                <div className="p-6 bg-white border border-green-200 rounded-sm space-y-1.5 shadow-2xs">
                  <span className="text-xs font-mono uppercase tracking-wider text-green-800 font-bold block">
                    WHY THIS IS YOUR OPTIMAL ENTRY POINT:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {recommendation.whyChoose}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => initiateRedirect(recommendation)}
                    className="btn-primary inline-flex items-center justify-center gap-2 py-3 px-8 text-xs tracking-wider cursor-pointer"
                  >
                    <span>{recommendation.buttonText}</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
                  </button>

                  <button
                    onClick={resetDiagnostic}
                    className="btn-secondary inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider cursor-pointer"
                  >
                    <RotateCcw size={16} strokeWidth={1.5} />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              </div>

              {/* Consultation Option */}
              <div className="p-6 border border-gray-200 bg-gray-50 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-gray-900 font-bold">
                    Prefer a direct human conversation?
                  </span>
                  <p className="text-xs text-gray-500 font-normal">
                    Schedule a private 1-on-1 strategy session directly with Razila on Calendly.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-green-700 hover:text-green-800 underline uppercase tracking-wider whitespace-nowrap"
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
