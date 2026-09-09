'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function FinalCTA() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  return (
    <section className="relative py-36 border-b border-[rgba(32,34,31,0.12)] bg-[#EAE5DA] overflow-hidden">
      {/* Background Subtle Monogram Accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-12 text-[rgba(32,34,31,0.04)] font-editorial-serif text-[28vw] leading-none pointer-events-none select-none -z-10"
      >
        C
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#20221F]" />
            <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
              NEXT STEPS // IMMEDIATE ACTION
            </span>
          </div>

          {/* Enormous Typography */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal font-editorial-serif text-[#20221F] tracking-[-0.035em] leading-[0.93]">
            READY FOR YOUR
            <br />
            <span className="italic text-[#4F5A48]">NEXT MOVE?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed">
            Stop guessing your standing. Step into intentional credit architecture with CLIENTSMAX.
          </p>

          {/* Dual Action Buttons with Directional Interactions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
            <Link
              href="/start"
              data-cursor="go"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#20221F] text-[#F5F2EA] font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[#383d35] transition-all border border-[#20221F] rounded-none shadow-sm"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight
                size={14}
                className="text-[#B9D65A] transition-transform group-hover:translate-x-1"
              />
            </Link>

            <button
              onClick={() => initiateRedirect(consultationResource)}
              data-cursor="view"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[rgba(32,34,31,0.25)] text-[#20221F] font-mono text-xs tracking-widest uppercase hover:border-[#20221F] hover:bg-[#F5F2EA] transition-all bg-transparent rounded-none"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4F5A48]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
