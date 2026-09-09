'use client';

import React from 'react';
import { RESOURCES, ExternalResource } from '@/content/resources';
import { useRedirect } from '@/context/RedirectContext';
import { ArrowUpRight } from 'lucide-react';

export function RecommendsSection() {
  const { initiateRedirect } = useRedirect();
  const resourceList: ExternalResource[] = Object.values(RESOURCES);

  return (
    <section className="relative py-28 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Ledger Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                CURATED ARSENAL // INSTITUTIONAL LEDGER
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              YOUR NEXT MOVE<span className="text-[#B9D65A]">.</span>
            </h2>
          </div>

          <p className="text-xs text-[#4F5A48] max-w-md font-light leading-relaxed">
            CLIENTSMAX curates exclusively verified institutional resources. Each platform occupies a distinct mathematical role in your credit progression.
          </p>
        </div>

        {/* Curated Editorial Ledger (Row-Based Architecture, Zero Generic Cards) */}
        <div className="divide-y divide-[rgba(32,34,31,0.10)] border-b border-[rgba(32,34,31,0.10)]">
          {resourceList.map((resource, idx) => (
            <div
              key={resource.id}
              className="group py-8 sm:py-10 px-4 -mx-4 transition-colors hover:bg-[#EAE5DA]/50 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative"
              data-cursor="view"
            >
              {/* Left Column: Index & Platform Name */}
              <div className="lg:w-1/3 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#20221F] font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase border border-[rgba(32,34,31,0.18)] bg-[#EAE5DA] px-2 py-0.5 text-[#4F5A48]">
                    {resource.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#20221F] transition-colors">
                  {resource.name}
                </h3>

                <p className="text-xs font-mono text-[#4F5A48]">
                  Destination: <span className="text-[#20221F] font-medium">{resource.destinationLabel}</span>
                </p>
              </div>

              {/* Middle Column: Strategic Rationale (Why Choose It) */}
              <div className="lg:w-5/12 space-y-1.5">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#20221F] font-semibold block">
                  STRATEGIC RATIONALE:
                </span>
                <p className="text-xs sm:text-sm text-[#4F5A48] font-light leading-relaxed">
                  {resource.whyChoose}
                </p>
              </div>

              {/* Right Column: Action Button */}
              <div className="lg:w-1/4 flex lg:justify-end">
                <button
                  onClick={() => initiateRedirect(resource)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-transparent border border-[rgba(32,34,31,0.20)] text-[#20221F] hover:bg-[#20221F] hover:text-[#F5F2EA] hover:border-[#20221F] font-mono text-xs uppercase tracking-wider transition-all duration-200 rounded-none shadow-sm"
                >
                  <span>{resource.buttonText}</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B9D65A]"
                  />
                </button>
              </div>

              {/* Left Accent Rule on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#20221F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
