'use client';

import React, { useRef, useState } from 'react';
import { CLIENT_STORIES } from '@/content/stories';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ClientStorySection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple stories array for seamless continuous loop
  const loopStories = [...CLIENT_STORIES, ...CLIENT_STORIES, ...CLIENT_STORIES];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-gray-200 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                CLIENT EXPERIENCES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-950 tracking-tight">
              Real Client Outcomes<span className="text-green-600">.</span>
            </h2>
          </div>

          {/* Controls: Manual step & Pause state indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3 py-1.5 text-xs font-mono border border-gray-200 text-gray-600 hover:border-gray-400 rounded-sm transition-colors cursor-pointer"
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? 'RESUME PLAY' : 'PAUSE HOVER'}
            </button>
            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollLeft}
                aria-label="Scroll previous outcome"
                className="p-2 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors cursor-pointer"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll next outcome"
                className="p-2 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors cursor-pointer"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel Track */}
      <div
        className="pt-8 overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 w-max overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 lg:px-10 ${
            !isPaused ? 'animate-carousel' : ''
          }`}
        >
          {loopStories.map((story, idx) => (
            <div
              key={`${story.id}-${idx}`}
              className="w-[340px] sm:w-[420px] shrink-0 bg-gray-50/70 border border-gray-200 hover:border-green-600 rounded-sm p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                  <span className="text-xs font-mono font-bold text-green-700">
                    {story.number}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {story.location}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold font-display text-gray-950">
                    {story.clientContext}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 block">
                    Timeline: {story.timeline}
                  </span>
                </div>

                {/* Minimal Editorial Quote */}
                <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              {/* Bottom Result Box */}
              <div className="pt-4 border-t border-gray-200/70 space-y-2 bg-white -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-6 rounded-b-sm border-t">
                <span className="text-[10px] font-mono tracking-wider uppercase text-green-800 font-semibold block">
                  DOCUMENTED RESULT
                </span>
                <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                  {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        .animate-carousel {
          animation: carousel 36s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-carousel {
            animation: none;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
