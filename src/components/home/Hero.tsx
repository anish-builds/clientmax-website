'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function Hero() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  return (
    <section className="relative pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Asymmetric Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Small Kicker Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200/80 rounded-full">
              <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-green-800 font-semibold uppercase">
                CREDIT EDUCATION + STRATEGY
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
                Your Credit Is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-900 to-green-700">
                  More Than A Number
                </span>
                <span className="text-green-600">.</span>
              </h1>
            </div>

            {/* Concise Human Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
              Credit is a structured system, not a personal barrier. Founded by Razila, CLIENTSMAX helps you understand, build, and strategically use your credit with genuine confidence—free of automated gimmicks and false promises.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm shadow-xs cursor-pointer"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-green-200"
                />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-800 hover:text-green-800 hover:border-green-600 hover:bg-green-50/50 font-medium text-xs tracking-wider uppercase transition-colors rounded-sm"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={14} className="text-gray-500" />
              </Link>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-5 border-t border-gray-100 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-gray-600">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                <span>Founded in 2021</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                <span>5,000+ Clients Guided</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                <span>Direct 1-on-1 Founder Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Founder Imagery Presentation */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-[380px]">
              {/* Outer Clean Border Frame */}
              <div className="relative rounded-sm overflow-hidden bg-gray-50 border border-gray-200 shadow-md">
                {/* Razila Portrait with controlled aspect ratio */}
                <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/razila-portrait.jpg"
                    alt="Razila, Founder of CLIENTSMAX"
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>

                {/* Founder Caption Card */}
                <div className="p-4 bg-white border-t border-gray-100 space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-bold font-display text-gray-900">
                      Razila
                    </span>
                    <span className="text-xs font-mono text-green-700 font-semibold">
                      CLIENTSMAX
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed border-l-2 border-green-600 pl-2.5 italic">
                    &ldquo;Credit is not an emergency fix. It is the foundation for long-term financial strength.&rdquo;
                  </p>
                </div>
              </div>

              {/* Offset Accent Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-green-700 text-white p-3 sm:p-3.5 rounded-sm shadow-md hidden sm:block">
                <div className="text-xl font-bold font-display leading-none">
                  5,000+
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-green-100 mt-1">
                  Clients Helped
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
