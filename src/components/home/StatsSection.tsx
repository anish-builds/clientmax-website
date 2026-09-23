'use client';

import React, { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
  {
    id: 'clients',
    value: '5,000',
    suffix: '+',
    label: 'CLIENTS HELPED',
    description: 'Individuals and families guided toward verified, long-term credit strength.',
  },
  {
    id: 'founded',
    value: '2021',
    suffix: '',
    label: 'CLIENTSMAX FOUNDED',
    description: 'Established by Razila to deliver honest, structured credit strategy.',
  },
  {
    id: 'advisory',
    value: '1-on-1',
    suffix: '',
    label: 'FOUNDER ADVISORY',
    description: 'Direct strategic consultation with Razila on every confidential case.',
  },
  {
    id: 'bureau',
    value: '3-Bureau',
    suffix: '',
    label: 'REPORT AUDITING',
    description: 'Comprehensive line-by-line review across Experian, Equifax, and TransUnion.',
  },
];

const TICKER_PHRASES = [
  'EXPERIAN • EQUIFAX • TRANSUNION',
  'FOUNDER-LED METHODOLOGY',
  'ZERO AUTOMATED GIMMICKS',
  '5,000+ CLIENTS GUIDED',
  'FOUNDED IN 2021',
  'DIRECT 1-ON-1 ADVISORY',
];

// Counter hook: animates a number from 0 → target once when visible
function useCountUp(target: number, enabled: boolean): number {
  const [count, setCount] = useState(0);
  const didRun = useRef(false);

  useEffect(() => {
    if (!enabled || didRun.current) return;
    didRun.current = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(ease * target));
      if (t < 1) requestAnimationFrame(raf);
      else setCount(target);
    };
    requestAnimationFrame(raf);
  }, [enabled, target]);

  return count;
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const clientsCount = useCountUp(5000, inView);
  const foundedYear = useCountUp(2021, inView);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-b border-gray-100 overflow-hidden"
    >
      {/* ── 4-Column Stat Highlights ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STATS_DATA.map((item) => {
            const isClients = item.id === 'clients';
            const isFounded = item.id === 'founded';

            const displayValue = isClients
              ? (inView ? clientsCount.toLocaleString() : '5,000')
              : isFounded
              ? (inView ? String(foundedYear) : '2021')
              : item.value;

            return (
              <div key={item.id} className="flex flex-col">
                {/* Large Bold Metric */}
                <div className="flex items-baseline text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-950 font-sans tracking-tight leading-none">
                  <span>{displayValue}</span>
                  {item.suffix && (
                    <span className="text-green-600 font-extrabold ml-0.5">
                      {item.suffix}
                    </span>
                  )}
                </div>

                {/* Green Monospace Label */}
                <div className="mt-3 mb-2 text-xs font-mono font-bold tracking-[0.14em] text-green-700 uppercase">
                  {item.label}
                </div>

                {/* Editorial Subtext */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Marquee Ticker ───────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative w-full overflow-hidden border-y border-gray-200/80 bg-gray-50/70 py-4 sm:py-5 select-none"
      >
        {/* Left and Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-gray-50/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-gray-50/90 to-transparent" />

        <div className="flex items-center animate-marquee will-change-transform">
          {[...TICKER_PHRASES, ...TICKER_PHRASES, ...TICKER_PHRASES, ...TICKER_PHRASES].map((phrase, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.16em] text-gray-800 uppercase whitespace-nowrap">
                {phrase}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-600 shrink-0 mx-6 sm:mx-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
