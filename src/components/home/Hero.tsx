'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/content/site';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function Hero() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 border-b border-[rgba(32,34,31,0.12)] overflow-hidden bg-[#F5F2EA]">
      {/* Background Architectural Monograph Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-6 select-none pointer-events-none text-[rgba(32,34,31,0.03)] font-editorial-serif text-[22vw] leading-none -z-10 tracking-tighter"
      >
        MMXXVI
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Monumental Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow with Sharp Micro-Indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[11px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                {SITE_CONFIG.eyebrow}
              </span>
            </motion.div>

            {/* Accent Line Travels Horizontally */}
            <motion.div
              variants={lineVariants}
              style={{ originX: 0 }}
              className="h-[1px] w-28 bg-[#20221F]"
            />

            {/* Monumental Headline */}
            <div className="space-y-1">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-normal font-editorial-serif text-[#20221F] tracking-[-0.035em] leading-[0.92]"
              >
                YOUR CREDIT
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-normal font-editorial-serif text-[#20221F] tracking-[-0.035em] leading-[0.92] flex items-baseline gap-3"
              >
                <span>IS A TOOL</span>
                <span className="text-[#B9D65A] font-editorial-serif italic">.</span>
              </motion.h1>
            </div>

            {/* Authoritative Editorial Prose */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#4F5A48] max-w-xl font-light leading-relaxed pt-2"
            >
              Credit is a structured system, not an emotional barrier. Founded by Razila, CLIENTSMAX gives you the strategic clarity to understand your 3-bureau report, sequence your financial moves, and command prime borrowing terms.
            </motion.p>

            {/* Dual CTAs with Sharp Rectangular Geometry */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => initiateRedirect(consultationResource)}
                data-cursor="view"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#20221F] text-[#F5F2EA] font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[#383d35] transition-all border border-[#20221F] rounded-none shadow-sm"
              >
                <span>BOOK A ONE-ON-ONE CONSULTATION</span>
                <ArrowUpRight
                  size={14}
                  className="text-[#B9D65A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <Link
                href="/start"
                data-cursor="go"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[rgba(32,34,31,0.25)] text-[#20221F] font-mono text-xs tracking-widest uppercase hover:border-[#20221F] hover:bg-[#EAE5DA] transition-all bg-transparent rounded-none"
              >
                <span>START YOUR JOURNEY</span>
                <ArrowRight
                  size={14}
                  className="text-[#4F5A48] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Trust Indicator: Editorial Statement Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[rgba(32,34,31,0.12)] flex flex-wrap items-center gap-6 text-[10px] font-mono tracking-wider text-[#4F5A48] uppercase"
            >
              <span className="text-[#20221F] font-semibold">STRUCTURED CREDIT STRATEGY</span>
              <span className="h-1 w-1 bg-[#B9D65A]" />
              <span>ZERO EMPTY PROMISES</span>
              <span className="h-1 w-1 bg-[rgba(32,34,31,0.2)]" />
              <span>DIRECT ADVISORY WITH RAZILA</span>
            </motion.div>
          </div>

          {/* Right Column: Founder Editorial Cover Presentation */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            {/* The Editorial Image Frame with Subtle Architectural Linework */}
            <div className="relative border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA] p-3 sm:p-4 shadow-md">
              {/* Top Archival Tag */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-[rgba(32,34,31,0.10)] mb-3">
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase">
                  FOUNDER PROFILE
                </span>
                <span className="text-[9px] font-mono text-[#20221F] font-semibold">
                  RAZILA
                </span>
              </div>

              {/* Razila Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE5DA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/razila-portrait.jpg"
                  alt="Razila, Founder and Principal Credit Strategist of CLIENTSMAX"
                  className="w-full h-full object-cover object-center grayscale-[6%] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Founder Editorial Quote / Overlay Caption */}
              <div className="pt-4 px-2 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-editorial-serif text-[#20221F]">
                    Razila
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#4F5A48]">
                    Credit Strategist & Founder
                  </span>
                </div>
                <p className="text-xs text-[#4F5A48] font-light italic leading-relaxed border-l border-[#B9D65A] pl-3 py-0.5">
                  &ldquo;Credit is not an emergency fix. It is the foundation for long-term financial strength.&rdquo;
                </p>
              </div>
            </div>

            {/* Asymmetric Offset Linework Accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-full h-full border border-[rgba(32,34,31,0.12)] -z-10 pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
