'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { RESOURCES, SOCIAL_LINKS, ExternalResource } from '@/content/resources';
import { useRedirect } from '@/context/RedirectContext';
import { fadeUpHeader } from '@/lib/motion';

// High-fidelity platform logos
function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.27 6.27 0 0 0 1.86-4.46V8.71a8.21 8.21 0 0 0 4.79 1.52V6.78a4.85 4.85 0 0 1-.87-.09z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const CHANNEL_META: Record<
  string,
  {
    icon: (props: { className?: string }) => React.JSX.Element;
    iconBg: string;
    accentHover: string;
    hoverBorder: string;
    hoverGlow: string;
    tag: string;
  }
> = {
  Instagram: {
    icon: InstagramIcon,
    iconBg: 'bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white',
    accentHover: 'group-hover:text-rose-600',
    hoverBorder: 'hover:border-rose-300',
    hoverGlow: 'hover:shadow-[0_16px_32px_-8px_rgba(225,48,108,0.15)]',
    tag: 'Profile Audits & Q&A',
  },
  TikTok: {
    icon: TikTokIcon,
    iconBg: 'bg-slate-900 text-white border border-slate-800 group-hover:bg-black',
    accentHover: 'group-hover:text-slate-950',
    hoverBorder: 'hover:border-slate-800',
    hoverGlow: 'hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.18)]',
    tag: 'Quick Credit Tips',
  },
  Facebook: {
    icon: FacebookIcon,
    iconBg: 'bg-blue-50 text-[#1877F2] border border-blue-100 group-hover:bg-[#1877F2] group-hover:text-white',
    accentHover: 'group-hover:text-[#1877F2]',
    hoverBorder: 'hover:border-blue-300',
    hoverGlow: 'hover:shadow-[0_16px_32px_-8px_rgba(24,119,242,0.15)]',
    tag: 'Community & Essays',
  },
  Threads: {
    icon: ThreadsIcon,
    iconBg: 'bg-gray-100 text-gray-900 border border-gray-200 group-hover:bg-black group-hover:text-white',
    accentHover: 'group-hover:text-gray-950',
    hoverBorder: 'hover:border-gray-900',
    hoverGlow: 'hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.15)]',
    tag: 'Rate Cuts & Insights',
  },
};

interface ResourceItem {
  id: string;
  num: string;
  subCategory: string;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  destinationLabel?: string;
  rationale?: string;
  isExternalLink?: boolean;
  externalResource?: ExternalResource;
  isFeatured?: boolean;
  metaTags: string[];
}

