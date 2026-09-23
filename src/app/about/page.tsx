'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Scale, Compass, Award, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export default function AboutPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const principles = [
    {
      number: '01',
      title: 'Structured Credit Mechanics',
      description:
        'Credit scores are not personal judgments—they are structured risk evaluations. We teach clients how factors like payment history and utilization are calculated so every financial action is intentional rather than reactive.',
      icon: Scale,
    },
    {
      number: '02',
      title: 'Zero Empty Promises',
      description:
        'We strictly adhere to ethical financial education. We will never promise overnight score jumps or the illegal erasure of accurate negative reporting. We build genuine, lasting credit strength.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Strategic Sequencing',
      description:
        'Order of operations matters. Paying balances a few days prior to statement closing dates produces fundamentally better reported utilization than paying on the due date. Timing is quiet leverage.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Lasting Financial Literacy',
      description:
        'Our goal is permanent client independence. We equip you to read your 3-bureau report, understand lender criteria, and navigate prime auto, card, and mortgage borrowing with total confidence.',
      icon: Award,
    },
  ];

  const comparisonRows = [
    {
      dimension: 'Core Objective',
      traditional: 'Keep you on an ongoing monthly subscription filing repetitive disputes.',
      clientsmax: 'Educate you to understand your reports, control statement cycles, and manage credit independently.',
    },
    {
      dimension: 'Reporting Focus',
      traditional: 'Disputing items indiscriminately without regard to scoring impact.',
      clientsmax: 'Comprehensive strategy: optimizing utilization ratios, establishing credit depth, and correcting reporting errors.',
    },
    {
      dimension: 'Transparency',
      traditional: 'Opaque promises and generic computer-generated dispute templates.',
      clientsmax: 'Complete, honest breakdown of scoring models, lender expectations, and realistic timelines.',
    },
    {
      dimension: 'Client Relationship',
      traditional: 'Passive dependency with customer service call centers.',
      clientsmax: 'Direct 1-on-1 strategy sessions with founder Razila and customized action plans.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                ABOUT CLIENTSMAX // THE FOUNDATION
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              We Do Not Sell Gimmicks. <br />
              <span className="text-green-700">We Teach You To Command Your Credit.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              CLIENTSMAX was founded by Razila in 2021 to replace deceptive guarantees with genuine education, personal accountability, and strategic financial mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Founder In-Depth Narrative */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Founder Photo Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-gray-200 bg-gray-50 rounded-sm overflow-hidden shadow-md">
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                  <span className="text-[10px] font-mono tracking-widest text-green-700 font-bold uppercase">
                    FOUNDER PROFILE
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">
                    RAZILA
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/razila-portrait.jpg"
                    alt="Razila, Founder of CLIENTSMAX"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                <div className="p-5 bg-white space-y-2 border-t border-gray-100">
                  <h3 className="text-xl font-bold font-display text-gray-900">
                    Razila
                  </h3>
                  <p className="text-xs font-mono text-green-700 uppercase font-semibold">
                    FOUNDER &amp; PRINCIPAL CREDIT STRATEGIST
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    Helping clients understand, build, and use credit with intention. Guided 5,000+ clients since 2021.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-green-50 border border-green-200 rounded-sm space-y-2">
                <span className="text-xs font-mono text-green-800 uppercase tracking-wider font-bold block">
                  1-ON-1 ADVISORY COMMITMENT
                </span>
                <p className="text-xs text-green-950 leading-relaxed font-normal">
                  Every 1-on-1 strategy session is conducted directly with Razila. No offshore call centers, no automated scripts, and strict confidentiality.
                </p>
              </div>
            </div>

            {/* Right Column: In-Depth Story */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold block">
                THE GENESIS // FOUNDER&apos;S STORY
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950 tracking-tight leading-tight">
                From starting over to helping others move forward.
              </h2>

              <p>
                I came to America from Nepal in 2018 with a dream, limited English, and no clear idea of where that journey would take me.
              </p>

              <p>
                I started in door-to-door sales, thinking I was simply building a career. Instead, I discovered my greatest strength: connecting with people and earning their trust.
              </p>

              <p>
                When the pandemic changed everything, I began looking for another way to use that gift to help people. That search led me to the credit industry and eventually to founding ClientsMax in 2021.
              </p>

              <p>
                Since then, I’ve had the privilege of working with 5,000+ clients, helping people understand their credit, build stronger financial foundations, and work toward opportunities they once thought were out of reach.
              </p>

              <p>
                As an immigrant who once had to learn the American financial system from the ground up, I know how overwhelming it can feel when you don’t know where to start.
              </p>

              <p className="text-gray-900 font-medium">
                ClientsMax is my way of turning what I’ve learned into something that can help others move forward.
              </p>

              <div className="p-5 bg-gray-50 border-l-4 border-green-700 rounded-r-sm mt-4">
                <p className="text-xl sm:text-2xl font-bold font-display text-gray-950">
                  &ldquo;And I&apos;m just getting started.&rdquo;
                </p>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mt-1">
                  — Razila, Founder of CLIENTSMAX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl space-y-3 mb-16">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
              ETHICAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
              The Four Principles of CLIENTSMAX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.number}
                  className="border border-gray-200 bg-white p-8 rounded-sm shadow-xs hover:border-green-600 transition-colors space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-green-700 font-bold">
                      {p.number}
                    </span>
                    <div className="p-2 rounded-full bg-green-50 text-green-700">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-gray-900">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparative Distinction Table */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl space-y-3 mb-16">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
              INDUSTRY COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
              A Contrarian, Educational Approach
            </h2>
          </div>

          <div className="border border-gray-200 rounded-sm overflow-hidden shadow-xs divide-y divide-gray-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-50 p-6 text-xs font-mono tracking-wider uppercase font-bold text-gray-700">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4 text-gray-500">Conventional Credit Repair</div>
              <div className="md:col-span-5 text-green-700">The CLIENTSMAX Way</div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 gap-4 items-start hover:bg-gray-50/50 transition-colors"
              >
                <div className="md:col-span-3 text-sm font-display font-bold text-gray-900">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                  {row.traditional}
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-gray-900 font-medium leading-relaxed border-l-2 md:border-l-0 border-green-600 pl-3 md:pl-0">
                  {row.clientsmax}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Gateway */}
      <section className="pt-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950">
            Begin with Authentic Clarity
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Choose whether to explore our 4-stage credit progression or schedule a 1-on-1 consultation directly with Razila.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-xs"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight size={14} className="text-green-200" />
            </button>
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium text-xs uppercase tracking-wider rounded-sm transition-colors"
            >
              <span>EXPLORE THE JOURNEY</span>
              <ArrowRight size={14} className="text-gray-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
