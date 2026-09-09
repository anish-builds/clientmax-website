'use client';

import React from 'react';
import { RESOURCES, SOCIAL_LINKS, ExternalResource } from '@/content/resources';
import { useRedirect } from '@/context/RedirectContext';
import { ArrowUpRight, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const { initiateRedirect } = useRedirect();
  const resourceList: ExternalResource[] = Object.values(RESOURCES);

  return (
    <div className="pt-32 pb-24 bg-[#F5F2EA]">
      {/* Header */}
      <section className="border-b border-[rgba(32,34,31,0.10)] pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                DIRECTORY // CURATED RESOURCES
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              THE CLIENTSMAX
              <br />
              <span className="italic text-[#4F5A48]">RECOMMENDED RESOURCES.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed pt-2">
              We do not accept paid ad sponsorships. Every tool and advisory resource curated here has been personally vetted by Razila for transparency, consumer protection, and practical value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Resource Cards */}
      <section className="py-20 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12">
            {resourceList.map((item, idx) => (
              <div
                key={item.id}
                className="border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/30 p-8 sm:p-12 hover:border-[#20221F]/40 transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#20221F] font-bold">
                        0{idx + 1}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest uppercase border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA] px-2 py-0.5 text-[#4F5A48]">
                        {item.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-editorial-serif text-[#20221F]">
                      {item.name}
                    </h2>

                    <p className="text-xs font-mono text-[#4F5A48]">
                      Destination: <span className="text-[#20221F] font-medium">{item.destinationLabel}</span>
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => initiateRedirect(item)}
                        className="inline-flex items-center gap-2 py-3 px-6 bg-[#20221F] text-[#F5F2EA] font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                      >
                        <span>{item.buttonText}</span>
                        <ArrowUpRight size={14} className="text-[#B9D65A]" />
                      </button>
                    </div>
                  </div>

                  {/* Middle Column: Description & Strategic Context */}
                  <div className="lg:col-span-4 space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#20221F] font-semibold block">
                      RESOURCE FUNCTION
                    </span>
                    <p className="text-sm text-[#4F5A48] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Why CLIENTSMAX Recommends It */}
                  <div className="lg:col-span-4 bg-[#F5F2EA] border border-[rgba(32,34,31,0.12)] p-6 space-y-2 shadow-sm">
                    <div className="flex items-center gap-2 text-[#20221F] text-[10px] font-mono uppercase tracking-widest font-semibold">
                      <Shield size={13} className="text-[#4F5A48]" />
                      <span>STRATEGIC RATIONALE</span>
                    </div>
                    <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
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
      <section className="py-20 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4 mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#20221F] uppercase font-semibold">
              EDUCATIONAL BROADCASTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial-serif text-[#20221F]">
              Free Public Channels
            </h2>
            <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
              We publish educational breakdowns, answers to underwriting questions, and regulatory commentary across all major public platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[rgba(32,34,31,0.12)] p-6 bg-[#EAE5DA]/30 hover:bg-[#EAE5DA] hover:border-[#20221F]/30 transition-all flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors">
                      {social.platform}
                    </span>
                    <ArrowUpRight size={14} className="text-[#4F5A48]" />
                  </div>
                  <p className="text-xs font-mono text-[#4F5A48]">
                    {social.handle}
                  </p>
                </div>
                <p className="text-[11px] text-[#4F5A48] font-light mt-6 leading-relaxed">
                  {social.audienceContext}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Help / Start diagnostic */}
      <section className="pt-16 text-center">
        <div className="max-w-xl mx-auto space-y-4 px-6">
          <p className="text-xs font-mono text-[#4F5A48] uppercase tracking-widest">
            UNSURE WHICH RESOURCE FITS YOUR STAGE?
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#20221F] font-semibold hover:underline"
          >
            <span>Run the 60-Second Strategy Selector</span>
            <ArrowRight size={14} className="text-[#B9D65A]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