export default function ResourcesPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = RESOURCES.consultation;

  const educationalGuides: ResourceItem[] = [
    {
      id: 'credit-basics',
      num: '01',
      subCategory: 'CREDIT BASICS',
      title: 'Understand Your Credit Profile',
      subtitle: 'The Architecture of Risk Evaluation',
      description:
        'Learn what lenders actually evaluate and how the major components of a credit profile work—from revolving trade lines and installment amortization to scoring algorithms.',
      actionText: 'EXPLORE GUIDE',
      metaTags: ['SCORING MODELS', 'TRADE LINES', 'FICO VS VANTAGESCORE'],
      isFeatured: true,
    },
    {
      id: 'credit-report',
      num: '02',
      subCategory: 'CREDIT REPORT',
      title: 'Read Before You React',
      subtitle: 'Line-by-Line 3-Bureau Report Auditing',
      description:
        'Understand the specific records documented across Experian, TransUnion, and Equifax. Learn how to verify balance reporting dates, account types, and historical remarks before disputing.',
      actionText: 'EXPLORE AUDIT GUIDE',
      metaTags: ['EXPERIAN', 'EQUIFAX', 'TRANSUNION'],
    },
    {
      id: 'utilization',
      num: '03',
      subCategory: 'UTILIZATION',
      title: 'Balance & Timing',
      subtitle: 'Statement Closing Dates vs. Due Dates',
      description:
        'Understand how revolving balances and reporting cycles affect the picture lenders see. Learn why paying prior to the statement cutoff yields immediate reporting leverage.',
      actionText: 'EXPLORE STRATEGY',
      metaTags: ['STATEMENT CUTOFF', 'REVOLVING RATIO', 'TIMING LEVERAGE'],
    },
  ];

  const strategicTools: ResourceItem[] = [
    {
      id: 'kikoff-tool',
      num: '04',
      subCategory: 'CREDIT BUILDING',
      title: RESOURCES.creditBuilding.name,
      subtitle: RESOURCES.creditBuilding.tagline,
      description: RESOURCES.creditBuilding.description,
      actionText: 'ACTIVATE TOOL',
      destinationLabel: RESOURCES.creditBuilding.destinationLabel,
      rationale: RESOURCES.creditBuilding.whyChoose,
      isExternalLink: true,
      externalResource: RESOURCES.creditBuilding,
      metaTags: ['PAYMENT HISTORY', 'ZERO INTEREST', 'MONTHLY REPORTING'],
    },
    {
      id: 'capital-one-tool',
      num: '05',
      subCategory: 'PRE-APPROVAL',
      title: RESOURCES.creditCards.name,
      subtitle: RESOURCES.creditCards.tagline,
      description: RESOURCES.creditCards.description,
      actionText: 'CHECK PRE-APPROVAL',
      destinationLabel: RESOURCES.creditCards.destinationLabel,
      rationale: RESOURCES.creditCards.whyChoose,
      isExternalLink: true,
      externalResource: RESOURCES.creditCards,
      metaTags: ['SOFT INQUIRY', 'REVOLVING LINE', 'ZERO SCORE IMPACT'],
    },
    {
      id: 'advisory-session',
      num: '06',
      subCategory: 'PRIVATE ADVISORY',
      title: 'Private Strategic Consultation',
      subtitle: 'Direct 1-on-1 Advisory With Razila',
      description:
        'A comprehensive, confidential session to examine your three-bureau report, identify reporting anomalies, and establish the exact sequence for your next financial milestone.',
      actionText: 'BOOK PRIVATE SESSION',
      destinationLabel: RESOURCES.consultation.destinationLabel,
      rationale: RESOURCES.consultation.whyChoose,
      isExternalLink: true,
      externalResource: RESOURCES.consultation,
      metaTags: ['CONFIDENTIAL', '1-ON-1 ADVISORY', 'ROADMAP'],
    },
    {
      id: 'vehicle-finance',
      num: '07',
      subCategory: 'VEHICLE FINANCE',
      title: RESOURCES.vehicle.name,
      subtitle: RESOURCES.vehicle.tagline,
      description: RESOURCES.vehicle.description,
      actionText: 'EXPLORE VEHICLE RESOURCE',
      destinationLabel: RESOURCES.vehicle.destinationLabel,
      rationale: RESOURCES.vehicle.whyChoose,
      isExternalLink: true,
      externalResource: RESOURCES.vehicle,
      metaTags: ['AUTO FINANCING', 'RATE PROTECTION', 'POSITIONING'],
    },
  ];

  const handleAction = (item: ResourceItem) => {
    if (item.externalResource) {
      initiateRedirect(item.externalResource);
    } else {
      initiateRedirect(consultationResource);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* 1. EDITORIAL HERO: KNOW MORE. MOVE WITH CLARITY. */}
      <section className="border-b border-gray-100 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUpHeader}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            {/* Left Editorial Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  RESOURCES // CREDIT INTELLIGENCE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
                KNOW MORE. <br />
                MOVE WITH CLARITY.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-2xl">
                A curated collection of credit education, strategic guidance, and practical resources designed to help you understand your profile before making your next financial move.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm">
                  <CheckCircle2 size={13} className="text-green-600" />
                  VERIFIED ADVISORY TOOLS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm">
                  <CheckCircle2 size={13} className="text-green-600" />
                  ZERO DECEPTIVE CLAIMS
                </span>
              </div>
            </div>

            {/* Right Asymmetric Editorial Frame: Financial Ledger (NO TAG OVERLAY) */}
            <div className="lg:col-span-5">
              <div className="relative border border-gray-200 bg-gray-50 p-2 sm:p-2.5 rounded-sm shadow-xs group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/financial-ledger.jpg"
                    alt="Archival Credit Audit Document and Portfolio Ledger"
                    fill
                    priority
                    className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="pt-2.5 px-1.5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>CONFIDENTIAL 3-BUREAU AUDIT</span>
                  <span className="text-gray-900 font-medium">LEDGER REVIEW</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION A: EDUCATIONAL GUIDES & INTELLIGENCE */}
      <section className="py-14 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold block mb-1">
                SECTION 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
                Credit Intelligence &amp; Methodology
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase hidden sm:inline">
              3 STRATEGIC GUIDES
            </span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {educationalGuides.map((item) => {
              if (item.isFeatured) {
                return (
                  <div
                    key={item.id}
                    className="border border-gray-950 bg-gray-950 text-white p-7 sm:p-10 rounded-sm relative overflow-hidden shadow-sm"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-emerald-400 font-semibold">
                            CORE FOUNDATION // {item.num}
                          </span>
                          <span className="text-[10px] font-mono tracking-widest uppercase border border-gray-700 bg-gray-900 text-gray-300 px-2 py-0.5 rounded-xs font-medium">
                            {item.subCategory}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.metaTags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
                        <button
                          onClick={() => handleAction(item)}
                          className="inline-flex items-center justify-center gap-2 bg-white text-gray-950 hover:bg-gray-100 font-sans text-xs tracking-wider font-semibold py-3 px-6 rounded-sm transition-all duration-150 cursor-pointer shadow-xs"
                        >
                          <span>{item.actionText}</span>
                          <ArrowRight size={15} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="border border-gray-200 bg-white p-6 sm:p-8 rounded-sm hover:border-gray-950 transition-all duration-200 shadow-2xs group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    <div className="lg:col-span-5 space-y-2.5">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-green-700 font-bold">
                          {item.num}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-700 px-2 py-0.5 rounded-xs font-semibold">
                          {item.subCategory}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950 group-hover:text-green-900 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-gray-500 uppercase tracking-wide">
                        {item.subtitle}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => handleAction(item)}
                          className="btn-primary inline-flex items-center gap-2 py-2 px-4 text-xs tracking-wider cursor-pointer"
                        >
                          <span>{item.actionText}</span>
                          <ArrowRight size={14} strokeWidth={1.75} className="text-green-300" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                        CORE OBJECTIVE
                      </span>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.metaTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono uppercase text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-3 bg-gray-50/80 border border-gray-200/90 p-4 rounded-sm space-y-1.5">
                      <div className="flex items-center gap-1.5 text-gray-900 text-[11px] font-mono uppercase tracking-wider font-semibold">
                        <ShieldCheck size={14} className="text-green-700" />
                        <span>STRATEGIC CONTEXT</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        Verified by Razila to ensure accurate scoring comprehension and consumer rights protection.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECTION B: STRATEGIC TOOLS & VERIFIED DIRECTORY */}
      <section className="py-14 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold block mb-1">
                SECTION 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
                Verified Tools &amp; Strategic Advisory
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase hidden sm:inline">
              DIRECT PORTALS &amp; SESSIONS
            </span>
          </div>

          <div className="space-y-6">
            {strategicTools.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-white p-6 sm:p-8 rounded-sm hover:border-gray-950 transition-all duration-200 shadow-2xs group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-5 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-green-700 font-bold">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-700 px-2 py-0.5 rounded-xs font-semibold">
                        {item.subCategory}
                      </span>
                      {item.destinationLabel && (
                        <span className="text-[10px] font-mono text-gray-400 truncate max-w-[180px]">
                          via {item.destinationLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-950 group-hover:text-green-900 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wide">
                      {item.subtitle}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => handleAction(item)}
                        className="btn-primary inline-flex items-center gap-2 py-2 px-4 text-xs tracking-wider cursor-pointer"
                      >
                        <span>{item.actionText}</span>
                        <ArrowUpRight size={14} strokeWidth={1.75} className="text-green-300" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                      RESOURCE FUNCTION
                    </span>
                    <p className="text-sm text-gray-600 font-sans leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.metaTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono uppercase text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 bg-gray-50/80 border border-gray-200/90 p-4 rounded-sm space-y-1.5">
                    <div className="flex items-center gap-1.5 text-gray-900 text-[11px] font-mono uppercase tracking-wider font-semibold">
                      <ShieldCheck size={14} className="text-green-700" />
                      <span>STRATEGIC RATIONALE</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      {item.rationale ||
                        'Reviewed by Razila for consumer protection and practical financial value.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL PUBLIC CHANNELS */}
      <section className="py-20 sm:py-24 border-b border-gray-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  FREE EDUCATIONAL CHANNELS // VERIFIED MEDIA
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.08]">
                Official Public Channels<span className="text-green-600">.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Direct insights, underwriting mechanics, lending updates, and case studies published weekly across our verified channels.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500 bg-white border border-gray-200/80 px-3.5 py-2 rounded-lg shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DIRECT ACCESS • NO PAYWALLS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_LINKS.map((social) => {
              const meta = CHANNEL_META[social.platform] || {
                icon: ArrowUpRight,
                iconBg: 'bg-gray-100 text-gray-800',
                accentHover: 'group-hover:text-green-700',
                hoverBorder: 'hover:border-green-600',
                hoverGlow: 'hover:shadow-md',
                tag: 'Community',
              };
              const IconComponent = meta.icon;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-white border border-gray-200/90 rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${meta.hoverBorder} ${meta.hoverGlow} hover:-translate-y-1 shadow-xs`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 shadow-2xs ${meta.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        OFFICIAL
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className={`text-xl font-bold font-display text-gray-950 transition-colors ${meta.accentHover}`}>
                          {social.platform}
                        </h3>
                        <span className="text-[10px] font-mono font-semibold text-green-700">
                          {social.handle}
                        </span>
                      </div>

                      <span className="inline-block text-[10px] font-mono tracking-wider uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs mt-1">
                        {meta.tag}
                      </span>

                      <p className="text-sm text-slate-600 font-sans leading-relaxed pt-2.5">
                        {social.audienceContext}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-600 group-hover:text-green-700 transition-colors">
                    <span>Follow @clientsmax</span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL BOTTOM CTA */}
      <section className="pt-16 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
              NEXT STRATEGIC MOVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
            READY TO UNDERSTAND YOUR POSITION?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans max-w-xl mx-auto">
            Book a private, confidential consultation directly with Razila to examine your current profile and sequence your next steps.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-xs tracking-wider cursor-pointer"
            >
              <span>BOOK YOUR CONSULTATION</span>
              <ArrowRight size={15} />
            </button>

            <Link
              href="/start"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider text-gray-700 hover:text-gray-950"
            >
              <span>60-Second Strategy Selector</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
