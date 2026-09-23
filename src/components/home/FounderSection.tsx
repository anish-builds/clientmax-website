'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';
import { fadeUpHeader, viewportOnce } from '@/lib/motion';

export function FounderSection() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const storySteps = [
    {
      marker: '2018 — NEPAL TO AMERICA',
      text: 'I came to America from Nepal in 2018 with a dream, limited English, and no clear idea of where that journey would take me.',
    },
    {
      marker: 'DOOR-TO-DOOR SALES',
      text: 'I started in door-to-door sales, thinking I was simply building a career. Instead, I discovered my greatest strength: connecting with people and earning their trust.',
    },
    {
      marker: 'THE PANDEMIC & CREDIT INDUSTRY',
      text: 'When the pandemic changed everything, I began looking for another way to use that gift to help people. That search led me to the credit industry and eventually to founding ClientsMax in 2021.',
    },
    {
      marker: '5,000+ CLIENTS GUIDED',
      text: 'Since then, I’ve had the privilege of working with 5,000+ clients, helping people understand their credit, build stronger financial foundations, and work toward opportunities they once thought were out of reach.',
    },
    {
      marker: 'THE CLIENTSMAX MISSION',
      text: 'As an immigrant who once had to learn the American financial system from the ground up, I know how overwhelming it can feel when you don’t know where to start. ClientsMax is my way of turning what I’ve learned into something that can help others move forward.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Founder Photography & Brand Lockup */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-4">
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full bg-slate-100 rounded-lg overflow-hidden border border-gray-200 card-hover shadow-sm">
                <Image
                  src="/razila_founder.jpg"
                  alt="Razila, Founder of CLIENTSMAX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />

                {/* Verified Founder Badge with Official Logo */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm border border-gray-200/90 rounded-md py-1 px-2.5 shadow-xs flex items-center gap-2 z-10">
                  <div className="relative w-5 h-4 rounded-xs overflow-hidden shrink-0">
                    <Image
                      src="/clientsmaxlogo.png"
                      alt="CLIENTSMAX Logo"
                      fill
                      className="object-cover"
                      sizes="20px"
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-900 tracking-wider">
                    FOUNDER
                  </span>
                </div>
              </div>

              {/* Official Firm Credential & Founder Card */}
              <div className="rounded-lg border border-gray-200 bg-white p-3.5 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-10 rounded-md overflow-hidden shrink-0 border border-gray-200 shadow-2xs">
                    <Image
                      src="/clientsmaxlogo.png"
                      alt="CLIENTSMAX Consulting Logo"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-bold font-display text-gray-950 block leading-tight truncate">
                      Razila
                    </span>
                    <span className="text-xs text-slate-500 font-sans block truncate">
                      Founder & Principal Credit Strategist
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <span className="text-[11px] font-mono font-bold text-green-700 tracking-wider block">
                    EST. 2021
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    1-ON-1 ADVISORY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Progression */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header with Shared Motion */}
            <motion.div
              variants={fadeUpHeader}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-6 h-5 rounded overflow-hidden shrink-0 border border-gray-200 shadow-2xs">
                  <Image
                    src="/clientsmaxlogo.png"
                    alt="CLIENTSMAX Logo"
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold">
                    FOUNDERS STORY // CLIENTSMAX CONSULTING
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
                From starting over to helping others move forward<span className="text-green-600">.</span>
              </h2>
            </motion.div>

            {/* Narrative Progression Steps */}
            <div className="space-y-8 relative pl-6 sm:pl-8 border-l border-gray-200">
              {storySteps.map((step, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  {/* Subtle Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full bg-white border-2 border-green-600" />

                  <span className="text-xs font-mono font-semibold text-green-700 tracking-[0.12em] uppercase block">
                    {step.marker}
                  </span>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Editorial Climax */}
            <div className="pt-2 border-t border-gray-100 space-y-3">
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950 tracking-tight italic">
                &ldquo;And I’m just getting started.&rdquo;
              </p>
              <span className="text-xs font-mono font-semibold text-green-800 tracking-[0.14em] uppercase block">
                — Razila, Founder of CLIENTSMAX
              </span>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="btn-primary"
              >
                <span>BOOK A CONSULTATION WITH RAZILA</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-green-200"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
