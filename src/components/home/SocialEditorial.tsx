'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/content/resources';
import { ArrowUpRight } from 'lucide-react';

export function SocialEditorial() {
  return (
    <section className="relative py-24 border-b border-[rgba(32,34,31,0.12)] bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-[rgba(32,34,31,0.10)] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                PUBLIC CHANNELS // COMMENTARY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal font-editorial-serif text-[#20221F] tracking-tight">
              FOLLOW THE JOURNEY<span className="text-[#B9D65A]">.</span>
            </h2>
          </div>

          <p className="text-xs text-[#4F5A48] max-w-sm font-light leading-relaxed">
            Daily breakdowns of bureau policies, lending updates, and strategic credit education with Razila across all official platforms.
          </p>
        </div>

        {/* Editorial Social Links List */}
        <div className="divide-y divide-[rgba(32,34,31,0.10)]">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-[#EAE5DA]/50 px-4 -mx-4"
              data-cursor="view"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-2xl sm:text-3xl font-editorial-serif text-[#20221F] group-hover:text-[#4F5A48] transition-colors">
                  {item.platform.toUpperCase()} →
                </span>
                <span className="text-xs font-mono text-[#4F5A48]">
                  {item.handle}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6">
                <span className="text-xs text-[#4F5A48] font-light hidden md:block">
                  {item.audienceContext}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#20221F] group-hover:text-[#4F5A48] transition-colors font-semibold">
                  <span>Connect</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B9D65A]"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
