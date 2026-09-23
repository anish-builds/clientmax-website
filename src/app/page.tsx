import React from 'react';
import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { FounderSection } from '@/components/home/FounderSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { EducationSection } from '@/components/home/EducationSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ClientStorySection } from '@/components/home/ClientStorySection';
import { FAQSection } from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <div className="relative bg-white">
      {/* 1. Asymmetric Editorial Hero */}
      <Hero />

      {/* 2. Premium Stat Marquee Ticker */}
      <StatsSection />

      {/* 3. Major Founder's Story Section */}
      <FounderSection />

      {/* 4. Core Services (Bento Grid Layout) */}
      <ServicesSection />

      {/* 5. The 4-Stage Credit Journey Framework */}
      <JourneyTimeline />

      {/* 6. FICO Proportional Stacked Bar Chart & Education */}
      <EducationSection />

      {/* 7. Consultation Process Workflow */}
      <ProcessSection />

      {/* 8. Real Client Outcomes (Single-Instance Carousel) */}
      <ClientStorySection />

      {/* 9. FAQ — Home page only */}
      <FAQSection />
    </div>
  );
}

