'use client';

import React, { useEffect, useRef, useState } from 'react';

export function StatsSection() {
  const [clientsCount, setClientsCount] = useState(0);
  const [foundedYear, setFoundedYear] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          if (prefersReducedMotion) {
            setClientsCount(5000);
            setFoundedYear(2021);
            return;
          }

          // Animate counters once upward
          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setClientsCount(Math.floor(ease * 5000));
            setFoundedYear(Math.floor(ease * 2021));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setClientsCount(5000);
              setFoundedYear(2021);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const marqueeItems = [
    '5,000+ CLIENTS GUIDED',
    'FOUNDED IN 2021',
    'DIRECT 1-ON-1 ADVISORY',
    '3-BUREAU STRATEGIC ANALYSIS',
    'EXPERIAN • EQUIFAX • TRANSUNION',
    'FOUNDER-LED METHODOLOGY',
    'ZERO AUTOMATED GIMMICKS',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-b border-gray-100 py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Editorial Milestone Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gray-100">
          {/* Stat 1: 5,000+ */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl sm:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                {hasAnimated.current ? clientsCount.toLocaleString() : (clientsCount > 0 ? clientsCount.toLocaleString() : '5,000')}
              </span>
              <span className="text-4xl sm:text-5xl font-extrabold font-display text-green-600">+</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-green-700 tracking-wider uppercase block">
                CLIENTS HELPED
              </span>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Individuals and families guided toward verified, long-term credit strength.
              </p>
            </div>
          </div>

          {/* Stat 2: 2021 */}
          <div className="space-y-2">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                {hasAnimated.current ? foundedYear : (foundedYear > 0 ? foundedYear : '2021')}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-green-700 tracking-wider uppercase block">
                CLIENTSMAX FOUNDED
              </span>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Established by Razila to deliver honest, structured credit strategy.
              </p>
            </div>
          </div>

          {/* Stat 3: 1-on-1 */}
          <div className="space-y-2">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                1-on-1
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-green-700 tracking-wider uppercase block">
                FOUNDER ADVISORY
              </span>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Direct strategic consultation with Razila on every confidential case.
              </p>
            </div>
          </div>

          {/* Stat 4: 3-Bureau */}
          <div className="space-y-2">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl font-extrabold font-display text-gray-950 tracking-tight">
                3-Bureau
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-green-700 tracking-wider uppercase block">
                REPORT AUDITING
              </span>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Comprehensive line-by-line review across Experian, Equifax, and TransUnion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Editorial Marquee Ribbon */}
      <div className="pt-8 overflow-hidden select-none bg-gray-50/70 border-b border-gray-100 py-3.5">
        <div className="flex w-max space-x-8 animate-marquee">
          {/* Double array for seamless infinite looping */}
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className="text-xs font-mono font-semibold tracking-widest text-gray-700 uppercase">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
