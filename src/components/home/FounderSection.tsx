'use client';

import React from 'react';
import { SITE_CONFIG } from '@/content/site';
import { getResource } from '@/content/resources';
import { useRedirect } from '@/context/RedirectContext';
import { ArrowUpRight } from 'lucide-react';

export function FounderSection() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  return (
    <section className="relative py-32 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Founder Photography Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA] p-4 sm:p-5 shadow-sm">
              {/* Top Accent */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-[rgba(32,34,31,0.10)] mb-3">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase">
                  FOUNDER PROFILE
                </span>
                <span className="text-[10px] font-mono text-[#20221F] font-semibold">
                  01 / ARCHITECT
                </span>
              </div>

              {/* Razila Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE5DA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/razila-portrait.jpg"
                  alt="Razila, Founder and Principal Credit Strategist"
                  className="w-full h-full object-cover object-center grayscale-[6%] contrast-[1.03]"
                />
              </div>

              {/* Bottom Details */}
              <div className="pt-4 px-2 flex items-center justify-between text-[11px] font-mono text-[#4F5A48]">
                <span>CLIENTSMAX FOUNDATION</span>
                <span className="text-[#20221F] font-semibold">STRATEGIC ADVISORY</span>
              </div>
            </div>

            {/* Offset Negative Space Frame */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 w-full h-full border border-[rgba(32,34,31,0.12)] -z-10 pointer-events-none"
            />
          </div>

          {/* Right Column: The Philosophy & Human Voice */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#20221F]" />
                <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                  LEADERSHIP // VISION
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
                MEET RAZILA<span className="text-[#B9D65A]">.</span>
              </h2>

              <p className="text-xs font-mono text-[#4F5A48] tracking-widest uppercase font-semibold">
                ARCHITECT OF STRATEGIC CREDIT LITERACY
              </p>
            </div>

            {/* Founder Quote */}
            <blockquote className="text-xl sm:text-2xl font-editorial-serif italic text-[#20221F] leading-relaxed border-l-2 border-[#20221F] pl-6 py-2 bg-[#EAE5DA]/40 shadow-sm">
              &ldquo;{SITE_CONFIG.founder.quote}&rdquo;
            </blockquote>

            {/* Concise Story */}
            <div className="space-y-4 text-sm text-[#4F5A48] font-light leading-relaxed">
              <p>
                Razila founded CLIENTSMAX to dismantle the predatory and opaque practices common in the credit repair industry. Where conventional agencies push automated generic dispute letters and make empty guarantees, Razila built a strategic advisory model grounded in mathematics, bureau underwriting mechanics, and financial sovereignty.
              </p>
              <p>
                Under her guidance, clients don&apos;t just see their credit reports cleaned—they learn how to read institutional risk, avoid dealership traps, and leverage prime lending to build lasting family wealth.
              </p>
            </div>

            {/* Action & Direct Booking */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                data-cursor="view"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
              >
                <span>BOOK A CONSULTATION →</span>
                <ArrowUpRight size={14} className="text-[#B9D65A]" />
              </button>

              <span className="text-xs font-mono text-[#4F5A48]">
                Direct advisory with Razila • Strict confidentiality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
