'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

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
    <section className="py-24 sm:py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Founder Photography */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-4">
              <div className="relative aspect-[4/5] w-full bg-gray-100 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/razila-story.jpg"
                  alt="Razila, Founder of CLIENTSMAX"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Minimal Editorial Caption */}
              <div className="flex items-baseline justify-between pt-1 px-1">
                <div>
                  <span className="text-base font-bold font-display text-gray-900 block">
                    Razila
                  </span>
                  <span className="text-xs text-gray-500 font-normal">
                    Founder & Principal Credit Strategist
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-green-700">
                  EST. 2021
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Progression */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  FOUNDERS STORY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.12]">
                From starting over to helping others move forward.
              </h2>
            </div>

            {/* Narrative Progression Steps */}
            <div className="space-y-8 relative pl-6 sm:pl-8 border-l border-gray-200">
              {storySteps.map((step, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  {/* Subtle Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full bg-white border-2 border-green-600" />

                  <span className="text-xs font-mono font-semibold text-green-700 tracking-wider uppercase block">
                    {step.marker}
                  </span>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
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
              <span className="text-xs font-mono font-semibold text-green-800 tracking-wider uppercase block">
                — Razila, Founder of CLIENTSMAX
              </span>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm shadow-xs cursor-pointer"
              >
                <span>BOOK A CONSULTATION WITH RAZILA</span>
                <ArrowUpRight
                  size={15}
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
