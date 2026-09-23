import React from 'react';
import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { FounderSection } from '@/components/home/FounderSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { EducationSection } from '@/components/home/EducationSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ClientStorySection } from '@/components/home/ClientStorySection';

export default function HomePage() {
  return (
    <div className="relative bg-white">
      {/* 1. Asymmetric Editorial Hero */}
      <Hero />

      {/* 2. Verified Social Proof & Statistics (5,000+ Clients Helped, Founded 2021) */}
      <StatsSection />

      {/* 3. Major Founder's Story Section (Authentic Nepal-to-ClientsMax Journey) */}
      <FounderSection />

      {/* 4. Core Services (Bento Grid Layout) */}
      <ServicesSection />

      {/* 5. The 4-Stage Credit Journey Framework (Understand, Strategize, Build, Leverage) */}
      <JourneyTimeline />

      {/* 6. Scan-Friendly Credit Scoring Education */}
      <EducationSection />

      {/* 7. Consultation Process Workflow */}
      <ProcessSection />

      {/* 8. Real Client Outcomes (Infinite Loop Carousel) */}
      <ClientStorySection />
    </div>
  );
}
