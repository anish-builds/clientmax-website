'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/content/site';
import { ArrowRight, Menu, X, ArrowUpRight } from 'lucide-react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource } from '@/content/resources';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F2EA]/95 backdrop-blur-md border-b border-[rgba(32,34,31,0.08)] py-4 shadow-sm'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
            data-cursor="go"
          >
            <span className="text-xl sm:text-2xl font-normal tracking-tight text-[#20221F] font-editorial-serif leading-none group-hover:text-[#4F5A48] transition-colors duration-300">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase mt-1 transition-colors duration-300">
              FINANCIAL STRATEGY
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {SITE_CONFIG.primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.18em] font-mono transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#20221F] font-semibold'
                      : 'text-[#4F5A48] hover:text-[#20221F]'
                  }`}
                  data-cursor="pointer"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#20221F]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              data-cursor="view"
              className="text-xs font-mono tracking-wider uppercase text-[#4F5A48] hover:text-[#20221F] transition-colors font-semibold"
            >
              Consultation
            </button>
            <Link
              href={SITE_CONFIG.ctaButton.href}
              data-cursor="go"
              className="group inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase bg-[#20221F] text-[#F5F2EA] font-semibold px-5 py-2.5 hover:bg-[#383d35] active:scale-[0.98] transition-all duration-200 border border-[#20221F] rounded-none"
            >
              <span>{SITE_CONFIG.ctaButton.label}</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1 text-[#B9D65A]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#20221F] hover:text-[#4F5A48] focus:outline-none transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Bespoke Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F2EA] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#4F5A48] uppercase block mb-4">
                NAVIGATION / DIRECTORY
              </span>

              <nav className="flex flex-col space-y-4">
                {SITE_CONFIG.primaryNav.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline justify-between border-b border-[rgba(32,34,31,0.10)] pb-4"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono text-[#4F5A48]">
                            0{idx + 1}
                          </span>
                          <span
                            className={`text-2xl font-editorial-serif tracking-tight ${
                              isActive ? 'text-[#20221F] font-semibold' : 'text-[#4F5A48]'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className={`transition-transform group-hover:translate-x-1 ${
                            isActive ? 'text-[#20221F]' : 'text-[#4F5A48]'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 space-y-4 border-t border-[rgba(32,34,31,0.10)] relative z-10"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  initiateRedirect(consultationResource);
                }}
                className="flex items-center justify-between w-full bg-[#20221F] text-[#F5F2EA] font-mono text-xs tracking-widest uppercase font-semibold px-6 py-4 rounded-none"
              >
                <span>BOOK YOUR CREDIT CONSULTATION</span>
                <ArrowUpRight size={14} className="text-[#B9D65A]" />
              </button>

              <Link
                href={SITE_CONFIG.ctaButton.href}
                className="flex items-center justify-between w-full border border-[rgba(32,34,31,0.20)] text-[#20221F] font-mono text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-[#EAE5DA] transition-colors rounded-none"
              >
                <span>{SITE_CONFIG.ctaButton.label}</span>
                <ArrowRight size={14} className="text-[#4F5A48]" />
              </Link>

              <div className="text-[11px] text-[#4F5A48] font-mono tracking-wider pt-2">
                FOUNDED BY RAZILA • STRATEGIC CREDIT ADVISORY
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
