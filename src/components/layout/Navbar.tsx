'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/content/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white border-b border-gray-200 py-3 shadow-xs'
            : 'bg-white/95 border-b border-gray-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Wordmark & Official Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="relative w-9 h-8 sm:w-10 sm:h-9 rounded-md overflow-hidden shrink-0 border border-gray-200/90 shadow-2xs group-hover:border-green-600 transition-colors">
              <Image
                src="/clientsmaxlogo.png"
                alt="CLIENTSMAX Logo"
                fill
                priority
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950 font-display leading-none group-hover:text-green-700 transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] font-mono tracking-[0.14em] text-green-700 font-semibold mt-1">
                CREDIT STRATEGY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {SITE_CONFIG.primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-gray-950 font-semibold'
                      : 'text-slate-600 hover:text-green-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-green-700 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => initiateRedirect(consultationResource)}
              className="btn-primary !px-5 !py-2.5 text-xs"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-green-200"
              />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-gray-900 hover:text-green-700 focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Clean Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <span className="text-xs font-mono tracking-[0.14em] text-green-700 uppercase font-semibold block">
                NAVIGATION
              </span>

              <nav className="flex flex-col divide-y divide-gray-100">
                {SITE_CONFIG.primaryNav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`py-4 text-xl font-display font-medium flex items-center justify-between ${
                        isActive ? 'text-green-700 font-bold' : 'text-gray-950'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono text-slate-400">→</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  initiateRedirect(consultationResource);
                }}
                className="btn-primary w-full"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>

              <div className="text-center text-xs font-mono text-slate-500">
                CLIENTSMAX • Established 2021
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
