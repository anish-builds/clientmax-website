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
    <section className="relative py-28 sm:py-36 bg-gray-950 text-white overflow-hidden border-b border-gray-900">
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-green-950/30 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-mono tracking-widest text-green-400 uppercase font-semibold">
              GET STARTED TODAY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.05]">
            Ready to take control of your credit?
          </h2>

          <p className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed">
            Move forward with clear, personalized credit strategy. Book a 1-on-1 consultation directly with Razila or find your optimal entry point.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-green-700 hover:bg-green-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm shadow-md cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-green-200"
              />
            </button>

            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gray-800 text-gray-200 hover:text-white hover:border-gray-600 hover:bg-gray-900/60 font-medium text-xs tracking-wider uppercase transition-colors rounded-sm"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight size={14} className="text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
