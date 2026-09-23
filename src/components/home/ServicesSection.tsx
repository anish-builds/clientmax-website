'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with Shared Motion */}
        <motion.div
          variants={fadeUpHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-gray-200 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold">
                SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
              Personalized credit advisory<span className="text-green-600">.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Every consultation is grounded in your real financial situation. We focus on education, strategy, and durable financial habits.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-green-700 hover:text-green-800 tracking-[0.12em] uppercase"
            >
              <span>View full service breakdown</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid Layout with Standardized Card-Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pt-12">
          {/* Tile 1: Large Hero Feature Tile (7 cols) */}
          <Link
            href="/services#education"
            className="group lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-base font-mono font-bold text-green-700">01</span>
                <span className="text-xs font-mono tracking-[0.12em] text-green-800 bg-green-50 px-2.5 py-1 rounded-xs uppercase font-semibold">
                  FOUNDATION • CORE ADVISORY
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                  Credit Education & Bureau Architecture
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                  Understand the precise mechanics of Experian, Equifax, and TransUnion. Learn what underwriters actually examine on your 3-bureau report before you submit applications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0" />
                  <span>3-Bureau scoring factors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0" />
                  <span>Underwriter risk assessment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0" />
                  <span>Reporting schedule mastery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0" />
                  <span>Myth vs. factual rules</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-green-700 transition-colors border-t border-gray-100 mt-6 tracking-wider">
              <span>EXPLORE METHODOLOGY</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>

          {/* Tile 2: Supporting Tile (5 cols) */}
          <Link
            href="/services#guidance"
            className="group lg:col-span-5 bg-white p-8 sm:p-9 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-base font-mono font-bold text-green-700">02</span>
                <span className="text-xs font-mono tracking-[0.12em] text-slate-500 uppercase font-semibold">
                  AUDIT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                Credit Repair Guidance
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Identify verifiable reporting inaccuracies, outdated remarks, and balance miscalculations so your report accurately reflects your true standing under federal reporting standards.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-green-700 transition-colors border-t border-gray-100 mt-6 tracking-wider">
              <span>VIEW AUDIT APPROACH</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>

          {/* Tile 3: Supporting Tile (4 cols) */}
          <Link
            href="/services#strategy"
            className="group lg:col-span-4 bg-white p-7 sm:p-8 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-base font-mono font-bold text-green-700">03</span>
                <span className="text-xs font-mono tracking-[0.12em] text-slate-500 uppercase font-semibold">
                  STRATEGY
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                Credit Strategy & Pre-Approval
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Sequence your credit applications intentionally. Utilize soft-inquiry pre-approvals to access prime terms without unnecessary hard inquiries.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-green-700 transition-colors border-t border-gray-100 mt-6 tracking-wider">
              <span>LEARN SEQUENCING</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>

          {/* Tile 4: Supporting Tile (4 cols) */}
          <Link
            href="/services#foundation"
            className="group lg:col-span-4 bg-white p-7 sm:p-8 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-base font-mono font-bold text-green-700">04</span>
                <span className="text-xs font-mono tracking-[0.12em] text-slate-500 uppercase font-semibold">
                  TIMING
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                Financial Foundation & Timing
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Master the difference between payment due dates and statement closing dates. Optimize reported utilization across all active cards.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-green-700 transition-colors border-t border-gray-100 mt-6 tracking-wider">
              <span>EXPLORE TIMING RULES</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>

          {/* Tile 5: Supporting Tile (4 cols) */}
          <Link
            href="/services#building"
            className="group lg:col-span-4 bg-white p-7 sm:p-8 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-base font-mono font-bold text-green-700">05</span>
                <span className="text-xs font-mono tracking-[0.12em] text-slate-500 uppercase font-semibold">
                  GROWTH
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                Positive Credit Building
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Establish accredited, positive payment history lines reported monthly to the bureaus without paying predatory interest rates.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-green-700 transition-colors border-t border-gray-100 mt-6 tracking-wider">
              <span>VIEW BUILDING OPTIONS</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>

          {/* Tile 6: Horizontal Anchor Tile (12 cols) */}
          <Link
            href="/services#optimization"
            className="group lg:col-span-12 bg-white p-8 sm:p-9 rounded-sm border border-gray-200 card-hover shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono font-bold text-green-700">06</span>
                <span className="text-xs font-mono tracking-[0.12em] text-slate-500 uppercase font-semibold">
                  LEVERAGE • FINANCING PREPARATION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950 group-hover:text-green-700 transition-colors leading-snug">
                Credit Optimization for Auto & Mortgage Qualification
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Position your credit profile for prime auto financing, mortgage pre-approval, and higher credit limits with direct founder guidance.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 group-hover:text-green-700 transition-colors shrink-0 tracking-wider">
              <span>EXPLORE OPTIMIZATION</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 text-green-600" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
