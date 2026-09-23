'use client';

import React from 'react';
import { RESOURCES, SOCIAL_LINKS, ExternalResource } from '@/content/resources';
import { useRedirect } from '@/context/RedirectContext';
import { ArrowUpRight, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// High-fidelity platform logos with authentic brand geometry
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

export default function ResourcesPage() {
  const { initiateRedirect } = useRedirect();
  const resourceList: ExternalResource[] = Object.values(RESOURCES);

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                CURATED DIRECTORY // VERIFIED RESOURCES
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              Recommended Credit Resources<span className="text-green-600">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              Every resource and advisory tool curated here has been reviewed by Razila for consumer protection, transparency, and practical financial value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Resource Cards */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-8">
            {resourceList.map((item, idx) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-white p-8 sm:p-10 rounded-sm hover:border-green-600 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-green-700 font-bold">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase border border-green-200 bg-green-50 text-green-800 px-2 py-0.5 rounded-xs font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold font-display text-gray-950">
                      {item.name}
                    </h2>

                    <p className="text-xs font-mono text-gray-500">
                      Destination: <span className="text-gray-900 font-medium">{item.destinationLabel}</span>
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={() => initiateRedirect(item)}
                        className="btn-primary inline-flex items-center gap-2 py-2.5 px-5 text-xs tracking-wider cursor-pointer"
                      >
                        <span>{item.buttonText}</span>
                        <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
                      </button>
                    </div>
                  </div>

                  {/* Middle Column: Function */}
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                      RESOURCE FUNCTION
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Strategic Rationale */}
                  <div className="lg:col-span-4 bg-gray-50 border border-gray-200 p-5 rounded-sm space-y-2">
                    <div className="flex items-center gap-2 text-gray-900 text-xs font-mono uppercase tracking-wider font-bold">
                      <Shield size={16} strokeWidth={1.5} className="text-green-700" />
                      <span>STRATEGIC RATIONALE</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {item.whyChoose}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Communities */}
      <section className="py-20 sm:py-24 border-b border-gray-100 bg-slate-50/50">
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
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
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
                badge: 'OFFICIAL CHANNEL',
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
                    {/* Top: Logo Badge + Official Tag */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 shadow-2xs ${meta.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        OFFICIAL
                      </span>
                    </div>

                    {/* Content Header */}
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

                  {/* Bottom Action Footer */}
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

      {/* Direct Help Prompt */}
      <section className="pt-16 text-center">
        <div className="max-w-xl mx-auto space-y-4 px-4">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
            UNSURE WHICH RESOURCE FITS YOUR STAGE?
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-4"
          >
            <span>Run the 60-Second Strategy Selector</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
