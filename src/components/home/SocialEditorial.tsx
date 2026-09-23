'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/content/resources';

/* ─── Inline SVG social icons ─────────────────────────────────────────────── */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 011.57.044 6.9 6.9 0 00-.255-1.169c-.274-.809-.866-1.25-1.823-1.325-.562-.044-1.07.076-1.487.353-.336.223-.601.557-.77 1.007l-1.956-.511c.257-.783.713-1.458 1.358-1.993.836-.694 1.913-1.036 3.202-1.036h.065c2.048.024 3.378.968 3.947 2.807.18.58.3 1.217.361 1.905a6.05 6.05 0 01.834.244c1.342.498 2.29 1.381 2.74 2.556.697 1.828.744 4.71-1.695 7.066C17.32 23.117 15.127 23.98 12.186 24z" />
    </svg>
  );
}

const PLATFORM_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Threads: ThreadsIcon,
};

const PLATFORM_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Instagram: { bg: 'from-purple-600 via-pink-500 to-orange-400', text: 'text-white', border: 'border-pink-400/30' },
  TikTok: { bg: 'from-gray-900 via-gray-900 to-gray-800', text: 'text-white', border: 'border-gray-600/30' },
  Facebook: { bg: 'from-blue-700 to-blue-600', text: 'text-white', border: 'border-blue-500/30' },
  Threads: { bg: 'from-gray-900 via-gray-800 to-gray-900', text: 'text-white', border: 'border-gray-600/30' },
};

export function SocialEditorial() {
  return (
    <section className="py-24 sm:py-32 bg-[#0D0F0E] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-mono text-xs text-green-400 uppercase">
                COMMUNITY &amp; COMMENTARY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
              Follow The Journey<span className="text-green-500">.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-normal lg:text-right">
            Educational breakdowns of bureau policies, lending updates, and real credit questions — with Razila across all platforms.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_LINKS.map((item) => {
            const Icon = PLATFORM_ICONS[item.platform];
            const color = PLATFORM_COLORS[item.platform];
            return (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between p-7 rounded-xl border bg-white/[0.03] ${color.border} hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 overflow-hidden`}
              >
                {/* Subtle gradient bleed on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${color.bg} pointer-events-none`} />

                {/* Icon + Arrow row */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${color.bg} shadow-lg`}>
                    <Icon className={`w-6 h-6 ${color.text}`} />
                  </div>
                  {/* Diagonal arrow */}
                  <span className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-xl leading-none">
                    ↗
                  </span>
                </div>

                {/* Platform name + handle */}
                <div className="relative z-10 space-y-1">
                  <p className="text-xl font-bold font-display text-white group-hover:text-green-400 transition-colors">
                    {item.platform}
                  </p>
                  <p className="font-mono text-xs text-gray-400">
                    {item.handle}
                  </p>
                </div>

                {/* Description */}
                <p className="relative z-10 text-xs text-gray-500 font-normal leading-relaxed mt-5 pt-5 border-t border-white/5">
                  {item.audienceContext}
                </p>
              </a>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px flex-1 bg-white/5 max-w-xs" />
          <span className="font-mono text-xs text-gray-600 uppercase">@clientsmax on all platforms</span>
          <span className="h-px flex-1 bg-white/5 max-w-xs" />
        </div>
      </div>
    </section>
  );
}
