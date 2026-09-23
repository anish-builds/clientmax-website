'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, FileText, TrendingUp, Key, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { fadeUpHeader } from '@/lib/motion';

export default function ServicesPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const timelineSteps = [
    {
      code: 'STAGE 01',
      title: 'ASSESS',
      desc: 'Line-by-line 3-bureau audit across Experian, TransUnion, and Equifax to detect balance discrepancies and inaccurate marks.',
    },
    {
      code: 'STAGE 02',
      title: 'PREPARE',
      desc: 'Optimize statement closing cycles, pay down targeted revolving balances, and eliminate reporting bottlenecks.',
    },
    {
      code: 'STAGE 03',
      title: 'POSITION',
      desc: 'Leverage soft-pull pre-approvals and establish trade-line depth without incurring blind hard inquiries.',
    },
    {
      code: 'STAGE 04',
      title: 'APPLY',
      desc: 'Submit formal applications during pre-calculated financing windows for prime automotive, mortgage, or premium card terms.',
    },
  ];

  const howItWorks = [
    {
      number: '01',
      title: 'REVIEW',
      action: 'Understand your current profile.',
      details: 'Line-by-line review of how your trade lines, inquiries, and utilization ratios are recorded by all three credit bureaus.',
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      action: 'Determine what should happen first.',
      details: 'Sequence your upcoming financial actions so statement dates, dispute windows, and credit depth work in your favor.',
    },
    {
      number: '03',
      title: 'MOVE',
      action: 'Execute with a clear plan.',
      details: 'Move forward with complete clarity and direct 1-on-1 accountability alongside founder Razila.',
    },
  ];

  const focusAreas = [
    {
      icon: FileText,
      title: 'Underwriting Algorithm Literacy',
      desc: 'Demystifying FICO vs. VantageScore scoring differences and learning what human underwriters actually evaluate.',
    },
    {
      icon: Clock,
      title: 'Statement Timing Leverage',
      desc: 'Mapping payment due dates to statement closing dates so you report minimal revolving utilization without carrying interest debt.',
    },
    {
      icon: ShieldCheck,
      title: 'Federal Inaccuracy Corrections',
      desc: 'Navigating consumer dispute rights to correct balance mismatches, outdated remarks, and inaccurate identifiers under federal law.',
    },
    {
      icon: TrendingUp,
      title: 'Compounding Trade-Line Depth',
      desc: 'Activating low-friction credit-building lines that report positive monthly records without high fees or subprime debt traps.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* 1. COMPACT, RICH FIRST VIEW: INTEGRATED HERO + EDITORIAL ARTWORK */}
      <section className="border-b border-gray-100 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUpHeader}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Compact, punchy header */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  SERVICES // STRATEGIC ADVISORY
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.65rem] font-extrabold font-display text-gray-950 tracking-tight leading-[1.06]">
                STRATEGY BEFORE THE APPLICATION.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-xl">
                Private, one-on-one credit strategy designed around your actual profile, goals, and next financial move.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2.5 text-xs font-mono text-gray-600">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm font-medium">
                  <CheckCircle2 size={13} className="text-green-600" />
                  FOUNDER-DIRECT SESSIONS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm font-medium">
                  <CheckCircle2 size={13} className="text-green-600" />
                  ZERO SUBSCRIPTION LOCK-IN
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => initiateRedirect(consultationResource)}
                  className="btn-primary inline-flex items-center gap-2 py-2.5 px-6 text-xs tracking-wider cursor-pointer"
                >
                  <span>BOOK A STRATEGY CONSULTATION</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: High-End Strategic Advisory Photograph */}
            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-gray-50 p-2 sm:p-2.5 rounded-sm shadow-xs group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/services-advisory.jpg"
                    alt="Private Financial Strategy Desk with 3-Bureau Credit Evaluation Document"
                    fill
                    priority
                    className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>3-BUREAU STRATEGIC ANALYSIS</span>
                  <span className="text-gray-950 font-medium">CONFIDENTIAL REVIEW</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THREE LARGE EDITORIAL SERVICE BLOCKS */}
      <section className="py-14 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10 sm:space-y-14">
          
          {/* SERVICE 01: 3-BUREAU CREDIT AUDIT */}
          <div className="border border-gray-200 bg-white rounded-sm p-7 sm:p-10 relative overflow-hidden shadow-xs hover:border-gray-950 transition-all duration-300">
            {/* Watermark 01 */}
            <div className="absolute right-4 -top-8 sm:-top-12 text-[10rem] sm:text-[14rem] font-mono font-extrabold text-gray-100/70 select-none pointer-events-none leading-none z-0">
              01
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest px-2 py-0.5 bg-green-50 border border-green-200 rounded-xs">
                    SERVICE 01
                  </span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    COMPREHENSIVE AUDIT
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gray-950 tracking-tight">
                  3-BUREAU CREDIT AUDIT
                </h2>

                <p className="text-base text-gray-600 font-sans leading-relaxed">
                  Understand exactly what is being reported across Experian, TransUnion, and Equifax. We identify reporting inconsistencies, outdated remarks, and balance-to-limit issues before any applications are submitted.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-950 block mb-2.5">
                    INCLUDES:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                      <span>3-bureau report review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                      <span>Reporting discrepancy analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                      <span>Balance-to-limit review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                      <span>Strategic priorities</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => initiateRedirect(consultationResource)}
                    className="btn-primary inline-flex items-center gap-2 py-2.5 px-6 text-xs tracking-wider cursor-pointer"
                  >
                    <span>LEARN MORE &amp; AUDIT</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Data Structure / Metric Overview Panel */}
              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 p-6 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-xs font-mono uppercase text-gray-500 font-bold">AUDIT DOMAIN</span>
                  <span className="text-xs font-mono text-green-700 font-semibold">COVERAGE</span>
                </div>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">EXPERIAN FILE REVIEW</span>
                    <span className="text-gray-900 font-semibold">100% COMPLETE</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">TRANSUNION RECORD AUDIT</span>
                    <span className="text-gray-900 font-semibold">LINE-BY-LINE</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">EQUIFAX BALANCE VERIFICATION</span>
                    <span className="text-gray-900 font-semibold">SYNCHRONIZED</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600">INQUIRY DEDUPLICATION</span>
                    <span className="text-green-700 font-semibold">OPTIMIZED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 02: PRIVATE CREDIT STRATEGY (Contrasting Warm Charcoal Panel) */}
          <div className="border border-stone-800 bg-[#161a18] text-white rounded-sm p-7 sm:p-10 relative overflow-hidden shadow-md">
            {/* Watermark 02 */}
            <div className="absolute right-4 -top-8 sm:-top-12 text-[10rem] sm:text-[14rem] font-mono font-extrabold text-white/5 select-none pointer-events-none leading-none z-0">
              02
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-2 py-0.5 bg-emerald-950/60 border border-emerald-800/60 rounded-xs">
                    SERVICE 02
                  </span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    DIRECT 1-ON-1 ADVISORY
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
                  PRIVATE CREDIT STRATEGY
                </h2>

                <p className="text-base text-gray-300 font-sans leading-relaxed">
                  A private session with Razila to understand your current position and determine the sequence of your next moves. Direct strategic consultation tailored to your financing timeline.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2.5">
                    INCLUDES:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-gray-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Personal strategy session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Profile analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Priority sequencing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span>Action roadmap</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => initiateRedirect(consultationResource)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-950 hover:bg-gray-100 font-sans text-xs tracking-wider font-semibold py-2.5 px-6 rounded-sm transition-all duration-150 cursor-pointer shadow-xs"
                  >
                    <span>BOOK A SESSION</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Right Side: Credential Box */}
              <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 rounded-sm space-y-3.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest font-semibold">
                  <ShieldCheck size={16} />
                  <span>CONFIDENTIAL &amp; DIRECT</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  No Intermediaries. Direct Founder Advisory.
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                  Every consultation is conducted directly with founder Razila. We examine your actual profile under full privacy without outsourced call centers or automated scripts.
                </p>
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>FORMAT: PRIVATE 1-ON-1</span>
                  <span className="text-white font-semibold">CALENDLY SCHEDULER</span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 03: BORROWING READINESS */}
          <div className="border border-gray-200 bg-white rounded-sm p-7 sm:p-10 relative overflow-hidden shadow-xs hover:border-gray-950 transition-all duration-300">
            {/* Watermark 03 */}
            <div className="absolute right-4 -top-8 sm:-top-12 text-[10rem] sm:text-[14rem] font-mono font-extrabold text-gray-100/70 select-none pointer-events-none leading-none z-0">
              03
            </div>

            <div className="relative z-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest px-2 py-0.5 bg-green-50 border border-green-200 rounded-xs">
                    SERVICE 03
                  </span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    PRIME FINANCING POSITIONING
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gray-950 tracking-tight">
                  BORROWING READINESS
                </h2>

                <p className="text-base text-gray-600 font-sans leading-relaxed">
                  Prepare your credit profile before major financing decisions—such as automotive purchases, mortgage pre-approvals, or premium revolving credit expansion.
                </p>
              </div>

              {/* Visual Timeline: ASSESS → PREPARE → POSITION → APPLY */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-950 block mb-4">
                  BORROWING TIMELINE PROGRESSION:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {timelineSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-sm relative space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-green-700">
                            {step.code}
                          </span>
                          {idx < timelineSteps.length - 1 && (
                            <ChevronRight size={14} className="text-gray-400 hidden lg:block" />
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold font-display text-gray-950">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-sans leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-200/80 text-[10px] font-mono text-gray-400 uppercase">
                        STEP 0{idx + 1} OF 04
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => initiateRedirect(consultationResource)}
                  className="btn-primary inline-flex items-center gap-2 py-2.5 px-6 text-xs tracking-wider cursor-pointer"
                >
                  <span>PREPARE FOR BORROWING</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (3 VISUAL STEPS) */}
      <section className="py-16 sm:py-20 border-b border-gray-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-2 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                EXECUTION ARCHITECTURE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
              HOW IT WORKS<span className="text-green-600">.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              Every client engagement follows a structured 3-phase progression to replace guesswork with concrete leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {howItWorks.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 p-6 sm:p-8 rounded-sm shadow-2xs hover:border-gray-950 transition-all duration-200 space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-bold text-green-700">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-600 px-2 py-0.5 rounded-xs font-medium">
                    PHASE {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-gray-950">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-green-800 uppercase tracking-wide">
                    {step.action}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE ADVISORY FOCUS */}
      <section className="py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl space-y-2 mb-10">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              CORE DOMAIN COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
              Structured Credit Mechanics. Zero Gimmicks.
            </h2>
            <p className="text-sm text-gray-600 font-sans">
              Our advisory spans the exact algorithmic and legal factors that govern consumer lending.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area, i) => {
              const IconComp = area.icon;
              return (
                <div
                  key={i}
                  className="border border-gray-200 bg-gray-50/50 p-5 rounded-sm space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-sm bg-white border border-gray-200 flex items-center justify-center text-green-700">
                    <IconComp size={17} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold font-display text-gray-950">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL BOTTOM CTA */}
      <section className="pt-16 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              START YOUR ADVISORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
            READY TO REVIEW YOUR POSITION?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans max-w-xl mx-auto">
            Schedule a confidential 1-on-1 strategy session directly with Razila to map out an honest, mathematically sound credit plan.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-xs tracking-wider cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight size={15} />
            </button>

            <Link
              href="/resources"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider text-gray-700 hover:text-gray-950"
            >
              <span>Explore Resource Library</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
