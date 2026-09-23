'use client';

import React, { useState } from 'react';
import { useRedirect } from '@/context/RedirectContext';
import { getResource, SOCIAL_LINKS } from '@/content/resources';
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Mail, Send } from 'lucide-react';

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
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="border-b border-gray-100 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-xs font-mono tracking-widest text-green-700 uppercase font-bold">
                COMMUNICATIONS // DIRECT ADVISORY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-gray-950 tracking-tight leading-[1.04]">
              Connect With CLIENTSMAX<span className="text-green-600">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
              Schedule a dedicated 1-on-1 strategy session directly with Razila on Calendly, or send an inquiry regarding workshops and consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Calendly Direct Trigger + Inquiry Form */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Consultation Booking Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-green-200 bg-green-50/50 p-8 sm:p-9 rounded-sm space-y-6 shadow-xs">
                <span className="text-xs font-mono tracking-widest text-green-800 uppercase block font-bold">
                  FASTEST SCHEDULING PATHWAY
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
                  Book 1-on-1 Consultation
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Reserve a private video consultation on Calendly directly with Razila. Review your 3-bureau report, identify immediate priorities, and get a concrete roadmap for your credit goals.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2.5 text-sm text-gray-800">
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-700 shrink-0" />
                    <span>Direct 1-on-1 session with Razila</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-800">
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-700 shrink-0" />
                    <span>Line-by-line 3-bureau report audit</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-800">
                    <CheckCircle2 size={16} strokeWidth={1.5} className="text-green-700 shrink-0" />
                    <span>Prioritized sequencing checklist</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-green-200/80">
                  <button
                    onClick={() => initiateRedirect(consultationResource)}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs tracking-wider cursor-pointer"
                  >
                    <span>OPEN CALENDLY SCHEDULER</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-200" />
                  </button>
                </div>
              </div>

              {/* Advisory Response Standard */}
              <div className="p-6 border border-gray-200 bg-gray-50 rounded-sm space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 text-gray-900 font-bold font-mono uppercase tracking-wider">
                  <Clock size={16} strokeWidth={1.5} className="text-green-700" />
                  <span>RESPONSE STANDARDS</span>
                </div>
                <p className="leading-relaxed font-normal">
                  General written inquiries are reviewed Monday through Friday. Please allow 24 to 48 business hours for a reply.
                </p>
              </div>
            </div>

            {/* Right Column: General Inquiry Form */}
            <div className="lg:col-span-7 border border-gray-200 bg-white p-8 sm:p-10 rounded-sm shadow-xs">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-mono tracking-widest text-green-700 uppercase block font-bold">
                  DIRECT MESSAGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-950">
                  Send A Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 border border-green-200 bg-green-50 rounded-sm space-y-4 text-center">
                  <CheckCircle2 size={32} strokeWidth={1.5} className="text-green-700 mx-auto" />
                  <h4 className="text-xl font-bold font-display text-gray-950">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your message has been logged. Our advisory team will review your inquiry and reply to {formData.email} within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-green-700 underline font-bold pt-2 block mx-auto cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-bold">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-bold">
                        Primary Focus
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors"
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
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-700 block font-bold">
                      Message / Context *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your credit situation or financial timeline..."
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 rounded-sm focus:border-green-600 focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs tracking-wider cursor-pointer"
                    >
                      <Send size={16} strokeWidth={1.5} />
                      <span>Submit Message</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={16} strokeWidth={1.5} className="text-green-700 shrink-0" />
                    <span>Your information is strictly confidential. Never shared or sold.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Direct Channels */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs font-mono tracking-widest text-green-700 uppercase block mb-6 font-bold">
            DIRECT SOCIAL CHANNELS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-6 border border-gray-200 bg-gray-50 hover:bg-white hover:border-green-600 rounded-sm flex items-center justify-between shadow-2xs"
              >
                <div>
                  <span className="text-base font-bold font-display text-gray-900 block">
                    {s.platform}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {s.handle}
                  </span>
                </div>
                <ArrowUpRight size={16} strokeWidth={1.5} className="text-green-700" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
