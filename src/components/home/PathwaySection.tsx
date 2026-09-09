'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import Link from 'next/link';

interface PathwayDetail {
  id: string;
  number: string;
  shortTitle: string;
  selectorSubtext: string;
  headline: string;
  tagline: string;
  description: string;
  underwritingInsight: string;
  checkpoints: string[];
  destinationLabel: string;
  resourceKey: string;
  actionText: string;
}

export function PathwaySection() {
  const { initiateRedirect } = useRedirect();
  const [selectedId, setSelectedId] = useState<string>('understand');

  const pathways: PathwayDetail[] = [
    {
      id: 'understand',
      number: '01',
      shortTitle: 'UNDERSTAND',
      selectorSubtext: 'The 3-Bureau Report Audit',
      headline: 'KNOW EXACTLY WHAT LENDERS SEE.',
      tagline: 'Review historical remarks and balance-to-limit ratios before making an application.',
      description: 'You cannot plan your next financial move when working from incomplete or outdated credit monitoring apps. A comprehensive 3-bureau review reveals hidden derogatory flags, naming discrepancies, and true statement balances.',
      underwritingInsight: 'Most consumer monitoring apps display VantageScore, while mortgage lenders and auto underwriters rely primarily on FICO scoring models. Knowing what lenders see protects your time and money.',
      checkpoints: [
        'Review complete 3-bureau data from Experian, TransUnion, and Equifax',
        'Identify balance-to-limit ratio bottlenecks driving down reported scores',
        'Verify the accuracy of all open, closed, and secondary account remarks',
      ],
      destinationLabel: 'Calendly Private Scheduler',
      resourceKey: 'creditReport',
      actionText: 'BOOK YOUR CREDIT CONSULTATION →',
    },
    {
      id: 'build',
      number: '02',
      shortTitle: 'BUILD',
      selectorSubtext: 'Positive Compounding Trade Lines',
      headline: 'BUILD CREDIT DEPTH WITHOUT ACCUMULATING DEBT.',
      tagline: 'Establish accredited, on-time payment records reported monthly to the bureaus.',
      description: 'A thin credit profile can be just as limiting as a damaged one. Building durable credit strength requires active revolving and installment trade lines that report consistently on time with zero interest penalties.',
      underwritingInsight: 'Payment history is considered the largest single scoring factor in FICO models. Adding a dedicated credit-building line helps establish verified monthly on-time entries without incurring revolving interest.',
      checkpoints: [
        'Activate non-predatory reporting lines with zero interest overhead',
        'Ensure recurring monthly logs to both Equifax and Experian',
        'Build average account age (AAoA) steadily and naturally',
      ],
      destinationLabel: 'Kikoff Credit Builder Portal',
      resourceKey: 'creditBuilding',
      actionText: 'EXPLORE CREDIT BUILDING →',
    },
    {
      id: 'discover',
      number: '03',
      shortTitle: 'DISCOVER',
      selectorSubtext: 'Prime Revolving Capacity',
      headline: 'PRE-QUALIFY FOR PRIME CARDS WITH ZERO SCORE RISK.',
      tagline: 'Expand your credit limits and naturally lower your utilization ratio.',
      description: 'Applying blindly for credit cards triggers hard inquiries that can temporarily lower your score. Strategic borrowing utilizes soft-inquiry pre-qualification tools to examine real approval terms before submitting a formal application.',
      underwritingInsight: 'Expanding your total available revolving limit from $5,000 to $20,000 cuts your utilization percentage significantly without requiring you to pay down a single additional balance.',
      checkpoints: [
        'Pre-qualify via soft inquiry before submitting a formal application',
        'Target reputable lenders that offer periodic credit line reviews',
        'Keep reported statement balances low by paying ahead of closing dates',
      ],
      destinationLabel: 'Capital One Pre-Approval Portal',
      resourceKey: 'creditCards',
      actionText: 'EXPLORE CREDIT CARDS →',
    },
    {
      id: 'move',
      number: '04',
      shortTitle: 'MOVE',
      selectorSubtext: 'Vehicle Financing & Leasing',
      headline: 'COMMAND PRIME AUTO RATES. AVOID DEALERSHIP MARKUPS.',
      tagline: 'Navigate automotive lending and protect your inquiry count.',
      description: 'Dealerships routinely submit client files to multiple subprime lenders simultaneously, creating unnecessary hard inquiry clusters. Knowing your standing beforehand enables you to negotiate direct financing with confidence.',
      underwritingInsight: 'Auto lending frequently utilizes specialized auto-specific FICO scoring models. Preparing your profile before visiting the dealer can save thousands in financing interest.',
      checkpoints: [
        'Review auto-specific score factors and loan-to-value expectations',
        'Seek pre-approved credit union or captive lender financing first',
        'Negotiate financing terms from a position of verified credit strength',
      ],
      destinationLabel: 'Clarel Vehicle Finance Resource',
      resourceKey: 'vehicle',
      actionText: 'EXPLORE VEHICLE OPTIONS →',
    },
    {
      id: 'connect',
      number: '05',
      shortTitle: 'CONNECT',
      selectorSubtext: 'Private Advisory with Razila',
      headline: 'PRIVATE 1-ON-1 STRATEGY DIRECTLY WITH RAZILA.',
      tagline: 'A confidential deep-dive into your report, immediate priorities, and customized execution.',
      description: 'Cut through automated guesswork and generic advice. Schedule a private strategy session with Razila to walk through your credit profile, sequence your moves, and build a concrete roadmap.',
      underwritingInsight: 'Every consultation is held directly with Razila—not an offshore call center or automated chatbot. We analyze your credit goals and prioritize actions based on what matters most for your timeline.',
      checkpoints: [
        'Comprehensive line-by-line 3-bureau report audit',
        'Personalized statement calendar for optimal balance reporting',
        'Immediate execution checklist for upcoming auto, home, or card goals',
      ],
      destinationLabel: 'Calendly Private Scheduler',
      resourceKey: 'consultation',
      actionText: 'BOOK A ONE-ON-ONE CONSULTATION →',
    },
  ];

  const currentPathway = pathways.find((p) => p.id === selectedId) || pathways[0];

  const handleAction = () => {
    const resource = getResource(currentPathway.resourceKey);
    if (resource) {
      initiateRedirect(resource);
    }
  };

  return (
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[rgba(32,34,31,0.10)]">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                STRATEGIC PATHWAYS // OBJECTIVE SELECTOR
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              WHERE DO YOU WANT
              <br />
              <span className="italic text-[#4F5A48]">YOUR CREDIT</span> TO TAKE YOU?
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right space-y-2">
            <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
              Select an objective below to explore the credit strategy, lender expectations, and verified next steps.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#20221F] font-semibold hover:underline"
            >
              <span>Take the 2-step diagnostic assessment</span>
              <ArrowRight size={12} className="text-[#B9D65A]" />
            </Link>
          </div>
        </div>

        {/* Master Interactive Editorial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-start">
          {/* Left Column: Asymmetric Vertical Selector List */}
          <div className="lg:col-span-5 divide-y divide-[rgba(32,34,31,0.10)] border-t border-b lg:border-b-0 border-[rgba(32,34,31,0.10)]">
            {pathways.map((item) => {
              const isActive = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setSelectedId(item.id)}
                  className={`w-full text-left py-6 px-4 sm:px-6 transition-all duration-200 flex items-center justify-between group relative ${
                    isActive ? 'bg-[#EAE5DA]' : 'hover:bg-[#EAE5DA]/50'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="pathway-indicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#20221F]"
                    />
                  )}

                  <div className="space-y-1 pr-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? 'text-[#20221F]' : 'text-[#4F5A48]'
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-editorial-serif tracking-tight transition-colors ${
                          isActive ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48] group-hover:text-[#20221F]'
                        }`}
                      >
                        {item.shortTitle}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-[#4F5A48] pl-7">
                      {item.selectorSubtext}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? 'text-[#20221F] translate-x-1'
                        : 'text-[#4F5A48]/50 group-hover:text-[#20221F] group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Showcase */}
          <div className="lg:col-span-7 relative border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/40 p-8 sm:p-12 min-h-[540px] flex flex-col justify-between shadow-sm">
            {/* Watermark Large Number */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-8 font-editorial-serif text-8xl sm:text-9xl text-[rgba(32,34,31,0.05)] select-none pointer-events-none -z-0"
            >
              {currentPathway.number}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPathway.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative z-10 space-y-8"
              >
                {/* Eyebrow & Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-[rgba(32,34,31,0.10)]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#B9D65A]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase">
                      STRATEGIC PATHWAY // {currentPathway.shortTitle}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[#4F5A48] border border-[rgba(32,34,31,0.18)] bg-[#F5F2EA] px-2 py-0.5 uppercase">
                    PHASE {currentPathway.number}
                  </span>
                </div>

                {/* Main Dynamic Headline */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-editorial-serif text-[#20221F] leading-tight">
                    {currentPathway.headline}
                  </h3>
                  <p className="text-xs font-mono text-[#4F5A48] font-semibold">
                    {currentPathway.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4F5A48] font-light leading-relaxed">
                  {currentPathway.description}
                </p>

                {/* Underwriting Insight Box */}
                <div className="p-5 bg-[#F5F2EA] border-l-2 border-[#20221F] space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#20221F] font-semibold block">
                    CREDIT & LENDER INSIGHT:
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {currentPathway.underwritingInsight}
                  </p>
                </div>

                {/* Tactical Checkpoints */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#4F5A48] font-semibold block">
                    KEY RECOMMENDED ACTIONS:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {currentPathway.checkpoints.map((cp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#20221F]">
                        <CheckCircle2 size={14} className="text-[#20221F] shrink-0 mt-0.5" />
                        <span>{cp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 border-t border-[rgba(32,34,31,0.10)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-[#4F5A48] truncate">
                    Destination: {currentPathway.destinationLabel}
                  </span>

                  <button
                    onClick={handleAction}
                    data-cursor="view"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#20221F] text-[#F5F2EA] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                  >
                    <span>{currentPathway.actionText}</span>
                    <ArrowUpRight size={14} className="text-[#B9D65A]" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
