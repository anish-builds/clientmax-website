'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRedirect } from '@/context/RedirectContext';
import { getResource, SOCIAL_LINKS } from '@/content/resources';
import { ArrowUpRight, ArrowRight, CheckCircle2, Clock, ShieldCheck, Mail, Send, Calendar, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUpHeader } from '@/lib/motion';

// High-fidelity platform logos
function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.27 6.27 0 0 0 1.86-4.46V8.71a8.21 8.21 0 0 0 4.79 1.52V6.78a4.85 4.85 0 0 1-.87-.09z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const CHANNEL_META: Record<
  string,
  {
    icon: (props: { className?: string }) => React.JSX.Element;
    iconBg: string;
    accentHover: string;
    hoverBorder: string;
    hoverGlow: string;
    tag: string;
  }
> = {
  Instagram: {
    icon: InstagramIcon,
    iconBg: 'bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white',
    accentHover: 'group-hover:text-rose-600',
    hoverBorder: 'hover:border-rose-300',
    hoverGlow: 'hover:shadow-md',
    tag: 'Profile Audits & Q&A',
  },
  TikTok: {
    icon: TikTokIcon,
    iconBg: 'bg-slate-900 text-white border border-slate-800 group-hover:bg-black',
    accentHover: 'group-hover:text-slate-950',
    hoverBorder: 'hover:border-slate-800',
    hoverGlow: 'hover:shadow-md',
    tag: 'Quick Credit Tips',
  },
  Facebook: {
    icon: FacebookIcon,
    iconBg: 'bg-blue-50 text-[#1877F2] border border-blue-100 group-hover:bg-[#1877F2] group-hover:text-white',
    accentHover: 'group-hover:text-[#1877F2]',
    hoverBorder: 'hover:border-blue-300',
    hoverGlow: 'hover:shadow-md',
    tag: 'Community & Essays',
  },
  Threads: {
    icon: ThreadsIcon,
    iconBg: 'bg-gray-100 text-gray-900 border border-gray-200 group-hover:bg-black group-hover:text-white',
    accentHover: 'group-hover:text-gray-950',
    hoverBorder: 'hover:border-gray-900',
    hoverGlow: 'hover:shadow-md',
    tag: 'Rate Cuts & Insights',
  },
};

