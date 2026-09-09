'use client';

import React from 'react';
import { CREDIT_FACTORS } from '@/content/education';
import { BookOpen } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Publication Header */}
        <div className="border-b border-[rgba(32,34,31,0.10)] pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#20221F]" />
                <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                  FINANCIAL DISCIPLINE // UNDERWRITING ANATOMY
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[0.98]">
                CREDIT IS MORE
                <br />
                THAN A NUMBER<span className="text-[#B9D65A]">.</span>
              </h2>
            </div>

            <div className="lg:max-w-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#20221F] uppercase tracking-wider font-semibold">
                <BookOpen size={14} className="text-[#4F5A48]" />
                <span>Deterministic Scoring Architecture</span>
              </div>
              <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                Modern credit scores are mathematically weighted risk evaluations. When you understand how algorithms parse your data, credit management stops being reactive and becomes deliberate.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Still Life Photo Inset */}
        <div className="mb-16 border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA] p-3 sm:p-4 shadow-sm">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] overflow-hidden bg-[#EAE5DA]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/editorial-detail.jpg"
              alt="Archival study, handwritten ledger, and financial notation"
              className="w-full h-full object-cover object-center grayscale-[8%] contrast-[1.02]"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between pt-3 px-2 text-[10px] font-mono text-[#4F5A48] uppercase tracking-wider">
            <span>PLATE NO. 02 // ARCHITECTURAL FINANCIAL ANALYSIS</span>
            <span>FOUNDED BY RAZILA • CLIENTSMAX STRATEGIC ADVISORY</span>
          </div>
        </div>

        {/* Magazine-Style Layout for Credit Factors */}
        <div className="divide-y divide-[rgba(32,34,31,0.10)] border-b border-[rgba(32,34,31,0.10)]">
          {CREDIT_FACTORS.map((factor) => (
            <article
              key={factor.name}
              className="py-14 sm:py-16 group transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Column 1: Monumental Factor Percentage */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors leading-none tracking-tighter">
                    {factor.percentage}
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#4F5A48] font-semibold block">
                      {factor.weightLabel}
                    </span>
                    <h3 className="text-2xl font-editorial-serif text-[#20221F] mt-1">
                      {factor.name}
                    </h3>
                  </div>
                </div>

                {/* Column 2: Editorial Explanation & Strategic Rule */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#4F5A48] block font-semibold">
                    HOW THE BUREAU ALGORITHM EVALUATES THIS:
                  </span>
                  <p className="text-xs sm:text-sm text-[#4F5A48] font-light leading-relaxed">
                    {factor.editorialSummary}
                  </p>

                  <div className="pt-3 border-t border-[rgba(32,34,31,0.10)] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#20221F] block font-semibold">
                      OPERATIONAL DIRECTIVE:
                    </span>
                    <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                      {factor.strategicTakeaway}
                    </p>
                  </div>
                </div>

                {/* Column 3: Industry Misconception vs Reality */}
                <div className="lg:col-span-4 bg-[#EAE5DA]/50 border border-[rgba(32,34,31,0.12)] p-6 space-y-2 shadow-sm">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#20221F] block font-semibold">
                    MYTH VS. MATHEMATICAL FACT:
                  </span>
                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed italic">
                    {factor.misconception}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Educational Disclosure */}
        <div className="mt-16 p-6 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#20221F] uppercase tracking-widest font-semibold">
              ACADEMIC DISCLOSURE
            </span>
            <p className="text-xs text-[#4F5A48] font-light leading-relaxed max-w-3xl">
              Scoring algorithms vary across model versions (FICO 8, FICO 9, FICO Auto, VantageScore 3.0/4.0). CLIENTSMAX teaches fundamental credit mathematics rather than short-term algorithmic tricks.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#4F5A48] shrink-0 border border-[rgba(32,34,31,0.18)] bg-[#F5F2EA] px-3 py-1 uppercase">
            VERIFIED STANDARDS
          </span>
        </div>
      </div>
    </section>
  );
}
