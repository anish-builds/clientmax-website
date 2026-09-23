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
                        className="inline-flex items-center gap-2 py-3 px-5 bg-green-700 hover:bg-green-800 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-xs"
                      >
                        <span>{item.buttonText}</span>
                        <ArrowUpRight size={14} className="text-green-200" />
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
                      <Shield size={14} className="text-green-700" />
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
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
              FREE EDUCATIONAL CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950">
              Official Public Channels
            </h2>
            <p className="text-sm text-gray-600 font-normal leading-relaxed">
              We publish weekly breakdowns of bureau mechanics, lending updates, and underwriting answers across our official channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 p-6 bg-gray-50 hover:bg-white hover:border-green-600 rounded-sm shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold font-display text-gray-900 group-hover:text-green-700 transition-colors">
                      {social.platform}
                    </span>
                    <ArrowUpRight size={15} className="text-gray-400 group-hover:text-green-700 transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-green-700 font-semibold">
                    {social.handle}
                  </p>
                </div>
                <p className="text-xs text-gray-500 font-normal mt-5 leading-relaxed">
                  {social.audienceContext}
                </p>
              </a>
            ))}
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
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
