'use client';

import React, { useState } from 'react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource, SOCIAL_LINKS } from '@/content/resources';
import { ArrowUpRight, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

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
    <div className="pt-32 pb-24 bg-[#F5F2EA]">
      {/* Header */}
      <section className="border-b border-[rgba(32,34,31,0.10)] pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#20221F]" />
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#4F5A48] uppercase">
                COMMUNICATIONS // DIRECT ADVISORY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-editorial-serif text-[#20221F] tracking-tight leading-[1.02]">
              INITIATE
              <br />
              <span className="italic text-[#4F5A48]">THE CONVERSATION.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#4F5A48] font-light max-w-2xl leading-relaxed pt-2">
              Schedule a dedicated 1-on-1 strategy session directly with Razila or send an inquiry regarding our educational programs and speaking engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Calendly Direct Trigger + Inquiry Form */}
      <section className="py-20 border-b border-[rgba(32,34,31,0.10)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Consultation Hub */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-[rgba(32,34,31,0.15)] bg-[#EAE5DA]/50 p-8 sm:p-10 space-y-6 shadow-sm">
                <span className="text-[10px] font-mono tracking-widest text-[#20221F] uppercase block font-semibold">
                  FASTEST PATHWAY
                </span>

                <h2 className="text-3xl font-editorial-serif text-[#20221F]">
                  Book 1-on-1 Strategy Session
                </h2>

                <p className="text-xs text-[#4F5A48] font-light leading-relaxed">
                  Reserve a confidential video consultation on Calendly. Review your 3-bureau report, identify immediate priorities, and get a concrete roadmap for your auto, mortgage, or business credit objectives.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#20221F]">
                    <CheckCircle2 size={14} className="text-[#20221F]" />
                    <span>Direct advisory with Razila</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#20221F]">
                    <CheckCircle2 size={14} className="text-[#20221F]" />
                    <span>Comprehensive line-by-line report audit</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#20221F]">
                    <CheckCircle2 size={14} className="text-[#20221F]" />
                    <span>Actionable 90-day execution checklist</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(32,34,31,0.10)]">
                  <button
                    onClick={() => initiateRedirect(consultationResource)}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#20221F] text-[#F5F2EA] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                  >
                    <span>BOOK YOUR CREDIT CONSULTATION →</span>
                    <ArrowUpRight size={14} className="text-[#B9D65A]" />
                  </button>
                </div>
              </div>

              {/* Advisory Response Standard */}
              <div className="p-6 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/30 space-y-3 text-xs text-[#4F5A48] shadow-sm">
                <div className="flex items-center gap-2 text-[#20221F]">
                  <Clock size={14} className="text-[#4F5A48]" />
                  <span className="font-mono uppercase tracking-wider font-semibold">RESPONSE STANDARDS</span>
                </div>
                <p className="font-light leading-relaxed">
                  General inquiries are reviewed Monday through Friday. Please allow 24 to 48 business hours for a detailed response from our advisory team.
                </p>
              </div>
            </div>

            {/* Right Column: General Inquiry Form */}
            <div className="lg:col-span-7 border border-[rgba(32,34,31,0.15)] bg-[#F5F2EA] p-8 sm:p-12 shadow-sm">
              <div className="space-y-2 mb-8">
                <span className="text-[10px] font-mono tracking-widest text-[#4F5A48] uppercase block font-semibold">
                  WRITTEN INQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#20221F]">
                  Send a Direct Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 border border-[#B9D65A] bg-[#B9D65A]/10 space-y-4 text-center">
                  <CheckCircle2 size={32} className="text-[#20221F] mx-auto" />
                  <h4 className="text-xl font-editorial-serif text-[#20221F]">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-[#4F5A48] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been logged. Our advisory team will review your message and reply to {formData.email} within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[#20221F] underline pt-2 block mx-auto font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F5A48] block font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Razila Vance"
                        className="w-full bg-[#EAE5DA]/40 border border-[rgba(32,34,31,0.15)] px-4 py-3 text-sm text-[#20221F] focus:border-[#20221F] focus:outline-none transition-colors rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F5A48] block font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-[#EAE5DA]/40 border border-[rgba(32,34,31,0.15)] px-4 py-3 text-sm text-[#20221F] focus:border-[#20221F] focus:outline-none transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F5A48] block font-semibold">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#EAE5DA]/40 border border-[rgba(32,34,31,0.15)] px-4 py-3 text-sm text-[#20221F] focus:border-[#20221F] focus:outline-none transition-colors rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F5A48] block font-semibold">
                        Primary Focus
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full bg-[#EAE5DA]/40 border border-[rgba(32,34,31,0.15)] px-4 py-3 text-sm text-[#20221F] focus:border-[#20221F] focus:outline-none transition-colors rounded-none"
                      >
                        <option value="understand">Audit 3-Bureau Report</option>
                        <option value="vehicle">Vehicle Loan Preparation</option>
                        <option value="mortgage">Mortgage Pre-Approval Planning</option>
                        <option value="business">Business Credit Separation</option>
                        <option value="speaking">Speaking / Education Workshop</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#4F5A48] block font-semibold">
                      Message / Objective Context *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you would like to accomplish..."
                      className="w-full bg-[#EAE5DA]/40 border border-[rgba(32,34,31,0.15)] px-4 py-3 text-sm text-[#20221F] focus:border-[#20221F] focus:outline-none transition-colors resize-none rounded-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#20221F] text-[#F5F2EA] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#383d35] transition-colors rounded-none border border-[#20221F]"
                    >
                      <span>Submit Inquiry</span>
                    </button>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-[#4F5A48]">
                    <ShieldAlert size={13} className="text-[#20221F]" />
                    <span>Your contact information is strictly confidential. Never sold or shared.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Direct Channels */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#20221F] uppercase block mb-6 font-semibold">
            DIRECT SOCIAL CHANNELS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-[rgba(32,34,31,0.12)] bg-[#EAE5DA]/30 hover:bg-[#EAE5DA] hover:border-[#20221F]/30 transition-all flex items-center justify-between shadow-sm"
              >
                <div>
                  <span className="text-base font-editorial-serif text-[#20221F] block">
                    {s.platform}
                  </span>
                  <span className="text-xs font-mono text-[#4F5A48]">
                    {s.handle}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-[#4F5A48]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
