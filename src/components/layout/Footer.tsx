'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';
import { SOCIAL_LINKS, getResource } from '@/content/resources';
import { ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';

export function Footer() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  return (
    <footer className="relative bg-[#EAE5DA] border-t border-[rgba(32,34,31,0.12)] text-[#20221F] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[rgba(32,34,31,0.12)]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#B9D65A]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                {SITE_CONFIG.eyebrow}
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-editorial-serif text-[#20221F] leading-snug">
              Credit is not an emergency fix. It is the architectural foundation of modern financial sovereignty.
            </p>
            <p className="text-xs text-[#4F5A48] font-light leading-relaxed max-w-md pt-2">
              CLIENTSMAX delivers institutional-grade credit intelligence and private advisory. Founded by Razila.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#4F5A48] uppercase block">
              DIRECTORY
            </span>
            <ul className="space-y-2.5">
              {SITE_CONFIG.primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs font-mono tracking-wider text-[#4F5A48] hover:text-[#20221F] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/start"
                  className="text-xs font-mono tracking-wider text-[#20221F] font-medium hover:underline"
                >
                  Find Your Entry Point →
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Strategy - Clean Editorial Text Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#4F5A48] uppercase block">
              OFFICIAL CHANNELS
            </span>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono text-[#4F5A48] hover:text-[#20221F] transition-colors"
                  >
                    <span className="tracking-wider">{social.platform.toUpperCase()} →</span>
                    <span className="text-[#4F5A48]/50 text-[10px]">({social.handle})</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                onClick={() => initiateRedirect(consultationResource)}
                className="text-xs font-mono tracking-widest text-[#F5F2EA] bg-[#20221F] px-5 py-3 hover:bg-[#383d35] transition-colors uppercase font-semibold rounded-none border border-[#20221F]"
              >
                BOOK A CONSULTATION →
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Area */}
        <div className="py-8 border-b border-[rgba(32,34,31,0.12)]">
          <div className="flex items-start gap-3">
            <span className="text-[10px] font-mono text-[#4F5A48] uppercase tracking-widest shrink-0 mt-0.5 font-semibold">
              DISCLOSURE:
            </span>
            <p className="text-[11px] text-[#4F5A48] leading-relaxed max-w-5xl font-light">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>

        {/* Massive Serif Wordmark Imprint */}
        <div className="pt-12 pb-6 text-center select-none overflow-hidden">
          <span className="text-[16vw] font-editorial-serif font-normal text-[#20221F]/[0.06] tracking-tight leading-none block whitespace-nowrap">
            {SITE_CONFIG.name}
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#4F5A48] pt-4 gap-4">
          <p>© {SITE_CONFIG.copyrightYear} CLIENTSMAX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>EDITORIAL FINANCIAL DISCIPLINE</span>
            <span className="h-1 w-1 bg-[#B9D65A]" />
            <span>AUTHENTIC ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
