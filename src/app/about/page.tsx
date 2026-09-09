import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Scale, Compass, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'The philosophy, founder narrative, and ethical standards behind CLIENTSMAX. Founded by Razila.',
};

export default function AboutPage() {
  const principles = [
    {
      number: '01',
      title: 'Structured Credit Rules',
      description: 'Credit scores are not personal judgments; they are structured evaluations of risk. We teach clients how major factors like payment history and utilization are weighed so decisions are deliberate rather than emotional.',
      icon: Scale,
    },
    {
      number: '02',
      title: 'Zero Empty Promises',
      description: 'We refuse to participate in deceptive marketing tactics. We will never promise specific score point increases, overnight miracles, or the illegal erasure of accurate negative reporting.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Strategic Sequencing',
      description: 'Order of operations matters. Paying a balance a few days before your statement closing date yields a fundamentally different reported outcome than paying on the due date. Timing is quiet leverage.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Lasting Financial Independence',
      description: 'Our ultimate success metric is that you develop permanent credit literacy. We equip you to guide your own decisions and family finances through prime lending opportunities with total confidence.',
      icon: Award,
    },
  ];

  const comparisonRows = [
    {
      dimension: 'Core Objective',
      traditional: 'Keep you on a recurring monthly retainer filing generic disputes.',
      clientsmax: 'Educate you to understand your bureaus, control statement cycles, and manage credit independently.',
    },
    {
      dimension: 'Reporting Focus',
      traditional: 'Focussed solely on disputing negative items regardless of accuracy.',
      clientsmax: 'Comprehensive view: optimizing utilization, building depth, and correcting reporting inaccuracies.',
    },
    {
      dimension: 'Transparency',
      traditional: 'Vague promises of "750+ overnight" and generic template letters.',
      clientsmax: 'Complete, honest breakdown of scoring models, lender expectations, and realistic timelines.',
    },
    {
      dimension: 'Client Relationship',
      traditional: 'Passive dependency on a third-party portal.',
      clientsmax: 'Active education, direct strategy with Razila, and lasting financial confidence.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F5F2EA]">
      {/* Hero Header */}
      <section className="border-b border-[rgba(32,34,31,0.10)] pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                ABOUT CLIENTSMAX // THE PHILOSOPHY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              WE DO NOT REPAIR CREDIT.
              <br />
              <span className="italic text-[#4F5A48]">WE TEACH YOU HOW TO COMMAND IT.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed pt-2">
              CLIENTSMAX was founded by Razila to counter the culture of deceptive guarantees and predatory retainers. We position credit as what it truly is: an institutional instrument of wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Founder In-Depth Narrative */}
      <section className="py-24 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              {/* Founder Portrait Frame */}
              <div className="border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA] p-4 sm:p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 px-1 border-b border-[rgba(32,34,31,0.10)]">
                  <span className="text-[10px] font-mono tracking-widest text-[#4F5A48] uppercase">
                    FOUNDER PROFILE
                  </span>
                  <span className="text-[10px] font-mono text-[#20221F] font-semibold">
                    01 / ARCHITECT
                  </span>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE5DA]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/razila-portrait.jpg"
                    alt="Razila, Founder & Principal Advisor of CLIENTSMAX"
                    className="w-full h-full object-cover object-center grayscale-[6%] contrast-[1.03]"
                  />
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-2xl font-editorial-serif text-[#20221F]">
                    Razila
                  </h3>
                  <p className="text-xs font-mono text-[#4F5A48] uppercase tracking-wider font-semibold">
                    CREDIT STRATEGIST & FOUNDER
                  </p>
                  <p className="text-xs text-[#20221F] font-medium pt-1">
                    Credit strategist helping clients understand, build, and use credit with intention.
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(32,34,31,0.10)]">
                  <p className="text-sm font-editorial-serif italic text-[#20221F]">
                    &ldquo;When you know the rules lenders are held to, you stop feeling anxious and start executing with precision.&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-6 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/40 space-y-2 shadow-sm">
                <span className="text-[10px] font-mono text-[#20221F] uppercase tracking-wider block font-semibold">
                  CONSULTATION COMMITMENT
                </span>
                <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                  Every 1-on-1 strategy session is conducted directly with Razila. No offshore call centers. No automated scripts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#4F5A48] font-light leading-relaxed">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#20221F] uppercase block font-semibold">
                THE GENESIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
                Tired of the Hype in Financial Services
              </h2>
              <p>
                The credit industry is full of noisy marketing. Companies flash rented sports cars, promise &ldquo;750 credit scores in 30 days,&rdquo; and send generic cookie-cutter letters that often do more damage than good. Consumers end up stuck on expensive monthly subscriptions for years without understanding how their credit actually works.
              </p>
              <p>
                Razila founded CLIENTSMAX on a radically different premise: <strong className="font-semibold text-[#20221F]">Credit is a learnable skill.</strong> You don&apos;t need an agency to file endless disputes on your behalf. You need an experienced strategist to sit down with you, interpret your 3-bureau report line by line, and teach you how underwriting models perceive your financial profile.
              </p>
              <p>
                From first-time car buyers seeking prime financing to independent entrepreneurs separating business expenses from personal credit, CLIENTSMAX serves individuals who demand high standards, absolute transparency, and genuine financial mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl space-y-4 mb-16">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#20221F] uppercase font-semibold">
              ETHICAL STANDARDS
            </span>
            <h2 className="text-4xl sm:text-5xl font-editorial-serif text-[#20221F]">
              The Four Pillars of CLIENTSMAX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.number}
                  className="border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/30 p-8 sm:p-10 space-y-4 hover:border-[#20221F]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-[#20221F] font-bold">
                      {p.number}
                    </span>
                    <IconComponent size={18} className="text-[#4F5A48]" />
                  </div>

                  <h3 className="text-2xl font-editorial-serif text-[#20221F]">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparative Analysis Table */}
      <section className="py-24 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl space-y-4 mb-16">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#20221F] uppercase font-semibold">
              MARKET DISTINCTION
            </span>
            <h2 className="text-4xl sm:text-5xl font-editorial-serif text-[#20221F]">
              A Contrarian Approach
            </h2>
          </div>

          <div className="border border-[rgba(32,34,31,0.12)] divide-y divide-[rgba(32,34,31,0.10)] bg-[#EAE5DA]/20">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#EAE5DA] p-6 text-xs font-mono tracking-wider uppercase text-[#4F5A48] font-semibold">
              <div className="md:col-span-3">Dimension</div>
              <div className="md:col-span-4 text-[#8a423d]">Conventional Credit Repair</div>
              <div className="md:col-span-5 text-[#20221F]">The CLIENTSMAX Way</div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 gap-4 items-start hover:bg-[#EAE5DA]/40 transition-colors"
              >
                <div className="md:col-span-3 text-sm font-mono text-[#20221F] font-semibold">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-xs text-[#4F5A48] font-light leading-relaxed">
                  {row.traditional}
                </div>
                <div className="md:col-span-5 text-xs text-[#20221F] font-medium leading-relaxed border-l-2 md:border-l-0 border-[#20221F] pl-4 md:pl-0">
                  {row.clientsmax}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Gateway */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
            Begin with Authentic Clarity
          </h2>
          <p className="text-xs text-[#4F5A48] max-w-md mx-auto font-light leading-relaxed">
            Choose whether to explore our 4-stage credit progression or schedule a private consultation with Razila.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
            >
              <span>Explore The Journey</span>
              <ArrowRight size={14} className="text-[#B9D65A]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[rgba(32,34,31,0.25)] text-[#20221F] font-mono text-xs uppercase tracking-widest hover:border-[#20221F] hover:bg-[#EAE5DA] transition-colors rounded-none"
            >
              <span>Book Strategy Session</span>
              <ArrowUpRight size={14} className="text-[#4F5A48]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
