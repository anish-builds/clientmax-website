import React from 'react';
import { Hero } from '@/components/home/Hero';
import { PathwaySection } from '@/components/home/PathwaySection';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { EducationSection } from '@/components/home/EducationSection';
import { FounderSection } from '@/components/home/FounderSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { RecommendsSection } from '@/components/home/RecommendsSection';
import { ClientStorySection } from '@/components/home/ClientStorySection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { SocialEditorial } from '@/components/home/SocialEditorial';

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Signature Interactive Pathways ("Where Do You Want Your Credit To Take You?") */}
      <PathwaySection />

      {/* 3. The 4-Stage Credit Journey Timeline */}
      <JourneyTimeline />

      {/* 4. Editorial Credit Education Section ("Credit Is More Than A Number") */}
      <EducationSection />

      {/* 5. Editorial Founder Section ("Meet Razila") */}
      <FounderSection />

      {/* 6. What Happens Next? (3-Step Consultation Process) */}
      <ProcessSection />

      {/* 7. Curated Ecosystem ("CLIENTSMAX RECOMMENDS") */}
      <RecommendsSection />

      {/* 8. Documented Proof & Client Stories */}
      <ClientStorySection />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Final High-Impact CTA */}
      <FinalCTA />

      {/* 11. Editorial Social Channels */}
      <SocialEditorial />
    </div>
  );
}

