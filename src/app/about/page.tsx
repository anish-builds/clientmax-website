'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { fadeUpHeader } from '@/lib/motion';

export default function AboutPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const principles = [
    {
      num: '01',
      title: 'CLARITY',
      desc: 'Understand what your reports actually say across all three bureaus before taking reactive measures.',
    },
    {
      num: '02',
      title: 'STRATEGY',
      desc: 'Sequence financial decisions, balance repayments, and statement cutoffs instead of making blind moves.',
    },
    {
      num: '03',
      title: 'CONFIDENCE',
      desc: 'Move forward into auto, mortgage, or capital borrowing knowing why each step matters and how underwriters think.',
    },
  ];

  const approachStages = [
    {
      step: '01',
      title: 'UNDERSTAND',
      desc: 'Comprehensive line-by-line review of your 3-bureau credit profile to identify scoring bottlenecks and reporting discrepancies.',
    },
    {
      step: '02',
      title: 'PRIORITIZE',
      desc: 'Determine the exact chronological order of financial moves—targeting statement closing dates and high-impact trade lines.',
    },
    {
      step: '03',
      title: 'BUILD',
      desc: 'Establish healthy credit depth and positive compounding payment records using verified, zero-debt-trap structures.',
    },
    {
      step: '04',
      title: 'LEVERAGE',
      desc: 'Position your profile for prime lending rates, pre-approved offers, and long-term financial independence.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* 1. FIRST VIEW: RICH, COMPACT EDITORIAL FOUNDER PROFILE + DETAILS */}
      <section className="border-b border-gray-100 pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUpHeader}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* LEFT: Portrait of Razila in Tailored Editorial Frame */}
            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-gray-50 p-2 sm:p-2.5 rounded-sm shadow-xs group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/razila_founder.jpg"
                    alt="Razila — Founder & Principal Credit Strategist at CLIENTSMAX"
                    fill
                    priority
                    className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-gray-950/85 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-medium">
                    FOUNDER PROFILE // 2021
                  </div>
                </div>

                <div className="pt-2.5 px-1.5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>RAZILA • STRATEGIST</span>
                  <span className="text-gray-950 font-medium">5,000+ GUIDED</span>
                </div>
              </div>
            </div>

            {/* RIGHT: High-Impact Heading & Immediate Strategy Details */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                    ABOUT CLIENTSMAX // THE FOUNDATION
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
                  We Do Not Sell Gimmicks. <br />
                  <span className="text-green-700">We Teach You To Command Your Credit.</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  CLIENTSMAX was founded by Razila in 2021 to replace deceptive guarantees with genuine education, personal accountability, and strategic financial mastery.
                </p>
              </div>

              {/* Large Editorial Statement Quote */}
              <div className="border-l-2 border-green-700 pl-4 py-1 bg-gray-50/60 rounded-r-xs">
                <blockquote className="text-lg sm:text-xl font-bold font-display text-gray-950 leading-snug">
                  &ldquo;CREDIT IS NOT AN EMERGENCY FIX. <br />
                  IT IS A LONG-TERM FINANCIAL SKILL.&rdquo;
                </blockquote>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wide block mt-1">
                  — Razila, Founder &amp; Credit Strategist
                </span>
              </div>

              {/* Immediate Metadata & Details Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-gray-50 border border-gray-200/80 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">ESTABLISHED</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-gray-950">2021</span>
                </div>
                <div className="bg-gray-50 border border-gray-200/80 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">CLIENTS GUIDED</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-green-700">5,000+</span>
                </div>
                <div className="bg-gray-50 border border-gray-200/80 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">FORMAT</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-gray-950">1-ON-1</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => initiateRedirect(consultationResource)}
                  className="btn-primary inline-flex items-center gap-2 py-2.5 px-6 text-xs tracking-wider cursor-pointer"
                >
                  <span>BOOK YOUR CONSULTATION</span>
                  <ArrowRight size={14} />
                </button>

                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center gap-2 py-2.5 px-5 text-xs tracking-wider text-gray-700 hover:text-gray-950"
                >
                  <span>Our Services</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THREE VISUAL PRINCIPLES */}
      <section className="py-14 sm:py-18 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl space-y-1.5 mb-10 sm:mb-12">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
              Three Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((p) => (
              <div
                key={p.num}
                className="border border-gray-200 bg-white p-7 rounded-sm hover:border-gray-950 transition-all duration-200 shadow-2xs space-y-3.5"
              >
                <span className="text-3xl sm:text-4xl font-mono font-bold text-green-700 block">
                  {p.num}
                </span>

                <h3 className="text-xl font-bold font-display text-gray-950 tracking-tight">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CLIENTSMAX (SPLIT COMPOSITION) */}
      <section className="py-16 sm:py-20 border-b border-gray-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* LEFT: Large Editorial Statement */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold block">
                WHY CLIENTSMAX
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
                NO EMPTY PROMISES. <br />
                NO AUTOMATED GUESSWORK.
              </h2>
              <div className="w-14 h-1 bg-green-700 mt-2" />
            </div>

            {/* RIGHT: Short Philosophy Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              <p>
                Most credit services profit by keeping clients dependent on recurring monthly retainers and automated, computer-generated dispute letters.
              </p>
              <p>
                CLIENTSMAX was built on the contrarian belief that permanent independence is the only ethical outcome. We equip you to read your 3-bureau file, control statement cutoff dates, and sequence trade-line decisions so you command your credit independently.
              </p>
              <p className="text-gray-950 font-medium text-sm font-sans">
                Every consultation is conducted directly with founder Razila under complete confidentiality and mutual trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RAZILA'S APPROACH (VISUAL PROGRESSION TIMELINE) */}
      <section className="py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl space-y-1.5 mb-10 sm:mb-12">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              STRATEGIC METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
              Razila&apos;s Approach
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-sans">
              A 4-stage visual progression from initial diagnostic to prime borrowing power.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approachStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="border border-gray-200 bg-white p-5 rounded-sm shadow-2xs space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-green-700">
                      {stage.step}
                    </span>
                    {idx < approachStages.length - 1 && (
                      <ChevronRight size={14} className="text-gray-400 hidden lg:block" />
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-gray-950 tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 text-[10px] font-mono text-gray-400 uppercase">
                  PHASE {stage.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRONG FOUNDER CTA */}
      <section className="pt-16 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              FOUNDER 1-ON-1
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
            READY TO START WITH CLARITY?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans max-w-xl mx-auto">
            Book a private consultation with Razila to examine your current profile and sequence your next financial moves.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-xs tracking-wider cursor-pointer"
            >
              <span>BOOK YOUR CONSULTATION</span>
              <ArrowRight size={15} />
            </button>

            <Link
              href="/services"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider text-gray-700 hover:text-gray-950"
            >
              <span>Explore Strategic Advisory</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
