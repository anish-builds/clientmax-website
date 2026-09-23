'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/content/site';
import { SOCIAL_LINKS } from '@/content/resources';

// Minimalist, high-fidelity brand SVGs at consistent 20px sizing with 1.5px stroke alignment
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.27 6.27 0 0 0 1.86-4.46V8.71a8.21 8.21 0 0 0 4.79 1.52V6.78a4.85 4.85 0 0 1-.87-.09z"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function ThreadsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

export function Footer() {

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <InstagramIcon size={20} />;
      case 'TikTok':    return <TikTokIcon size={20} />;
      case 'Facebook':  return <FacebookIcon size={20} />;
      case 'Threads':   return <ThreadsIcon size={20} />;
      default:          return null;
    }
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-900 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-950/20 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* ========================================================= */}
        {/* NAVIGATION, BRAND & COMMUNITY SUITE                       */}
        {/* ========================================================= */}
        <div className="pt-16 sm:pt-20 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-7 rounded-sm overflow-hidden shrink-0 border border-gray-800">
                  <Image
                    src="/clientsmaxlogo.png"
                    alt="CLIENTSMAX Logo"
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-xs font-mono tracking-[0.14em] text-green-400 uppercase font-semibold">
                    CLIENTSMAX CONSULTING
                  </span>
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-display font-medium text-white leading-snug">
                Your Credit Is More Than A Number.
              </p>
              <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-md">
                CLIENTSMAX provides personal credit education and strategic 1-on-1 advisory. Founded in 2021 by Razila, helping individuals and families build lasting financial foundations.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-xs font-mono tracking-[0.14em] text-slate-400 uppercase block font-semibold">
                NAVIGATION
              </span>
              <ul className="space-y-2.5">
                {SITE_CONFIG.primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-green-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/start"
                    className="text-sm text-green-400 font-medium hover:text-green-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Start Your Journey</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow the Journey / Verified Social Links */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-xs font-mono tracking-[0.14em] text-slate-400 uppercase block font-semibold">
                FOLLOW THE JOURNEY
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official community channels, founder commentary, and credit strategy updates.
              </p>

              {/* Minimal SVG icon buttons at exact 20px size */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow CLIENTSMAX on ${social.platform}`}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 hover:border-green-600 hover:text-green-400 rounded-sm text-slate-300 transition-colors group"
                  >
                    <span className="text-slate-400 group-hover:text-green-400 transition-colors">
                      {getPlatformIcon(social.platform)}
                    </span>
                    <span className="text-xs font-mono font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 font-mono">
                @clientsmax on all official platforms
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. LEGAL DISCLOSURE                                       */}
        {/* ========================================================= */}
        <div className="py-7 border-t border-gray-900 text-xs text-slate-400 leading-relaxed font-light">
          <p className="max-w-5xl">
            <strong className="text-slate-300 font-semibold uppercase tracking-[0.14em] font-mono mr-2">DISCLOSURE:</strong>
            {SITE_CONFIG.disclaimer}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 5. BOTTOM BAR                                             */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-7 pb-8 border-t border-gray-900 gap-4 font-mono">
          <p>© {SITE_CONFIG.copyrightYear} CLIENTSMAX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Founded in 2021</span>
            <span className="h-1 w-1 bg-green-500 rounded-full" />
            <span>5,000+ Clients Guided</span>
            <span className="h-1 w-1 bg-slate-600 rounded-full" />
            <span>Personal Credit Strategy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
