'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, FileText, TrendingUp, Key } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export default function ServicesPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const services = [
    {
      id: 'education',
      number: '01',
      title: 'Credit Education',
      tagline: 'Demystifying the scoring algorithms and lender underwriting criteria.',
      description:
        'Most consumers only look at their credit score after an application is denied. We teach you how Experian, Equifax, and TransUnion document your trade lines, how risk scores are calculated, and what lenders actually see when evaluating your file.',
      benefits: [
        'Line-by-line review of your 3-bureau credit reports',
        'Understanding FICO vs. VantageScore scoring differences',
        'Identifying scoring bottlenecks and historical reporting discrepancies',
      ],
      icon: FileText,
    },
    {
      id: 'guidance',
      number: '02',
      title: 'Credit Repair Guidance',
      tagline: 'Navigating reporting inaccuracies and consumer dispute rights.',
      description:
        'Under federal law, credit bureaus must report information that is 100% accurate, complete, and verifiable. We help you spot reporting errors, balance mismatches, and outdated remarks, providing practical education on how to exercise your consumer dispute rights.',
      benefits: [
        'Audit of inaccurate personal identifiers, addresses, and balance records',
        'Guidance on the difference between legitimate corrections and abusive dispute tactics',
        'Ensuring your credit report accurately reflects your true financial track record',
      ],
      icon: ShieldCheck,
    },
    {
      id: 'strategy',
      number: '03',
      title: 'Credit Strategy & Pre-Approval',
      tagline: 'Intentional sequencing before submitting formal applications.',
      description:
        'Applying blindly for credit lines can harm your profile with unnecessary hard inquiries. We teach you how to sequence credit moves strategically, utilize soft-inquiry pre-approvals, and manage credit applications for auto loans, cards, or mortgages.',
      benefits: [
        'Leveraging soft-pull pre-qualification tools with zero score impact',
        'Rate-shopping timeline windows for automotive and mortgage loans',
        'Sequencing revolving and installment approvals in optimal order',
      ],
      icon: Key,
    },
    {
      id: 'foundation',
      number: '04',
      title: 'Financial Foundation & Timing',
      tagline: 'Controlling statement cutoff cycles and utilization ratios.',
      description:
        'Credit timing matters just as much as payment discipline. We show you how your statement closing date differs from your payment due date, allowing you to legally report lower balances and improve utilization without carrying expensive debt.',
      benefits: [
        'Mapping payment due dates to statement closing dates',
        'Keeping reported revolving utilization consistently low',
        'Establishing sustainable financial routines that protect your credit long-term',
      ],
      icon: Clock,
    },
    {
      id: 'building',
      number: '05',
      title: 'Credit Building',
      tagline: 'Establishing positive compounding trade lines with zero debt traps.',
      description:
        'A thin credit file can restrict opportunities just as severely as negative marks. We guide you toward safe, accredited credit-building tools that report consistent monthly on-time payment records without high interest fees or predatory retainers.',
      benefits: [
        'Activating structured credit-builder lines that report monthly',
        'Growing average account age (AAoA) naturally over time',
        'Avoiding high-fee retail cards and subprime lending traps',
      ],
      icon: TrendingUp,
    },
    {
      id: 'optimization',
      number: '06',
      title: 'Credit Optimization',
      tagline: 'Positioning your profile for prime lending rates and terms.',
      description:
        'The ultimate goal of credit literacy is acquiring prime borrowing power. Whether you are preparing to buy a vehicle, qualify for a mortgage, or expand credit limits, we provide direct 1-on-1 strategy with Razila to position your profile.',
      benefits: [
        'Pre-mortgage profile audits and inquiry management',
        'Automotive financing readiness to bypass dealer finance markups',
        'Credit limit expansion strategies to naturally improve overall utilization',
      ],
      icon: CheckCircle2,
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
                CLIENTSMAX SERVICES // ADVISORY PILLARS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              Strategic Credit Guidance Built On Real Experience.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              We do not sell generic dispute templates or make empty promises. Every service is grounded in practical credit mechanics, financial education, and 1-on-1 strategy with Razila.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 divide-y divide-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="py-16 first:pt-4 last:pb-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-mono font-bold text-green-700">
                        {service.number}
                      </span>
                      <div className="p-2 rounded-full bg-green-50 text-green-700">
                        <IconComponent size={20} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-green-800">
                      {service.tagline}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => initiateRedirect(consultationResource)}
                        className="btn-primary inline-flex items-center gap-2 py-2.5 px-5 text-xs tracking-wider cursor-pointer"
                      >
                        <span>BOOK CONSULTATION</span>
                        <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Description & Checkpoints */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-base text-gray-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-900 font-bold block">
                        WHAT WE FOCUS ON:
                      </span>
                      <div className="space-y-2.5">
                        {service.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="card-hover flex items-start gap-3 p-4 bg-gray-50 border border-gray-200/80 rounded-sm"
                          >
                            <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 font-normal">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Scheduling Banner */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-gray-900 text-white p-8 sm:p-14 rounded-sm border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-green-400 uppercase font-bold">
                1-ON-1 ADVISORY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Ready to review your credit profile with Razila?
              </h3>
              <p className="text-sm text-gray-400 font-normal leading-relaxed">
                Schedule a confidential consultation to map out a clear, step-by-step strategy for your upcoming goals.
              </p>
            </div>

            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="btn-primary inline-flex items-center gap-2 py-3.5 px-8 text-xs tracking-wider cursor-pointer shrink-0"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