export default function ContactPage() {
  const { initiateRedirect } = useRedirect();
  const consultationResource = getResource('consultation');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryGoal: 'understand',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* 1. COMPACT, RICH EDITORIAL HERO */}
      <section className="border-b border-gray-100 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUpHeader}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  COMMUNICATIONS // DIRECT ADVISORY
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold font-display text-gray-950 tracking-tight leading-[1.06]">
                CONNECT WITH CLIENTSMAX<span className="text-green-600">.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-2xl">
                Schedule a dedicated 1-on-1 strategy session directly with Razila on Calendly, or send a confidential inquiry regarding credit profile audits and financing preparation.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-600">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm font-medium">
                  <CheckCircle2 size={13} className="text-green-600" />
                  CONFIDENTIAL ADVISORY
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-sm font-medium">
                  <Clock size={13} className="text-green-600" />
                  MON–FRI 24–48H RESPONSE
                </span>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 p-6 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-green-700 font-bold">
                <ShieldCheck size={16} />
                <span>DIRECT FOUNDER CONTACT</span>
              </div>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Every consultation is conducted directly with founder Razila. We never outsource your confidential credit records to offshore call centers.
              </p>
              <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>HEADQUARTERS</span>
                <span className="text-gray-950 font-semibold">USA CONFIDENTIAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN ADVISORY ARCHITECTURE: SCHEDULING CARD + INQUIRY FORM */}
      <section className="py-14 sm:py-18 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Consultation Booking Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Scheduling Panel */}
              <div className="border border-green-300 bg-green-50/40 p-7 sm:p-8 rounded-sm space-y-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-green-800 uppercase font-bold">
                    FASTEST SCHEDULING PATHWAY
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-mono rounded-xs font-semibold">
                    1-ON-1
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950 tracking-tight">
                    Book 1-on-1 Consultation
                  </h2>
                  <p className="text-xs font-mono text-green-800 uppercase font-semibold">
                    Direct Calendar with Razila
                  </p>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-sans">
                  Reserve a private consultation on Calendly directly with Razila. Review your 3-bureau report, identify immediate priorities, and get a concrete roadmap for your credit goals.
                </p>

                <div className="space-y-2.5 pt-1 text-sm font-sans text-gray-800">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} strokeWidth={1.75} className="text-green-700 shrink-0" />
                    <span>Direct 1-on-1 session with Razila</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} strokeWidth={1.75} className="text-green-700 shrink-0" />
                    <span>Line-by-line 3-bureau report audit</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} strokeWidth={1.75} className="text-green-700 shrink-0" />
                    <span>Prioritized sequencing checklist</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-green-200">
                  <button
                    onClick={() => initiateRedirect(consultationResource)}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider cursor-pointer"
                  >
                    <span>OPEN CALENDLY SCHEDULER</span>
                    <ArrowUpRight size={15} strokeWidth={1.75} className="text-green-200" />
                  </button>
                </div>
              </div>

              {/* Founder Credential Card */}
              <div className="border border-gray-200 bg-white p-5 rounded-sm flex items-center gap-4 shadow-2xs">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <Image
                    src="/razila_founder.jpg"
                    alt="Razila — Founder & Credit Strategist"
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-green-700 font-semibold block">
                    FOUNDER &amp; STRATEGIST
                  </span>
                  <h4 className="text-sm font-bold font-display text-gray-950">Razila</h4>
                  <p className="text-xs text-gray-500 font-sans">
                    Guiding clients toward long-term credit strength since 2021.
                  </p>
                </div>
              </div>

              {/* Advisory Response Standard */}
              <div className="p-5 border border-gray-200 bg-gray-50 rounded-sm space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2 text-gray-900 font-bold font-mono uppercase tracking-wider">
                  <Clock size={15} strokeWidth={1.5} className="text-green-700" />
                  <span>RESPONSE STANDARDS</span>
                </div>
                <p className="leading-relaxed font-sans">
                  General written inquiries are reviewed Monday through Friday. Please allow 24 to 48 business hours for a detailed reply.
                </p>
              </div>
            </div>

            {/* Right Column: Confidential Inquiry Form */}
            <div className="lg:col-span-7 border border-gray-200 bg-white p-7 sm:p-10 rounded-sm shadow-xs space-y-6">
              <div className="space-y-1.5 border-b border-gray-100 pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                    DIRECT INQUIRY
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
                  Send A Confidential Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-sans">
                  Have a question about our services or need guidance on where to start? Reach out below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 px-6 border border-green-200 bg-green-50 rounded-sm space-y-4 text-center">
                  <CheckCircle2 size={36} strokeWidth={1.5} className="text-green-700 mx-auto" />
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-gray-950">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Your message has been logged. Our advisory team will review your inquiry and reply to <span className="font-semibold text-gray-900">{formData.email}</span> within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-green-700 underline font-bold pt-3 block mx-auto cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-semibold">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-semibold">
                        Primary Financing Focus
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="understand">Audit 3-Bureau Report</option>
                        <option value="vehicle">Vehicle Loan Preparation</option>
                        <option value="mortgage">Mortgage Pre-Approval Planning</option>
                        <option value="building">Credit Building Lines</option>
                        <option value="general">General Strategy Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-semibold">
                      Message / Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your credit situation or upcoming financial milestone..."
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 text-xs tracking-wider cursor-pointer"
                    >
                      <Send size={15} strokeWidth={1.5} />
                      <span>Submit Message</span>
                    </button>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                      <ShieldCheck size={15} className="text-green-700 shrink-0" />
                      <span>100% Confidential Guarantee</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICIAL PUBLIC CHANNELS (PREMIUM SVG DESIGN) */}
      <section className="py-16 sm:py-20 border-b border-gray-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-12 gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-semibold">
                  DIRECT SOCIAL CHANNELS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
                Connect Across Public Channels<span className="text-green-600">.</span>
              </h2>
              <p className="text-sm text-slate-600 font-sans">
                Follow verified CLIENTSMAX channels for daily credit analysis breakdowns, live Q&amp;A sessions, and educational case studies.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500 bg-white border border-gray-200/80 px-3.5 py-2 rounded-lg shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DIRECT ACCESS • FREE INSIGHTS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_LINKS.map((social) => {
              const meta = CHANNEL_META[social.platform] || {
                icon: ArrowUpRight,
                iconBg: 'bg-gray-100 text-gray-800',
                accentHover: 'group-hover:text-green-700',
                hoverBorder: 'hover:border-green-600',
                hoverGlow: 'hover:shadow-md',
                tag: 'Community',
              };
              const IconComponent = meta.icon;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-white border border-gray-200/90 rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${meta.hoverBorder} ${meta.hoverGlow} hover:-translate-y-1 shadow-xs`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 shadow-2xs ${meta.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        OFFICIAL
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className={`text-xl font-bold font-display text-gray-950 transition-colors ${meta.accentHover}`}>
                          {social.platform}
                        </h3>
                        <span className="text-[10px] font-mono font-semibold text-green-700">
                          {social.handle}
                        </span>
                      </div>

                      <span className="inline-block text-[10px] font-mono tracking-wider uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs mt-1">
                        {meta.tag}
                      </span>

                      <p className="text-sm text-slate-600 font-sans leading-relaxed pt-2.5">
                        {social.audienceContext}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-600 group-hover:text-green-700 transition-colors">
                    <span>Follow @clientsmax</span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DIRECT STRATEGY SELECTOR PROMPT */}
      <section className="pt-16 pb-4">
        <div className="max-w-xl mx-auto px-4 text-center space-y-3">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
            UNSURE WHICH PATHWAY FITS YOUR SITUATION?
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-4"
          >
            <span>Run the 60-Second Strategy Selector</span>
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
